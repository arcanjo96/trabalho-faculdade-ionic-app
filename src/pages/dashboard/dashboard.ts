import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AdicionandoEventosPage } from '../adicionando-eventos/adicionando-eventos';
import { Evento } from '../../app/model/Evento';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

    private descricao;
    private data;
    private hora;

    eventos: Evento[] = [
      //new Evento(this.descricao = this.navParams.get("desc"), this.data = this.navParams.get("data_evento"), this.hora = this.navParams.get("hora_evento"))

    ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {   

  }

 
  ionViewDidEnter() {
    this.eventos.push(new Evento(this.descricao = this.navParams.get("desc"), this.data = this.navParams.get("data_evento"), this.hora = this.navParams.get("hora_evento")));

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    //this.eventos.push(new Evento(this.descricao = this.navParams.get("desc"), this.data = this.navParams.get("data_evento"), this.hora = this.navParams.get("hora_evento")));
    //this.eventos.push({desc: this.descricao = this.navParams.get("desc"), data: this.data = this.navParams.get("data_evento"), hora: this.hora = this.navParams.get("hora_evento")});
    //console.log("PAGE");
  }

  callAdd() {
    this.navCtrl.push(AdicionandoEventosPage);
  }

}
