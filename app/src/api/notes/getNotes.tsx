import {
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';

import { QUERY_KEYS } from 'config/globalConstants';
import { selectEmail } from 'store/slices/user.slice';
import {
  selectFilter,
  setPostNotes,
  setReduxNotes,
} from 'store/slices/notes.slice';
import { TNote } from 'pages/NoteList/types';
import { filterNotes, isThereNextPage } from 'utils';
import { TResponseError } from 'api/types';
import { apiClient } from 'api/base';
import { FETCH_URLS, PAGE_ELEMENTS_LIMIT } from 'api/constants';

import { START_PAGE } from './constants';

const getNotes = (): UseInfiniteQueryResult<TNote[], TResponseError> => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleSuccess = (data: InfiniteData<TNote[]>) => {
    if (filter.type) {
      data.pages = filterNotes(data.pages, filter.type, filter.value);
    }

    const notes = data.pages.flat();
    dispatch(setReduxNotes(notes));
    dispatch(setPostNotes([...notes]));
  };

  return useInfiniteQuery(
    [QUERY_KEYS.NOTES],
    async ({ pageParam = START_PAGE }) => {
      const url = `${FETCH_URLS.NOTES}?page=${pageParam}&limit=${PAGE_ELEMENTS_LIMIT}&author=${email}`;
      const response = await apiClient.get(url);

      return response.data;
    },
    {
      onSuccess: handleSuccess,
      retry: false,
      refetchOnWindowFocus: false,
      getNextPageParam: (currentPage, allPages) => {
        return isThereNextPage(
          currentPage.length,
          !currentPage.length,
          allPages.length,
        );
      },
    },
  );
};

export default getNotes;
