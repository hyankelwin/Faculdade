import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-palestrante-cadastrar',
  templateUrl: './palestrante-cadastrar.component.html',
  styleUrls: ['./palestrante-cadastrar.component.css']
})
export class PalestranteCadastrarComponent implements OnInit {
  id;
  info = {
    nome: '',
    empresa: '',
    descricao_curriculo: '',
    foto: '',
    ativo: true
  }
  constructor(
    private http: HttpClient,
    private route: Router,
    private router: ActivatedRoute
  ) {
    if (this.router.params) {
      this.router.params.subscribe(params => {
        console.log(params)
        this.id = params.cod_palestrante
        this.info.nome = params.nome,
        this.info.empresa = params.empresa,
        this.info.descricao_curriculo = params.descricao_curriculo,
        this.info.foto = params.foto
      })
    }
   }

  ngOnInit() {
  }

  criarPalestrante() {
    if (this.id) {
      this.http.put('http://localhost:3000/palestranteAtualizar/' + this.id, this.info)
        .subscribe((res) => {
          console.log(res)
          this.route.navigate(['/palestrantes'])
        }, (err) => {
          console.log(err)
        })
    } else {
      console.log(this.info)
      this.http.post('http://localhost:3000/palestranteCadastrar', this.info)
        .subscribe((res) => {
          console.log(res)
          this.route.navigate(['/palestrantes'])
        }, (err) => {
          console.log(err)
        })
    }
  }

  back(){
    this.route.navigate(['/palestrantes'])
  }
}
