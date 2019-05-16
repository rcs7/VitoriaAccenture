import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { About1Page } from '../pages/about1/about1';
import { HomePage1 } from '../pages/home1/home1';


import { SplashScreen } from '@ionic-native/splash-screen';
//gerado automaticamente ao colocar FeedPageModule lá no import, lá em baixo
import { FeedPageModule } from '../pages/feed/feed.module';
//gerado automaticamente ao colocar IntroductionPageModule lá no import, lá em baixo
import { IntroductionPageModule } from '../pages/introduction/introduction.module';
import { About1PageModule } from '../pages/about1/about1.module';
import { CriarMetasPageModule } from '../pages/criar-metas/criar-metas.module';
import { Home1PageModule } from '../pages/home1/home1.module';
//import { HomePage1 } from '../pages/home1/home1';


import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { HomenormalPageModule } from '../pages/homenormal/homenormal.module';
// import { UrlPage } from '../pages/url/url';



@NgModule({
  declarations: [
    MyApp,
    //About1Page,
   // HomePage1,
    TabsPage,
    HomePage,
    // UrlPage,
    // FeedPageModule
  ],
  imports: [
    BrowserModule,
    // Difo que o módulo Root vai ser o meu MyApp
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(), 
    //Adicionei esta linha abaixo pra que minha pag que criei feed fosse add na minha aplicação, aí ele me
    //deu uma lâmpada amarela pra eu importar Feed... aí apareceu automaticamente essa linha que está lá em 
    //cima: import { FeedPageModule } from '../pages/feed/feed.module';
    FeedPageModule,
    //Adicionei esta linha abaixo pra que minha pag que criei introduction fosse add na minha aplicação, aí ele me
    //deu uma lâmpada amarela pra eu importar Feed... aí apareceu automaticamente essa linha que está lá em 
    //cima: import { IntroductionPageModule } from '../pages/introduction/introduction.module';
    IntroductionPageModule,
    About1PageModule,
    CriarMetasPageModule,
    Home1PageModule,  
    HomenormalPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage1,
    TabsPage,
    About1Page,
    HomePage,
    // UrlPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
