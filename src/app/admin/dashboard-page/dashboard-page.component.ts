import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../shared/models/post';
import { PostService } from '../../shared/services/post.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  searchString = '';
  private unsubscribe: Subject<any> = new Subject();

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe((response: Post[]) => this.posts = response);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  removePost(postId: string) {
    this.postService.removePost(postId).pipe(
      takeUntil(this.unsubscribe)
    )
    .subscribe(() => {
      return this.posts = this.posts.filter((post: Post) => post.id !== postId);
    });
  }

}
