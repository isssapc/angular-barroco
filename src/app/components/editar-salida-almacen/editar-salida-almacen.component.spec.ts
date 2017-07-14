import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSalidaAlmacenComponent } from './editar-salida-almacen.component';

describe('EditarSalidaAlmacenComponent', () => {
  let component: EditarSalidaAlmacenComponent;
  let fixture: ComponentFixture<EditarSalidaAlmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSalidaAlmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSalidaAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
