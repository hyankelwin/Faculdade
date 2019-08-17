import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-local-cadastrar',
  templateUrl: './local-cadastrar.component.html',
  styleUrls: ['./local-cadastrar.component.css']
})
export class LocalCadastrarComponent implements OnInit {
  info = {
    nome: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: null,
    // cod_cidade: '',
    cityes: []
  }
  id;
  constructor(
    private http: HttpClient,
    private route: Router,
    private router: ActivatedRoute
  ) {
    if (this.router.params) {
      this.router.params.subscribe(params => {
        console.log(params)
        this.id = params.cod_local
        this.info.nome = params.nome,
        this.info.rua = params.rua,
        this.info.numero = params.numero,
        this.info.complemento = params.complemento,
        this.info.bairro = params.bairro,
        this.info.cidade = parseInt(params.cod_cidade)
      })
      setTimeout(() => {
      console.log(this.info);
      },5000)
    }
   }

  ngOnInit() {
    this.http.get('http://localhost:3000/cidade')
    .subscribe((res: any) => {
      console.log(res)
      this.info.cityes = res.content
    }, (err) => {
      console.log(err)
    })
  }

  criarLocal(item) {
    let item_update = {
      nome: item.nome,
      rua: item.rua,
      numero: item.numero,
      complemento: item.complemento,
      bairro: item.bairro,
      cod_cidade: item.cidade,
    }
    if (this.id) {
      this.http.put('http://localhost:3000/localAtualizar/' + this.id, item_update)
        .subscribe((res) => {
          console.log(res)
          this.route.navigate(['/local'])
        }, (err) => {
          console.log(err)
        })
    } else {
      console.log(item)
      let info_item = {
        nome: item.nome,
        rua: item.rua,
        numero: item.numero,
        cod_cidade: item.cidade,
        complemento: item.complemento,
        bairro: item.bairro,
      }
      console.log(info_item)
      this.http.post('http://localhost:3000/localCadastrar', info_item)
        .subscribe((res) => {
          console.log(res)
          this.route.navigate(['/local'])
        }, (err) => {
          console.log(err)
        })
    }
  }

  back(){
    this.route.navigate(['/local'])
  }

}
