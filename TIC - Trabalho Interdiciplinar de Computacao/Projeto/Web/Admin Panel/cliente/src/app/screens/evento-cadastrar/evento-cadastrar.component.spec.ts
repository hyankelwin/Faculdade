import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoCadastrarComponent } from './evento-cadastrar.component';

describe('EventoCadastrarComponent', () => {
  let component: EventoCadastrarComponent;
  let fixture: ComponentFixture<EventoCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
