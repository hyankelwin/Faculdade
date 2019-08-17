import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { ListDetailsPage } from '../list-details/list-details';


@Component({
  selector: 'page-lista-eventos',
  templateUrl: 'lista-eventos.html',
})
export class ListaEventosPage {

  private url: string = 'http://52.90.224.139:2000';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    public http: Http,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEventosPage');
    console.log(this.storage.get('user'))
    
  }

  // ionViewDidEnter() {
  //   var headers = new Headers();
  //   // headers.append('Access-Control-Allow-Origin' , '*');
  //   // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  //   // headers.append('Accept','application/json');
  //   headers.append('content-type','application/json');
  //   let options = new RequestOptions({ headers:headers,withCredentials: false});

  //   this.http.get('http://dev2.unifacef.com.br:8000/api/matriculadoGrad/' + 20478, options)
  //     .subscribe(data => {
  //       console.log(data)
  //       let body: string = JSON.parse(data['_body']);
  //       // this.relatorios = body['content']
  //       console.log(body)
  //     })
  // }


  logout(){
    this.storage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

  list_details(){
    this.navCtrl.push(ListDetailsPage);
  }

}
