import { PostsActions, EPostActions } from '../actions/post.actions';
import { initPostsState, IPostsState } from '../state/posts.state';

export function postsReducer(
  state = initPostsState,
  action: PostsActions
): IPostsState {
  switch (action.type) {
    case EPostActions.GetPostSuccess:
      return {
        ...state,
        selectedPost: action.payload,
      };
    case EPostActions.GetPostsSuccess:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}
