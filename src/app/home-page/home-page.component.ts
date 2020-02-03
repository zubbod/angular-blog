import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { Post } from '../shared/models/post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public posts: Post[] = [];

  constructor(
    private readonly postService: PostService,
  ) { }

  async ngOnInit() {
    await this.postService.getPosts().then((response: Post[]) => {
      this.posts = response;
    })
  }

}
