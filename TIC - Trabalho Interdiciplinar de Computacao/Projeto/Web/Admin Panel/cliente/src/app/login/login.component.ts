import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  moveMenu(){
    window.localStorage.logado = true;
    this.route.navigate(['/evento-cadastrar'])
  }

}
