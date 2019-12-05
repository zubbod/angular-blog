import { IPost } from '../interfaces/i-post';

export class Post implements IPost {
  id?: string;
  title: string;
  author: string;
  date: Date;
  content: string;

  constructor() {
    this.author = '';
    this.content = '';
    this.title = '';
    this.date = new Date();
    this.id = '';
  }
}
