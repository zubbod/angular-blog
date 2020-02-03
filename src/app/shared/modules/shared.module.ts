import { NgModule } from '@angular/core';
// import { QuillModule } from 'ngx-quill';
import { PostService } from '../services/post.service';

@NgModule({
  declarations: [],
  imports: [
    // QuillModule.forRoot(),
  ],
  exports: [
    // QuillModule,
  ],
  providers: [
    PostService,
  ]
})
export class SharedModule { }
