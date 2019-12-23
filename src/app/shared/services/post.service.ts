import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { IFbPostResponse } from '../interfaces/i-fb-post-response';
import { IPost } from '../../interfaces/i-post.interface';

@Injectable({providedIn: 'root'})

export class PostService {

  constructor(
    private http: HttpClient,
  ) { }

  createPost(post: Post): Observable<any> {
    return this.http.post<IFbPostResponse>(`${environment.apiUrl}posts.json`, post).pipe(
      map((response: IFbPostResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        } as Post;
      })
    );
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<{[key: string]: Post}>(`${environment.apiUrl}posts.json`).pipe(
      map((response) => {
        return Object.keys(response).map((key: string) => {
          return {
            ...response[key],
            id: key,
          };
        });
      })
    );
  }

  getById(id: string): Observable<Post> {
    return this.http.get(`${environment.apiUrl}posts/${id}.json`).pipe(
      map((post: Post) => {
        return {
          ...post,
          id,
          date: new Date(post.date)
        } as Post;
      })
    );
  }

  removePost(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}posts/${id}.json`);
  }

  update(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${environment.apiUrl}posts/${post.id}.json`, post);
  }

}
