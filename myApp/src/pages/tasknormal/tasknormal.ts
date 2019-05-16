import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tasknormal',
  templateUrl: 'tasknormal.html',
})
export class TasknormalPage {

  public descriptio1n: string; 
  public inde1x: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { 
    this.descriptio1n = this.navParams.get('description');
    this.inde1x = this.navParams.get('index');
  }

  ionViewDidLoad() {
    this.navCtrl.getPrevious().data = {};
  }

  addTas1k(): void {
    // GetPrevious() é um método do NavController para pegar a página anterior
    const homePag1e = this.navCtrl.getPrevious();
    
    // Vamos injetar dentro do NavParams da página anterior a descrição da nova tarefa criando uma variável 'description' dentro de 'data'
    homePag1e.data.description = this.descriptio1n;
    homePag1e.data.index = this.inde1x;
    
    this.navCtrl.pop();
  }
}
