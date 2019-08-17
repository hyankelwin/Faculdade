import { OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  info = {
    evento: '',
    local: '',
    data_inicio: '',
    data_fim: '',
    horario: '',
    descricao: '',
    data: '',
    tema: '',
    tipo: '',
    ativo: true,
    tipoEvento: null,
    cod_local: '',
    palestrante: '',
    horarioInicio: '',
    horarioTerminio: '',
    nome_palestrante: '',
    descricao_palestrante: '',
    cursoDirecionado: [],
    cursosSelecionados: []
  }
  palestrantes: any[] = [];
  tipoEventos: any[] = []
  locais: any[] = [];
  cursos: any[] = [];
  data_inicio;
  data_fim;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>
  curso: string[] = [];
  allFruits: string[] = ['Sistemas de informação', 'Engenharia de Software', 'Ciencia da Computação'];

  id;

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  constructor(
    private http: HttpClient,
    private route: Router,
    private router: ActivatedRoute
  ) {
    

    if (this.router.params) {
      this.router.params.subscribe(params => {
          console.log(params)
          this.id = params._id
          this.info.evento = params.evento,
          this.info.tipoEvento = params.cod_tipo_evento,
          // this.info.evento = params.cod_tipo_evento,
          this.info.local = params.cod_local,
          // this.info.local = params.local,
          this.info.data = params.data,
          this.info.horario = params.horario,
          this.info.descricao = params.descricao,
          this.info.tema = params.tema,
          this.info.tipo = params.tipo,
          // this.info.tipoEvento = params.tipoEvento,
          this.curso.push(params.cursoDirecionado)
          setTimeout(() => {
            console.log(this.info)
          },5000)
      })
    }
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/palestranteSelecionar')
    .subscribe((res) => {
      console.log(res)
      this.palestrantes = res['content']
      console.log(this.palestrantes)
    }, (err) => {
      console.log(err)
    })
    this.http.get('http://localhost:3000/localSelecionar')
    .subscribe((res) => {
      console.log(res)
      this.locais = res['content']
      console.log(this.locais)
    }, (err) => {
      console.log(err)
    })
    this.http.get('http://localhost:3000/tipoEventoSelecionar')
    .subscribe((res) => {
      console.log(res)
      this.tipoEventos = res['content']
      console.log(this.tipoEventos)
    }, (err) => {
      console.log(err)
    })
    this.http.get('http://localhost:3000/cursoSelecionar')
    .subscribe((res) => {
      console.log(res)
      this.cursos = res['content']
      this.allFruits = res['content']
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.cursos.slice()));
      console.log(this.cursos)
    }, (err) => {
      console.log(err)
    })

    for(let i = 0; i < this.curso.length; i++){
      if(this.curso[i] == undefined){
        console.log(i, 'é undefined')
        this.curso.splice(i, 1)
      }
    }
    
  }

  add(event: MatChipInputEvent): void {
    console.log('entrou')
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.curso.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    console.log(fruit)
    const index = this.curso.indexOf(fruit);
    const index_curso = this.info.cursosSelecionados.indexOf(fruit);

    this.info.cursosSelecionados.splice(index_curso, 1)
    console.log(this.info.cursosSelecionados)
    if (index >= 0) {
      this.curso.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log(event)
    this.curso.push(event.option.viewValue);
    this.info.cursosSelecionados.push({
      value: event.option.value,
      nome: event.option.viewValue
    })
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
    console.log(this.fruitInput)
    console.log(this.fruitCtrl)
    console.log(this.curso)
    console.log(this.info.cursosSelecionados)
  }

  private _filter(value: string): string[] {
    const filterValue = value;
    return;
  }

  criarEvento() {
    console.log('entrou')
    if (this.id) {
      let info_edit = {
        cod_docente_cadastro: 1,
        cod_tipo_evento: this.info.tipoEvento,
        cod_local: this.info.local,
        nome: this.info.evento,
        tema: this.info.tema,
        data_inicio: new Date(this.info.data_inicio).toLocaleDateString().split('/').reverse().join('-') + ' ' + this.info.horarioInicio,
        data_fim: new Date(this.info.data_fim).toLocaleDateString().split('/').reverse().join('-') + ' ' + this.info.horarioTerminio,
        ativo: true,
        descricao: this.info.descricao
      }
      // this.info.cursoDirecionado = this.curso
      this.http.put('http://localhost:3000/eventoAtualizar/' + this.id, info_edit)
        .subscribe((res) => {
          console.log(res)
          // this.route.navigate(['/evento-cadastrar'])
        }, (err) => {
          console.log(err)
        })
    } else {
      this.info.cursoDirecionado = this.curso
      console.log(this.info)
      console.log(this.info.cursoDirecionado)
      let info_create = {
        cod_docente_cadastro: 1,
        cod_tipo_evento: this.info.tipoEvento,
        cod_local: this.info.local,
        // cod_palestrante:
        nome: this.info.evento,
        tema: this.info.tema,
        data_inicio: new Date(this.info.data_inicio).toLocaleDateString().split('/').reverse().join('-') + ' ' + this.info.horarioInicio,
        data_fim: new Date(this.info.data_fim).toLocaleDateString().split('/').reverse().join('-') + ' ' + this.info.horarioTerminio,
        ativo: true,
        descricao: this.info.descricao
      }

      console.log(info_create)
      this.http.post('http://localhost:3000/eventoCadastrar', info_create)
        .subscribe((res) => {
          console.log(res)
          this.route.navigate(['/evento-cadastrar'])
        }, (err) => {
          console.log(err)
        })
    }
  }
  back(){
    this.route.navigate(['/evento-cadastrar'])
  }
}