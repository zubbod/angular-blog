import { Action } from '@ngrx/store';
import { IPost } from '../../interfaces/i-post.interface';

export enum EPostActions {
  GetPosts = '[Post] Get Posts',
  GetPostsSuccess = '[Post] Get Posts Success',
  GetPost = '[Post] Get Post',
  GetPostSuccess = '[Post] Get Post Success',
}

export class GetPosts implements Action {
  public readonly type = EPostActions.GetPosts;
}

export class GetPostsSuccess implements Action {
  public readonly type = EPostActions.GetPostsSuccess;
  constructor(public payload: IPost[]) {}
}

export class GetPost implements Action {
  public readonly type = EPostActions.GetPost;
  constructor(public payload: string) {}
}

export class GetPostSuccess implements Action {
  public readonly type = EPostActions.GetPostSuccess;
  constructor(public payload: IPost) {}
}

export type PostsActions = GetPosts | GetPost | GetPostsSuccess | GetPostSuccess;
