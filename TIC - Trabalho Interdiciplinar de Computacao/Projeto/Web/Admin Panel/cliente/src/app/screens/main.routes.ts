import { Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { HeaderComponent } from "./header/header.component";
import { EventosComponent } from "./eventos/eventos.component";
import { EventoCadastrarComponent } from "./evento-cadastrar/evento-cadastrar.component";
import { PalestranteCadastrarComponent } from "./palestrante-cadastrar/palestrante-cadastrar.component";
import { PalestrantesComponent } from "./palestrantes/palestrantes.component";
import { LocalComponent } from "./local/local.component";
import { LocalCadastrarComponent } from "./local-cadastrar/local-cadastrar.component";

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'header', component: HeaderComponent
            },
            {
                path: 'eventos', component: EventosComponent
            },
            {
                path: 'evento-cadastrar', component: EventoCadastrarComponent
            },
            {
                path: 'palestrante-cadastrar', component: PalestranteCadastrarComponent
            },
            {
                path: 'palestrantes', component: PalestrantesComponent
            },
            {
                path: 'local', component: LocalComponent
            },
            {
                path: 'local-cadastrar', component: LocalCadastrarComponent
            }
        ]
    }
]