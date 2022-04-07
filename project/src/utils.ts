import {AuthorizationStatus} from './const';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export function setFirstSymbolToUpperCase(string:string):string {
  if (!string) {return string;}

  return string[0].toUpperCase() + string.slice(1);
}


