import { AxiosError } from 'axios';

interface IResponseError {
  message: string;
  statusCode: number;
  success: boolean;
}

export type TResponseError = AxiosError<IResponseError>;
