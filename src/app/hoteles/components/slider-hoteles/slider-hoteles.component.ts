import { Component, OnInit, Input } from '@angular/core';
import { Hoteles } from '../../models/hoteles.model';

@Component({
  selector: 'app-slider-hoteles',
  templateUrl: './slider-hoteles.component.html',
  styleUrls: ['./slider-hoteles.component.sass']
})
export class SliderHotelesComponent implements OnInit {

   @Input() hoteles: Array<Hoteles>;

  constructor() { }

  ngOnInit() {
  }

}
