import React, { useEffect, useState } from 'react';

import NodeList from './NoteList';
import { TNode } from './types';
import { INITIAL_STATE, NODES } from './constants';

const NotesListContainer = () => {
  const [notes, setNotes] = useState<TNode[]>([]);
  const [selectedNode, setSelectedNode] = useState<TNode>(INITIAL_STATE);

  //
 //const isSelected = (currentTitle: string, selectedTitle: string) => (currentTitle === selectedTitle)

 const handleSelectNode = (item: TNode) => {
    setSelectedNode(item)
  }

 const setNotesInLocalStorage = () => {
    const savedNotes = localStorage.getItem('notes');

    if (!savedNotes)
      localStorage.setItem('notes', JSON.stringify(NODES));
  }

 const setNotesFromLocalStorage = (setNotes:  React.Dispatch<React.SetStateAction<TNode[]>>) => {
    const savedNotes = localStorage.getItem('notes');

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }
//

  useEffect(() => {
    setNotesInLocalStorage();
    setNotesFromLocalStorage(setNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <NodeList note={selectedNode}
              setNotes={setNotes}
              notes={notes}
              setSelectedNode={setSelectedNode}
              handleSetSelectedNote={handleSelectNode}
    />
  )
}

export default NotesListContainer
