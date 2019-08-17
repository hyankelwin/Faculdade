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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-evento-cadastra',
  templateUrl: './evento-cadastrar.component.html',
  styleUrls: ['./evento-cadastrar.component.css']
})

export class EventoCadastrarComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'nome_tipo', 'nome_local', 'data_inicio', 'data_fim', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;
  eventos;
  events = [];
  constructor(
    private http: HttpClient,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.http.get('http://localhost:3000/eventoSelecionar').subscribe(dados => {
      console.log(dados)
      this.eventos = dados['content'];
      this.events = [];
      for(var i = 0; i < this.eventos.length; i++){
        this.events.push({
          cod_evento: this.eventos[i].cod_evento,
          cod_docente_cadastro: this.eventos[i].cod_docente_cadastro,
          cod_tipo_evento: this.eventos[i].codigo_tipo,
          cod_local: this.eventos[i].codigo_local,
          nome_docente: this.eventos[i].nome_docente,
          nome_tipo: this.eventos[i].nome_tipo,
          nome_local: this.eventos[i].nome_local,
          nome: this.eventos[i].nome,
          tema: this.eventos[i].tema,
          data_inicio: this.eventos[i].data_inicio,
          data_fim: this.eventos[i].data_fim,
          ativo: this.eventos[i].ativo,
          descricao: this.eventos[i].descricao,
          // evento: this.eventos[i].evento,
          // local: this.eventos[i].local,
          // tipo: this.eventos[i].tipo,
          // data: this.eventos[i].data,
          // hora: this.eventos[i].horario,
          edit: '',
          delete: ''
        })
      }
      this.dataSource = this.events;
    })
    // this.dataSource.sort = this.sort;
  }

  // ngOnInit() {
  //   this.http.get('http://localhost:3000/eventos').subscribe(dados => {
  //     console.log(dados)
  //     this.eventos = dados;
  //     console.log(this.eventos)
  //   })
  // }

  criarEvento(){
    this.route.navigate(['/eventos'])
  }

  editItem(item){
    console.log(item)
    this.route.navigate(['/eventos', item])
  }

  deleteItem(id){
    this.http.delete('http://localhost:3000/eventoDeletar/' + id)
    .subscribe((res) => {
      this.ngOnInit();
      console.log(res)
    }, (err) => {
      console.log(err);
    })
  }

}
