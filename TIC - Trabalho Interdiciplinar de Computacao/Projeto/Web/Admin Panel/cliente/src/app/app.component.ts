import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';
  flag = false

  constructor(
    private route: Router,
    private router: ActivatedRoute
  ){
    
  }

  ngOnInit() {
    if(window.localStorage.logado == 'false') {
      console.log(window.localStorage.logado);
      this.route.navigate(['/login']);
    }
  }
}

