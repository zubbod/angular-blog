import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { IFbPostResponse } from '../interfaces/i-fb-post-response';

@Injectable({providedIn: 'root'})

export class PostService {

  constructor(
    private http: HttpClient,
  ) { }

  createPost(post: Post): Observable<any> {
    return this.http.post<IFbPostResponse>(`${environment.apiUrl}posts.json`, post).pipe(
      map((response: IFbPostResponse) => {
        return<Post> {
          ...post,
          id: response.name,
          date: new Date(post.date)
        }
      })
    );
  }
}