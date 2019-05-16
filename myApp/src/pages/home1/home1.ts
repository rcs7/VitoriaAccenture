// arq de código que faz a  config do componente. Configura todas as dependências dele.
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html'
})
export class HomePage1 {
  
  //criei pra receber o nome digitado
  public nome:string;
  //criei pra receber a descricao digitado
  public descricao:string;
 
                                         //, public navParams:NavParams
  constructor(public navCtrl: NavController) {

  }

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  // public goToPageHome(){
  //     this.navCtrl.push('HomePage');
  // }



}



