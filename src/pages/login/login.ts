import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  msgErro: string = "";
  login: string;
  senha: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
  }

  signIn() {
    if(this.login == "lucas@teste.com" && this.senha == "123456") {
      this.navCtrl.setRoot(DashboardPage);
    } else {
      this.msgErro = "Email ou senha incorreta!";
  }
}

}
