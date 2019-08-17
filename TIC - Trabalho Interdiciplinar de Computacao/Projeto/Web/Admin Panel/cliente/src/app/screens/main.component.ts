import { Component } from '@angular/core';
import { Router, Route } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(public router: Router){}

  sair(){
    window.localStorage.logado = false;
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    console.log(window.localStorage.logado);

    if(window.localStorage.logado == 'false') {
    console.log(window.localStorage.logado);
      this.router.navigate(['/login']);
    }
  }
}

