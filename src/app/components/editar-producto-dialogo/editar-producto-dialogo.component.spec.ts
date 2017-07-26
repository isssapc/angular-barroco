import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductoDialogoComponent } from './editar-producto-dialogo.component';

describe('EditarProductoDialogoComponent', () => {
  let component: EditarProductoDialogoComponent;
  let fixture: ComponentFixture<EditarProductoDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarProductoDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProductoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
