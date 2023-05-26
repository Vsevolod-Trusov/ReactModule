import React, { FC, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery } from '@tanstack/react-query';

import { FETCH_METHODS, FETCH_URLS, MOCK_API_ADDRESS } from 'config/fetch_urls/fetch';
import NotesLayoutContainer from 'pages/Notes/components/NotesLayout';
import { TNoteListProps } from 'pages/Notes/types';

import { LIMIT, START } from './constants';

const InfinityScrollContainer: FC<TNoteListProps> = ({ handleSetSelectedNote }) => {

    const [allNotes, setAllNotes ] = useState([]);
    const [postData, setPostData] = useState([]);
    const [visible, setVisible] = useState(START);
    const [hasMore, setHasMore] = useState(true);

    const { data, isSuccess, isLoading, isError } = useQuery({
      queryKey: ['notes'],
      queryFn: async () => {
        console.log('getting');
        return await fetch(`${MOCK_API_ADDRESS}${FETCH_URLS.NOTES}`, {
          method: FETCH_METHODS.GET,
          cache: 'no-cache'
        })
      },
    });

    const getNotes = async () => {
      console.log(isLoading);
      console.log(isError);
      const setNotes = isSuccess ? await data?.json() : allNotes
      setAllNotes(setNotes)
    };

    const setNotes = async () => {
      console.log('setting');

      const newLimit = visible + LIMIT;
      const addNotes = allNotes.slice(visible, visible === START ? LIMIT : newLimit);

      console.log('all notes length: ', allNotes.length);
      if (allNotes.length > postData.length) {
        setTimeout(() => {
          setPostData([...postData].concat(addNotes));
        }, 200);
        setVisible(newLimit);

      } else {
        setHasMore(false);
      }

    };

  useEffect(() => {
    if (isSuccess && !data?.bodyUsed && allNotes.length === 0){
      getNotes();
    }
  }, [data, isSuccess, allNotes]);

    useEffect(() => {
      if (isSuccess && postData.length === 0)
        setNotes();

    }, [postData, isSuccess]);



    return (
      <InfiniteScroll
        dataLength={postData.length}
        next={setNotes}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}

      >
        <NotesLayoutContainer notes={postData}
                              handleSetSelectedNote={handleSetSelectedNote} />
      </InfiniteScroll>
    );
  }
;

export default InfinityScrollContainer;
