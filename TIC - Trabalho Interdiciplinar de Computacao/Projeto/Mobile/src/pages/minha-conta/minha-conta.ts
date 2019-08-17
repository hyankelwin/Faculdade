import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-minha-conta',
  templateUrl: 'minha-conta.html',
})
export class MinhaContaPage {

  info = {
    nome: '',
    codigo: '',
    email: '',
    cidade: '',
    semestre: '',
    dt_conclusao: '',
    nome_curso: ''
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhaContaPage');
  }

  ionViewDidEnter(){
    this.storage.get('user').then((res) => {
      console.log(res)
      this.info.nome = res.sobrenome_aluno
      this.info.codigo = res.id_aluno
      this.info.email = res.email
      this.info.cidade = res.cidade_uf
      this.info.semestre = res.semestre
      this.info.dt_conclusao = res.dt_conclusao.split('-').reverse().join('/')
      this.info.nome_curso = res.nome_curso
    })
  }

}
