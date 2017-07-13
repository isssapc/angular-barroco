import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdenPedidoDialogoComponent } from './editar-orden-pedido-dialogo.component';

describe('EditarOrdenPedidoDialogoComponent', () => {
  let component: EditarOrdenPedidoDialogoComponent;
  let fixture: ComponentFixture<EditarOrdenPedidoDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarOrdenPedidoDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOrdenPedidoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
