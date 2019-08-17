import { MAIN_ROUTES } from "./screens/main.routes";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LOGIN_ROUTES } from "./login/login.routes";

const routes: Routes = [
    ...MAIN_ROUTES,
    ...LOGIN_ROUTES
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}