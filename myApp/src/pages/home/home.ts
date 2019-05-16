import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Task } from '../../models/task.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public tasks: Task[] = [];
  public ajuda: string = 'qlq';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController
  ) { }

  /*Funciona quando a página é carregada. Este evento só acontece uma vez por página sendo criada. 
  Se uma página sair mas estiver armazenada em cache, esse evento não será disparado novamente em uma 
  exibição subsequente. O ionViewDidLoad evento é um bom lugar para colocar seu código de configuração 
  para a página.*/
  ionViewDidLoad(): void {

    //parte que espera o valor pra ser salvo no array tasks
    //parâmetros recebidos 
    this.storage.forEach((value: any, key: string) => {
      this.tasks.push(value);
      // this.saveTask(newTask);
      //  console.log('Did  LOAD!');
    })

      .catch(this.handleError);

  }

  // Lifecycles são métodos que estão presentes em toda página Ionic para rastrear eventos de inicialização 
  //de páginas. 
  // Mais sobre: https://blog.ionicframework.com/navigating-lifecycle-events/
  //É executado quando a página entrou totalmente e agora é a página ativa. 
  //Esse evento será acionado, seja a primeira carga ou uma página em cache.
  ionViewDidEnter(): void {

    // NavParams possui um método específico para recuperar parâmetros de navegação 
    //através de um nome de variável    
    console.log(this.navCtrl.getByIndex(0).data);
    const { description, index } = this.navCtrl.getByIndex(0).data;
    console.log('description ' + description);
    console.log('ajuda ' + this.ajuda);
   
    //inicialmente ajuda='qlq' e dps ele é igual ao description anterior, logo
    //o item não é salvo mais de uma vez, que era o problema que estava acontecendo qd eu trocava 
    //de abas e voltava pra aba Link. 
    if (this.ajuda != description) {
      // console.log(this.ajuda);
      this.ajuda = description;

      //Se eu adicionar uma descricao nova! Se eu editar e 
      //add a msm não entra aq!
      if (description && index === undefined) {
        // console.log(description+" "+index);
        //console.log("ENTREI");
        const newTask: Task = {
          description: description,
          done: false,
          id: Math.random().toString().split('.')[1]
        };

        this.tasks.push(newTask);

        this.saveTask(newTask);
      }//é o caso de eu editar e mudar e add! Mas se eu 
      //editar  
      else if (index !== undefined) {
        // console.log("amorrr ");
        this.tasks[index].description = description;
        this.saveTask(this.tasks[index]);
      }
    }
    //Resolve a duplicaçao que eu tinha
    this.ajuda = description;
  }

  private deleteTask(index: number): void {
    this.storage.remove(this.tasks[index].id)
      .then(() => {
        this.tasks.splice(index, 1);
        //Slice é apartir do elemento com (índiceTal, tire a qtd passada)
        //tasks[index] e o tiro!
        console.log(this.tasks.splice(index, 1));
        this.presentToast('Deleted item!');
      })
      .catch(this.handleError);
  }

  editTask(description: string, index: number): void {
    //vá pra TaskPage e leve consigo as variáveis description e index
    this.navCtrl.push('TaskPage', { description: description, index: index });
  }

  markAsDone(task: Task): void {
    task.done = !task.done;
    if(task.done==true){
      this.presentToast("marked item");
    }else{
      this.presentToast("unchecked item");
    }
 
  }

  saveTask(task: Task): void {
    //nesse caso o set recebe como parâmetro o id da task e uma task
    this.storage.set(task.id, task)
      .then(() => {
        this.presentToast('Item salvo!');
      })
      .catch(this.handleError);
  }
  
  //toastCtrl tem um método chamado create que recebe como parâmetro
  //uma message que é uma string e uma duration que é um tempo definido em 
  //milisegundos
  presentToast(message: string): void {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    toast.present();
  }

  handleError(error: any): void {
    this.presentToast('An error has occurred! Please try again later.');
    console.error(error);
  }
}
