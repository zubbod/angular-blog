import { IPost } from '../../interfaces/i-post.interface';

export interface IPostsState {
  posts: IPost[];
  addedPost?: IPost;
  deletedPost?: IPost;
  editedPost?: IPost;
  selectedPost?: IPost;
}

export const initPostsState: IPostsState = {
  posts: null,
  addedPost: null,
  deletedPost: null,
  editedPost: null,
  selectedPost: null,
};
