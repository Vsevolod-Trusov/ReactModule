import {
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';

import { TNote } from 'pages/NoteList/types';
import { QUERY_KEYS } from 'config/globalConstants';
import {
  selectFilter,
  setPostNotes,
  setShared,
} from 'store/slices/notes.slice';
import { FILTER_TYPES } from 'components/FilterNotes/constants';

import { TResponseError } from '../types';
import { apiClient } from '../base';
import { FETCH_URLS, PAGE_ELEMENTS_LIMIT } from '../constants';
import { START_PAGE } from './constants';

const getSharedNotes = (): UseInfiniteQueryResult<TNote[], TResponseError> => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleSuccess = (data: InfiniteData<TNote[]>) => {
    if (filter.type) {
      data.pages = data.pages.map((page) =>
        page.filter((note: TNote) => {
          if (filter.type === FILTER_TYPES.DATE) {
            return (
              new Date(filter.value).toISOString() ===
              new Date(note.dateCreation).toISOString()
            );
          } else {
            return note.title === filter.value;
          }
        }),
      );
    }

    const notes = data.pages.flat();
    dispatch(setShared(notes));
    dispatch(setPostNotes([...notes]));
  };

  return useInfiniteQuery(
    [QUERY_KEYS.NOTES],
    async ({ pageParam = START_PAGE }) => {
      const url = `${FETCH_URLS.NOTES}?page=${pageParam}&limit=${PAGE_ELEMENTS_LIMIT}&isShared=true`;

      return await apiClient.get(url).then((response) => response.data);
    },
    {
      onSuccess: handleSuccess,
      retry: false,
      refetchOnWindowFocus: false,
      getNextPageParam: (currentPage, allPages) => {
        return currentPage.length < PAGE_ELEMENTS_LIMIT
          ? false
          : !currentPage.length
          ? false
          : allPages.length + 1;
      },
    },
  );
};

export default getSharedNotes;
