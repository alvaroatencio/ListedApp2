import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCuentasComponent } from './card-cuentas.component';

describe('CardCuentasComponent', () => {
  let component: CardCuentasComponent;
  let fixture: ComponentFixture<CardCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
