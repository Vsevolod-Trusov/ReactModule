import React, { FC, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery } from '@tanstack/react-query';

import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'config/fetch_urls/fetch';
import NotesLayoutContainer from 'pages/Notes/components/NotesLayout';
import { TNote, TNoteListProps } from 'pages/Notes/types';

import { LIMIT, START } from './constants';
import { useSelector } from 'react-redux';
import { selectNotes } from '../../config/redux/slices/notes.slice';

const InfinityScrollContainer: FC<TNoteListProps> = ({ notes ,handleSetSelectedNote }) => {
  const [postData, setPostData] = useState<TNote[]>(notes.slice(START, LIMIT));
  const [visible, setVisible] = useState(LIMIT);
    const [hasMore, setHasMore] = useState(true);

    const setNotes = () => {

      const newLimit = visible + LIMIT;
      const addNotes: TNote[] = notes.slice(visible, newLimit);
      if (notes.length > postData.length) {
        setTimeout(() => {
          setPostData([...postData].concat(addNotes));
        }, 500);
        setVisible(newLimit);
      } else {
        setHasMore(false);
      }

    };

    return (
        <NotesLayoutContainer notes={postData}
                              handleSetSelectedNote={handleSetSelectedNote}
                              setNotes={setNotes}
                              hasMore={hasMore}
        />

    );
  }
;

export default InfinityScrollContainer;
