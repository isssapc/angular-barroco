import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarContraseñaDialogoComponent } from './cambiar-contraseña-dialogo.component';

describe('CambiarContraseñaDialogoComponent', () => {
  let component: CambiarContraseñaDialogoComponent;
  let fixture: ComponentFixture<CambiarContraseñaDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarContraseñaDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarContraseñaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
