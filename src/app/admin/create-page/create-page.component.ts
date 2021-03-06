import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../shared/models/post';
import { PostService } from '../../shared/services/post.service';
import { NotifyService } from '../shared/services/notify.service';
import { NotifyEnum } from '../shared/enums/notify.enum';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private postService: PostService,
    private notify: NotifyService,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
  }

  submit() {
    let post = new Post();
    post = this.form.getRawValue();
    post.date = new Date();
    this.postService.createPost(post).subscribe(() => {
      this.notify.show(NotifyEnum.Success, 'Пост создан успешно :)')
      this.form.reset();
    });
  }

}
