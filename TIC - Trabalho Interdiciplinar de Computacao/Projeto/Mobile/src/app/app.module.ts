import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { NgCalendarModule  } from 'ionic2-calendar';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ListaEventosPage } from '../pages/lista-eventos/lista-eventos';
import { ListaProvasPage } from '../pages/lista-provas/lista-provas';
import { ListDetailsPage } from '../pages/list-details/list-details';
import { MinhaContaPage } from '../pages/minha-conta/minha-conta';
import { TabPage } from '../pages/tab/tab';

@NgModule({
  declarations: [
    MyApp,
    TabPage,
    HomePage,
    ListPage,
    LoginPage,
    ListaEventosPage,
    ListaProvasPage,
    ListDetailsPage,
    MinhaContaPage,
  ],
  imports: [
    NgCalendarModule,
    FormsModule, 
    BrowserModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabPage,
    HomePage,
    ListPage,
    LoginPage,
    ListaEventosPage,
    ListaProvasPage,
    ListDetailsPage,
    MinhaContaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
