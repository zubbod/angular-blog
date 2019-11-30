import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  logout(e: Event): void {
    e.preventDefault();
    this._router.navigate(['/admin', 'login']);
  }

}
