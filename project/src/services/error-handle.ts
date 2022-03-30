import request from 'axios';
import {ErrorType} from '../types/error';
import {HTTP_CODE} from '../const';
import {toast} from 'react-toastify';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  //if (response) {
  if (response?.status) {
    if (response?.status === HTTP_CODE.UNAUTHORIZED) {
      toast.info(response.data.error);
    } else {
      toast.error(response.data.error);
    }

    /*switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.info(response.data.error);
        break;
    }*/
  }
};
