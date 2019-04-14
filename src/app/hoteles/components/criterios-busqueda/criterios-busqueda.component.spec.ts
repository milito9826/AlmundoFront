import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriosBusquedaComponent } from './criterios-busqueda.component';

describe('CriteriosBusquedaComponent', () => {
  let component: CriteriosBusquedaComponent;
  let fixture: ComponentFixture<CriteriosBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriosBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriosBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
