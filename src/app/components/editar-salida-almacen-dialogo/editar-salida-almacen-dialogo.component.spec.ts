import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSalidaAlmacenDialogoComponent } from './editar-salida-almacen-dialogo.component';

describe('EditarSalidaAlmacenDialogoComponent', () => {
  let component: EditarSalidaAlmacenDialogoComponent;
  let fixture: ComponentFixture<EditarSalidaAlmacenDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSalidaAlmacenDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSalidaAlmacenDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
