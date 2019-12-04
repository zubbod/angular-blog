import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup

  constructor() { }

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
    console.log(post);
    
  }

}