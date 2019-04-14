import { Component, OnInit } from '@angular/core';
import { HotelesService } from '../../services/hoteles.service';
import { Hoteles, BusquedaFormulario } from '../../models/hoteles.model';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.sass']
})
export class HotelesComponent implements OnInit {

  constructor(private readonly hotelesService: HotelesService) { }

  hoteles: Array<Hoteles>;

  ngOnInit(): void {
    this.cargarServicios();
  }

  cargarServicios(): void {
    this.hotelesService.consultarInfoHoteles().subscribe(hoteles => {
      this.hoteles = hoteles;
    });
  }

  buscarHoteles(busqueda: BusquedaFormulario): void {
    if (busqueda.ciudad !== '' && busqueda.categoria === null && busqueda.precioDe === null && busqueda.precioHasta === null) {
      this.filtroPorCiudad(busqueda);
    }
    if (busqueda.ciudad === null && busqueda.categoria !== null  && busqueda.precioDe === null && busqueda.precioHasta === null) {
      this.filtroPorCategoria(busqueda);
    }
    if (busqueda.ciudad !== null && busqueda.categoria !== null  && busqueda.precioDe === null && busqueda.precioHasta === null) {
      this.filtroPorCategoriaCiudad(busqueda);
    }
    if (busqueda.ciudad !== null && busqueda.categoria === null  && busqueda.precioDe !== null && busqueda.precioHasta !== null) {
      this.filtroCiudadPrecioMenorAPrecioMayor(busqueda);
    }
    if (busqueda.ciudad === null && busqueda.categoria !== null  && busqueda.precioDe !== null && busqueda.precioHasta !== null) {
      this.filtroCategoriaPrecioMenorAPrecioMayor(busqueda);
    }
    if (busqueda.ciudad !== null && busqueda.categoria !== null  && busqueda.precioDe !== null && busqueda.precioHasta !== null) {
      this.filtroCategoriaCiudadPrecioMenorAPrecioMayor(busqueda);
    }
    if (busqueda.ciudad === null && busqueda.categoria === null  && busqueda.precioDe !== null && busqueda.precioHasta !== null) {
      this.filtroPrecios(busqueda);
    }
    if (busqueda.ciudad === null && busqueda.categoria === null  && busqueda.precioDe == null && busqueda.precioHasta == null) {
      this.cargarServicios();
    }
  }

  filtroPorCiudad(busqueda: BusquedaFormulario): void {
    this.hotelesService.consultarHotelesCiudad(busqueda.ciudad).subscribe(hotelesCiudad => {
      this.hoteles = hotelesCiudad;
    });
  }

  filtroPorCategoria(busqueda: BusquedaFormulario): void {
    this.hotelesService.consultarHotelesCategoria(busqueda.categoria).subscribe(hotelesCategoria => {
      this.hoteles = hotelesCategoria;
    });
  }

  filtroPorCategoriaCiudad(busqueda: BusquedaFormulario): void {
    this.hotelesService.consultarHotelesCategoriaCiudad(busqueda).subscribe(hotelesCategoriaCiudad => {
      this.hoteles = hotelesCategoriaCiudad;
    });
  }

  filtroCiudadPrecioMenorAPrecioMayor(busqueda: BusquedaFormulario): void {
    this.hotelesService.consultarHotelesCiudadPrecios(busqueda).subscribe(hotelesCiudadPrecios => {
      this.hoteles = hotelesCiudadPrecios;
    });
  }

  filtroCategoriaPrecioMenorAPrecioMayor(busqueda: BusquedaFormulario): void {
    this.hotelesService.consultarHotelesCategoriaPrecios(busqueda).subscribe(hotelesCategoriaPrecios => {
      this.hoteles = hotelesCategoriaPrecios;
    });
  }

  filtroCategoriaCiudadPrecioMenorAPrecioMayor(busqueda: BusquedaFormulario): void {
    this.hotelesService.consultarHotelesCategoriaCiudadesPrecios(busqueda).subscribe(hotelesCategoriaCiudadPrecios => {
      this.hoteles = hotelesCategoriaCiudadPrecios;
    });
  }

  filtroPrecios(busqueda: BusquedaFormulario): void {
    this.hotelesService.consultarHotelesprecio(busqueda).subscribe(hotelesPrecio => {
      this.hoteles = hotelesPrecio;
    });
  }
}
