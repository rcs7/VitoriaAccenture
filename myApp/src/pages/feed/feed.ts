import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  //Tenho o nome do meu componente , caso eu queira usar dentro de outra page, mas no ionic , pra o caso
  //de pág,não vou usar mt isso não.
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  //criei essa propriedade:
  public userName:string = "Renata Cristovam";

  //nova variável que criei pro json
  //obj json
  // public objectFeed = {  
  //   titulo:"Renata Cristovam",
  //   data:"May 11, 2019",
  //   description:"I'm studying a lot and I'll create an excellent app...",
  //   qtdHearts:200,
  //   qtdLikes:3000,
  //   qtdComments:7,
  //   timeComment:"8h ago"
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // Criei essa função!
  public sumNumbers():void{
    alert(5+2);
  }

  //Criei tb essa função!
  public sumNumbers2(num1:number,num2:number):void{
     alert(num1 + num2);
  }

  
  
  //Já tinha essa função, só add código dentro. Ou seja, eu a utilizei
  //Sempre executa essa função qd pág estiver sendo carregada
  ionViewDidLoad() {
   }

}
