import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getServerErrorStatus = (state: State): boolean => state[NameSpace.Error].isServerError;
