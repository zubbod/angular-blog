import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../../../shared/models/post';

@Pipe({
  name: 'searchPost'
})
export class SearchPostPipe implements PipeTransform {

  transform(posts: Post[], search = ''): Post[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter((post: Post) => post.title.toLowerCase().includes(search.toLowerCase()));
  }

}
