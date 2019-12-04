import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    QuillModule.forRoot(),
  ],
  exports: [
    HttpClientModule,
    QuillModule,
  ]
})
export class SharedModule { }
