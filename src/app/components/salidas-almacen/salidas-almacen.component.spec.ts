import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasAlmacenComponent } from './salidas-almacen.component';

describe('SalidasAlmacenComponent', () => {
  let component: SalidasAlmacenComponent;
  let fixture: ComponentFixture<SalidasAlmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidasAlmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidasAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
