import React from 'react'
import { TNode } from "../NodeList/types";

export interface INodesLayout {
  title: string,
  notes: TNode[],
  setSelectedNode:  React.Dispatch<React.SetStateAction<TNode>>
}
