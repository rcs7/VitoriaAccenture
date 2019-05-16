import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarMetasPage } from './criar-metas';

@NgModule({
  declarations: [
    CriarMetasPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarMetasPage),
  ],
})
export class CriarMetasPageModule {}
