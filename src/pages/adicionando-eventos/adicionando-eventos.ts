import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the AdicionandoEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionando-eventos',
  templateUrl: 'adicionando-eventos.html',
})
export class AdicionandoEventosPage {

  descricao: string;
  data: string;
  hora: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
  }

  eventoAdicionado() {
    this.navCtrl.setRoot(DashboardPage, {desc: this.descricao, data_evento: this.data, hora_evento: this.hora});
    const toast = this.toastCtrl.create({
      message: "Evento adicionado!!",
      duration: 3000
    });
    toast.present();
  }

}
