import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { HeaderComponent } from "./header/header.component";
import { EventosComponent } from "./eventos/eventos.component";
import { EventoCadastrarComponent } from "./evento-cadastrar/evento-cadastrar.component";
import { PalestranteCadastrarComponent } from "./palestrante-cadastrar/palestrante-cadastrar.component";
import { PalestrantesComponent } from "./palestrantes/palestrantes.component";
import { LocalComponent } from "./local/local.component";
import { LocalCadastrarComponent } from "./local-cadastrar/local-cadastrar.component";
import { MainComponent } from "./main.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
  } from '@angular/material';

@NgModule({
    declarations: [
      HeaderComponent,
      EventosComponent,
      EventoCadastrarComponent,
      PalestranteCadastrarComponent,
      PalestrantesComponent,
      LocalComponent,
      LocalCadastrarComponent,
      MainComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
      RouterModule,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class MainModule { }
  