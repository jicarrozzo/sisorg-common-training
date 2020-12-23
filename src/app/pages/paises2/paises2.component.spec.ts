import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paises2Component } from './paises2.component';

describe('Paises2Component', () => {
  let component: Paises2Component;
  let fixture: ComponentFixture<Paises2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paises2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paises2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
