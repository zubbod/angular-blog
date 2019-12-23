import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../shared/models/post';
import { IAppState } from '../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetPosts, GetPostsSuccess } from '../store/actions/post.actions';
import { IPost } from '../interfaces/i-post.interface';
import { selectPostsList } from '../store/selectors/posts.selectors';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // posts$: Observable<Post[]>;
  posts$ = this.store.pipe(select(selectPostsList));

  constructor(
    // private postService: PostService,
    private store: Store<IAppState>,
  ) { }

  ngOnInit() {
    // this.posts$ = this.postService.getPosts();
    this.store.dispatch(new GetPosts());
  }

}
