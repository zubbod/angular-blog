import { IAppState } from '../state/app.state';
import { ActionReducerMap } from '@ngrx/store';
import { postsReducer } from './posts.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  posts: postsReducer,
};
