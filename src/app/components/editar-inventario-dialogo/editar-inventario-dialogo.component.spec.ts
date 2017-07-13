import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInventarioDialogoComponent } from './editar-inventario-dialogo.component';

describe('EditarInventarioDialogoComponent', () => {
  let component: EditarInventarioDialogoComponent;
  let fixture: ComponentFixture<EditarInventarioDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInventarioDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInventarioDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
