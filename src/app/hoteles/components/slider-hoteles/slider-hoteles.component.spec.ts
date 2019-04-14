import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHotelesComponent } from './slider-hoteles.component';

describe('SliderHotelesComponent', () => {
  let component: SliderHotelesComponent;
  let fixture: ComponentFixture<SliderHotelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderHotelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
