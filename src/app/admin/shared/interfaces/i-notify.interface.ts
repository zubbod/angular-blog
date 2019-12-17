import { NotifyEnum } from '../enums/notify.enum';

export interface INotify {
  type: NotifyEnum;
  message: string;
}
