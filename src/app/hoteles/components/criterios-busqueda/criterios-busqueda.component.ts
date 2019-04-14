import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BusquedaFormulario } from '../../models/hoteles.model';

@Component({
  selector: 'app-criterios-busqueda',
  templateUrl: './criterios-busqueda.component.html',
  styleUrls: ['./criterios-busqueda.component.sass']
})
export class CriteriosBusquedaComponent implements OnInit, AfterViewInit {

  @Output() readonly busqueda = new EventEmitter<BusquedaFormulario>();

  form: FormGroup;
  completado$ = new Subject();

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.crearFormulario();
  }

  ngAfterViewInit() {
  this.cambiosFormulario();
  }

  private crearFormulario() {
    this.form = this.fb.group({
      ciudad: [ ],
      categoria: [ ],
      precioDe: [ ],
      precioHasta: [ ]
    });
  }

  cambiosFormulario(): void {
    this.form.valueChanges.subscribe(cambio => {
      this.busqueda.emit(this.form.getRawValue());
    });
  }

  limpiarFormulario(): void {
    this.form.reset();
  }

}
