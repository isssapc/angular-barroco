import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdenCompraComponent } from './editar-orden-compra.component';

describe('EditarOrdenCompraComponent', () => {
  let component: EditarOrdenCompraComponent;
  let fixture: ComponentFixture<EditarOrdenCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarOrdenCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOrdenCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
