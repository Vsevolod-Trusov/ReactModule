import { HTMLAttributes } from 'react';

export interface IFormInput extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  placeholder?: string;
  value?: number | string | Date;
}
