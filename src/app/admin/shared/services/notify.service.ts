import { Injectable } from '@angular/core';
import { NotifyEnum } from '../enums/notify.enum';
import { INotify } from '../interfaces/i-notify.interface';
import { Subject } from 'rxjs';

@Injectable()

export class NotifyService {

  notify$: Subject<INotify> = new Subject();

  constructor() {}

  show(type: NotifyEnum, message: string) {
    this.notify$.next({type, message});
  }

}