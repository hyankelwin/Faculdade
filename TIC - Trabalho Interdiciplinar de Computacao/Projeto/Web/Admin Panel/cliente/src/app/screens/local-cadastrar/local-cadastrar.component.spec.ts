import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCadastrarComponent } from './local-cadastrar.component';

describe('LocalCadastrarComponent', () => {
  let component: LocalCadastrarComponent;
  let fixture: ComponentFixture<LocalCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
