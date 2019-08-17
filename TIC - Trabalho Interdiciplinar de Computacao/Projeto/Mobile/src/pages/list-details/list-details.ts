import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-list-details',
  templateUrl: 'list-details.html',
})
export class ListDetailsPage {

  info = { 
    nome: 'Prova de Angular',
    tema: 'Materia angular',
    dataInicio: '18/11/2018',
    dataFim: '18/11/2018',
    descricao: 'É uma prova considerada dificil, por favor estudem!'
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private localNotifications: LocalNotifications,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDetailsPage');
  }

  notification(){
    let data = new Date('2018-11-18 14:50');
    this.localNotifications.schedule({
      id: new Date().getTime(),
      title: 'Evento!',
      text: 'Você tem um novo evento em 1:00 hora.',
      vibrate: true,
      lockscreen: true,
      sound: 'file://assets/sounds/sound.mp3',
      trigger: { firstAt: data },
      color: '#025043',
      priority: 2,
      launch: true
    });
  }

}
