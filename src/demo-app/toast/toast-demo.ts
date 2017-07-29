import {Component, ViewEncapsulation} from '@angular/core';
import {MdToast, MdSnackBarConfig} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'toast-demo',
  styleUrls: ['toast-demo.css'],
  templateUrl: 'toast-demo.html',
  encapsulation: ViewEncapsulation.None,
})
export class ToastDemo {
  message: string = 'Toast opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = false;
  setAutoHide: boolean = true;
  autoHide: number = 10000;
  addExtraClass: boolean = false;

  constructor(public toast: any) { }

  open() {
    let config = new MdSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = this.addExtraClass ? ['party'] : undefined;
    this.toast.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
  }
}
