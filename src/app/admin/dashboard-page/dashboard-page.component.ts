import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../shared/models/post';
import { PostService } from '../../shared/services/post.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotifyService } from '../shared/services/notify.service';
import { NotifyEnum } from '../shared/enums/notify.enum';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  searchString = '';
  private unsubscribe: Subject<any> = new Subject();

  constructor(
    private postService: PostService,
    private notify: NotifyService
  ) { }

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
      this.notify.show(NotifyEnum.Warning, 'Пост успешно удален');
      return this.posts = this.posts.filter((post: Post) => post.id !== postId);
    });
  }

}
