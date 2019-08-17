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
  selector: 'app-palestrantes',
  templateUrl: './palestrantes.component.html',
  styleUrls: ['./palestrantes.component.css']
})
export class PalestrantesComponent implements OnInit {
  displayedColumns: string[] = ['foto', 'nome', 'empresa', 'descricao_curriculo', 'edit', 'delete'];
  dataSource;
  palestrantes;
  array = []

  constructor(
    private http: HttpClient,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.http.get('http://localhost:3000/palestranteSelecionar').subscribe(dados => {
      console.log(dados)
      this.palestrantes = dados['content'];
      this.array = [];
      console.log(this.palestrantes)
      for(var i = 0; i < this.palestrantes.length; i++){
        this.array.push({
          foto: this.palestrantes[i].foto,
          nome: this.palestrantes[i].nome,
          empresa: this.palestrantes[i].empresa,
          descricao_curriculo: this.palestrantes[i].descricao_curriculo,
          ativo: this.palestrantes[i].ativo,
          cod_palestrante: this.palestrantes[i].cod_palestrante,
          edit: '',
          delete: ''
        })
      }
      this.dataSource = this.array;
    }, (err) => {
      console.log(err);
    })
  }

  criarPalestrante(){
    this.route.navigate(['/palestrante-cadastrar'])
  }

  editItem(item){
    this.route.navigate(['/palestrante-cadastrar', item])
  }

  deleteItem(id){
    this.http.delete('http://localhost:3000/palestranteDeletar/' + id)
    .subscribe((res) => {
      this.ngOnInit();
    }, (err) => {
    })
  }

}
