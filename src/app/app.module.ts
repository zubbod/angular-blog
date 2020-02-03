import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { PostComponent } from './shared/post/post.component';
import { ResponseInterceptor } from './shared/interceptors/response.interceptor';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
