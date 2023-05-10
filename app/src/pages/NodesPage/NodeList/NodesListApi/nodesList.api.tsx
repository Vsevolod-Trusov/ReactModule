import React from 'react'
import { NODES, TNode } from '../index';

export const isSelected = (currentTitle: string, selectedTitle: string) => (currentTitle === selectedTitle)

export const handleSelectNode = (item: TNode, setSelectedNode:  React.Dispatch<React.SetStateAction<TNode>>) => {
  setSelectedNode(item)
}

export const setNotesInLocalStorage = () => {
  const savedNotes = localStorage.getItem('notes');

  if (!savedNotes)
    localStorage.setItem('notes', JSON.stringify(NODES));
}

export const setNotesFromLocalStorage = (setNotes:  React.Dispatch<React.SetStateAction<TNode[]>>) => {
  const savedNotes = localStorage.getItem('notes');

  if (savedNotes) {
    setNotes(JSON.parse(savedNotes));
  }
}
