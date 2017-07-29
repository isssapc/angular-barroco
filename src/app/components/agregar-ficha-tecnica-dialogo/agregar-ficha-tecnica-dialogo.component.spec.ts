import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFichaTecnicaDialogoComponent } from './agregar-ficha-tecnica-dialogo.component';

describe('AgregarFichaTecnicaDialogoComponent', () => {
  let component: AgregarFichaTecnicaDialogoComponent;
  let fixture: ComponentFixture<AgregarFichaTecnicaDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarFichaTecnicaDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarFichaTecnicaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
