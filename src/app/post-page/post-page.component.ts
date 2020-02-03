import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from '../shared/models/post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  public post: Post;

  constructor(
    private readonly postService: PostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async (param: Params) => {
      await this.postService.getById(param.id).then((post: Post) => {
        this.post = post;
      })
    })
  }

}
