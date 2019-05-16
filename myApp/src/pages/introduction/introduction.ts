import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the IntroductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 

@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage {
  
  //variáveis que eu criei
  public impressaoIonic:number = 0; 
  public impressaoAngular:number = 0; 
  public impressaoWeb:number = 0; 

  public show:boolean=true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public printOkUm(){
    this.impressaoIonic = 1;
  }
  public printOkDois(){
    this.impressaoAngular = 1;
  }
  public printOkTres(){
    this.impressaoWeb = 1;
  }
  
  //Usada pra aparecer e desaparecer o texto de informações 
  //sobre o Ionic, Angular ou HTML, TS, SASS
  invert(){
    this.show = !this.show;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroductionPage');
  }

  //criei essa função pra que da pág de slides eu possa navegar para a pág de tabs
  public goToTabsPage(){
    this.navCtrl.push(TabsPage);
  }
}
