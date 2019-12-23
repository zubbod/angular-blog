import { Injectable } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { IAppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';
import { GetPosts, GetPost, EPostActions, GetPostSuccess, GetPostsSuccess } from '../actions/post.actions';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { selectPostsList } from '../selectors/posts.selectors';
import { IPost } from '../../interfaces/i-post.interface';
import { of } from 'rxjs';

@Injectable()
export class PostsEffects {

  @Effect()
  getPost$ = this.actions$.pipe(
    ofType<GetPost>(EPostActions.GetPost),
    map(action => action.payload),
    withLatestFrom(this.store.select(selectPostsList)),
    switchMap(([id, posts]) => {
      const post = posts.filter((p: IPost) => p.id === id)[0];
      return of(new GetPostSuccess(post));
    })
  );

  @Effect()
  getPosts$ = this.actions$.pipe(
    ofType<GetPosts>(EPostActions.GetPosts),
    switchMap( () => this.postService.getPosts()),
    switchMap((users: IPost[]) => {
      return of(new GetPostsSuccess(users));
    })
  );

  constructor(
    private postService: PostService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}

}
