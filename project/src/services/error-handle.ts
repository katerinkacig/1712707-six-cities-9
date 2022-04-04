import request from 'axios';
import {ErrorType} from '../types/error';
import {HttpCode} from '../const';
import {toast} from 'react-toastify';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response?.status) {
    if (response?.status === HttpCode.Unauthorized) {
      toast.info(response.data.error);
    } else {
      toast.error(response.data.error);
    }
  }
};
