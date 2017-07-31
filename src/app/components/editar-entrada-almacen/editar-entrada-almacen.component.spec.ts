import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEntradaAlmacenComponent } from './editar-entrada-almacen.component';

describe('EditarEntradaAlmacenComponent', () => {
  let component: EditarEntradaAlmacenComponent;
  let fixture: ComponentFixture<EditarEntradaAlmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEntradaAlmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEntradaAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
