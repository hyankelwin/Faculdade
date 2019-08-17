import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import {ActivatedRoute} from "@angular/router";
import {MatSort, MatTableDataSource} from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})


export class LocalComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'rua', 'numero', 'complemento', 'bairro', 'edit', 'delete'];
  dataSource;
  locais;
  array = []
  constructor(
    private http: HttpClient,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    console.log('entrou NGONINIT')
    this.http.get('http://localhost:3000/localSelecionar').subscribe(dados => {
      console.log(dados)
      this.locais = dados['content'];
      this.array = [];
      console.log(this.locais)
      for(var i = 0; i < this.locais.length; i++){
        this.array.push({
          nome: this.locais[i].nome,
          rua: this.locais[i].rua,
          numero: this.locais[i].numero,
          complemento: this.locais[i].complemento,
          bairro: this.locais[i].bairro,
          cod_cidade: this.locais[i].cod_cidade,
          cod_local: this.locais[i].cod_local,
          edit: '',
          delete: ''
        })
      }
      this.dataSource = this.array;
      console.log(this.dataSource)
    }, (err) => {
      console.log(err);
    })
  }

  criarLocal(){
    this.route.navigate(['/local-cadastrar'])
  }

  editItem(item){
    console.log(item)
    this.route.navigate(['/local-cadastrar', item])
  }

  deleteItem(id){
    this.http.delete('http://localhost:3000/localDeletar/' + id)
    .subscribe((res) => {
      console.log(res)
      this.ngOnInit();
    }, (err) => {
    })
  }

}
