import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ListaEventosPage } from '../lista-eventos/lista-eventos';
import { TabPage } from '../tab/tab';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public responseLogar;
  public formgroup: FormGroup;

  info =
    {
      usuario: '',
      senha: '',
    }
  public token: any;
  constructor(
    public navCtrl: NavController,
    public http: Http,
    private storage: Storage,
    public formbuilder: FormBuilder,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
  ) {
    this.formgroup = formbuilder.group({
      name_user: ['', Validators.required],
      idade_user: ['', [Validators.required, Validators.pattern('([0-9]{1,2})')]],
      peso_user: [],
      altura_user: [],
      diagnostico_user: [],
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
    // this.name_user = this.formgroup.controls['name_user'];
    // this.idade_user = this.formgroup.controls['idade_user'];
    // this.user = this.formgroup.controls['user'];
    // this.password = this.formgroup.controls['password'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter() {
    var headers = new Headers();
    headers.append('content-type','application/json');
    let options = new RequestOptions({ headers:headers,withCredentials: false});

    this.http.get('http://dev2.unifacef.com.br:8000/api/matriculadoGrad/' + 20478, options)
      .subscribe(data => {
        console.log(data)
        let body: string = JSON.parse(data['_body']);
        console.log(body)
        this.storage.set('user', body);
      })
  }

  entrar(info){
    var headers = new Headers();
    headers.append('content-type','application/json');
    let options = new RequestOptions({ headers:headers,withCredentials: false});
    this.http.get('http://dev2.unifacef.com.br:8000/api/matriculadoGrad/' + info.usuario, options)
      .subscribe(data => {
        let body: string = JSON.parse(data['_body']);
        let aluno = body[0]
        if(this.info.senha == aluno['cpf'].replace('.', '').substr(0, 6)){
            console.log('é igual')
            this.storage.clear();
            this.storage.set('user', aluno);
            this.navCtrl.setRoot(TabPage, {'user': aluno});
            
        }else{
          alert('Ops, dados invalidos')
        }
      }, (err) => {
        console.log(err) 
      })
  }

}