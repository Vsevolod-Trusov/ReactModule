import React, { useEffect } from 'react';

import {
  Box,
  useState,
  TNode,
  initialState,
  setNotesFromLocalStorage,
  setNotesInLocalStorage,
  SelectedNote,
  NodesLayout
} from './index';


const NodeList = () => {
  const [notes, setNotes] = useState<TNode[]>([]);
  const [selectedNode, setSelectedNode] = useState<TNode>(initialState);
  const { title, description, dateCreation } = selectedNode;

  useEffect(() => {
    setNotesInLocalStorage();
    setNotesFromLocalStorage(setNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <Box>
      <SelectedNote title={title}
                    description={description}
                    dateCreation={dateCreation}
                    setNotes={setNotes}
                    notes={notes} />

      <NodesLayout title={title}
                   notes={notes}
                   setSelectedNode={setSelectedNode} />
    </Box>
  );
};

export default NodeList;
