import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../shared/services/post.service';
import { switchMap } from 'rxjs/operators';
import { Post } from '../../shared/models/post';
import { Subscription } from 'rxjs';
import { NotifyService } from '../shared/services/notify.service';
import { NotifyEnum } from '../shared/enums/notify.enum';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  post: Post;
  submitted = false;
  updateSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private notify: NotifyService,
  ) { }

  ngOnInit() {
    this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.postService.getById(params['id']);
      })
    )
    .subscribe((post: Post) => {
      this.post = post;
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        content: new FormControl(post.content, Validators.required),
      });
    });
  }

  ngOnDestroy() {
    if (this.updateSub) {
      this.updateSub.unsubscribe();
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;
    const post = {
      ...this.post,
      title: this.form.get('title').value,
      content: this.form.get('content').value,
    };

    this.updateSub = this.postService.update(post).subscribe( _ => {
      this.submitted = false;
      this.notify.show(NotifyEnum.Success, 'Отредактировано и сохранено успешно :)')
    });
  }
}