import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasAlmacenComponent } from './entradas-almacen.component';

describe('EntradasAlmacenComponent', () => {
  let component: EntradasAlmacenComponent;
  let fixture: ComponentFixture<EntradasAlmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradasAlmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
