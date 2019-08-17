import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestranteCadastrarComponent } from './palestrante-cadastrar.component';

describe('PalestranteCadastrarComponent', () => {
  let component: PalestranteCadastrarComponent;
  let fixture: ComponentFixture<PalestranteCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalestranteCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalestranteCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
