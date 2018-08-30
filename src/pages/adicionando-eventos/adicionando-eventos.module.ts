import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionandoEventosPage } from './adicionando-eventos';

@NgModule({
  declarations: [
    AdicionandoEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionandoEventosPage),
  ],
})
export class AdicionandoEventosPageModule {}
