import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasknormalPage } from './tasknormal';

@NgModule({
  declarations: [
    TasknormalPage,
  ],
  imports: [
    IonicPageModule.forChild(TasknormalPage),
  ],
})
export class TasknormalPageModule {}
