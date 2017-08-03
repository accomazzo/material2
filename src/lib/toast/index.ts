/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {OverlayModule, PortalModule, MdCommonModule, LIVE_ANNOUNCER_PROVIDER} from '../core';
import {CommonModule} from '@angular/common';
import {MdToast} from './toast';
import {MdToastContainer} from './toast-container';
import {SimpleSnackBar} from '../snack-bar/simple-snack-bar';


@NgModule({
  imports: [
    OverlayModule,
    PortalModule,
    CommonModule,
    MdCommonModule,
  ],
  exports: [MdToastContainer, MdCommonModule],
  declarations: [MdToastContainer, SimpleSnackBar],
  entryComponents: [MdToastContainer, SimpleSnackBar],
  providers: [MdToast, LIVE_ANNOUNCER_PROVIDER]
})
export class MdToastModule {}


export * from './toast';
  export * from './toast-container';
/* export * from '../snack-bar/snack-bar-config';
export * from '../snack-bar/snack-bar-ref';
export * from '../snack-bar/simple-snack-bar';   */
