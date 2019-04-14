import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelesRoutingModule } from './hoteles-routing.module';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { CriteriosBusquedaComponent } from './components/criterios-busqueda/criterios-busqueda.component';
import { SliderHotelesComponent } from './components/slider-hoteles/slider-hoteles.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HotelesComponent, CriteriosBusquedaComponent, SliderHotelesComponent, FooterComponent],
  imports: [
    CommonModule,
    HotelesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class HotelesModule { }
