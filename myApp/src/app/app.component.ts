import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { TabsPage } from '../pages/tabs/tabs';
//Esse inport é necessário pra que o rootPage reconheça a page introduction como pág inicial
import { IntroductionPage } from '../pages/introduction/introduction';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //antes era:
  // rootPage:any = TabsPage;
  
  //A pág inicial do me app agr é a intoduction
  rootPage:any = IntroductionPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
