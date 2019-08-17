import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';  

import { ListaEventosPage } from '../lista-eventos/lista-eventos';
import { ListaProvasPage } from '../lista-provas/lista-provas';
import { MinhaContaPage } from '../minha-conta/minha-conta';



@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  tab1: any;
  tab2: any;
  tab3: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = ListaEventosPage;
    this.tab2 = ListaProvasPage;
    this.tab3 = MinhaContaPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
