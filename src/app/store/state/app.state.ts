import {RouterReducerState} from '@ngrx/router-store';
import { IPostsState } from './posts.state';

export interface IAppState {
  router?: RouterReducerState;
  posts: IPostsState;
}

export const initAppState: IAppState = {
  posts: null,
}

export function getInitialState(): IAppState {
  return initAppState;
}