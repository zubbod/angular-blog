import { IAppState } from '../state/app.state';
import { IPostsState } from '../state/posts.state';
import { createSelector } from '@ngrx/store';

const selectPosts = (state: IAppState): IPostsState => state.posts;

export const selectPostsList = createSelector(
  selectPosts,
  (state: IPostsState) => state.posts
);

export const selectPost = createSelector(
  selectPosts,
  (state: IPostsState) => state.selectedPost
);
