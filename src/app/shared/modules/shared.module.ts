import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { PostService } from '../services/post.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    QuillModule.forRoot(),
  ],
  exports: [
    HttpClientModule,
    QuillModule,
  ],
  providers: [
    PostService,
  ]
})
export class SharedModule { }
