import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotifyEnum } from '../../enums/notify.enum';
import { INotify } from '../../interfaces/i-notify.interface';
import { NotifyService } from '../../services/notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit, OnDestroy {

  @Input() delay = 5000;

  notifySub: Subscription;
  notification: INotify;
  NotifyEnum = NotifyEnum;

  constructor(private notify: NotifyService) { }

  ngOnInit() {
    this.notifySub = this.notify.notify$.subscribe((notify: INotify) => {
      this.notification = notify;

      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.notification = null;
      }, this.delay);
    });
  }

  ngOnDestroy() {
    if (this.notifySub) {
      this.notifySub.unsubscribe();
    }
  }

}
