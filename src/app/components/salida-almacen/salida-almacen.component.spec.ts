import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaAlmacenComponent } from './salida-almacen.component';

describe('SalidaAlmacenComponent', () => {
  let component: SalidaAlmacenComponent;
  let fixture: ComponentFixture<SalidaAlmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaAlmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
