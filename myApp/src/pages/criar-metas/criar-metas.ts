import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Importei a HomePage pra poder usar os dados que estão nas variáveis públicas: nome e descricao
//import { HomePage1 } from '../home1/home1';

/**
 * Generated class for the CriarMetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-metas',
  templateUrl: 'criar-metas.html',
})
export class CriarMetasPage {
  public nomeDaq:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarMetasPage');
  }
  
  // public imprimeNomeDescricao(){
  //   this.nomeDaq =  
  // }
}
