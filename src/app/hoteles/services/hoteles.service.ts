import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hoteles, BusquedaFormulario } from '../models/hoteles.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  consultarHoteles = `http://localhost:3000/api/listarHoteles`;
  consultarHotelesCiudades = `http://localhost:3000/api//filtrarHotelesCiudad/:ciudad`;
  consultarHotelesCategorias = `http://localhost:3000/api/filtrarHotelesCategoria/:categoria`;
  consultarHotelesCategoriaCiudades = `http://localhost:3000/api/filtrarHotelesCiudadCategoria/:categoria/:ciudad`;
  consultarHotelesCiudadesPrecios =
   `http://localhost:3000/api//filtrarHotelesCiudadCiudadPrecios/:ciudad/:precioDe/:precioHasta`;
   consultarHotelesCategoriasPrecios =
   `http://localhost:3000/api/filtrarHotelesCategoriaPrecios/:categoria/:precioDe/:precioHasta`;
   consultarHotelesCategoriaCiudadPrecios =
   `http://localhost:3000/api/filtrarHotelesCategoriaCiudadPrecios/:ciudad/:categoria/:precioDe/:precioHasta`;
   consultarHotelesPrecios = `http://localhost:3000/api/filtrarHotelesPrecios/:precioDe/:precioHasta`;

  constructor( private readonly http: HttpClient ) { }

  consultarInfoHoteles(): Observable<Array<Hoteles>> {
    return this.http.get<Array<Hoteles>>(this.consultarHoteles);
  }

  consultarHotelesCiudad(ciudad: string): Observable<Array<Hoteles>> {
    return this.http.get<Array<Hoteles>>(this.consultarHotelesCiudades.replace(':ciudad', ciudad));
  }

  consultarHotelesCategoria(categoria: string): Observable<Array<Hoteles>> {
    return this.http.get<Array<Hoteles>>(this.consultarHotelesCategorias.replace(':categoria', categoria));
  }

  consultarHotelesCategoriaCiudad(hoteles: BusquedaFormulario): Observable<Array<Hoteles>> {
    return this.http.get<Array<Hoteles>>(this.consultarHotelesCategoriaCiudades.replace(':ciudad', hoteles.ciudad)
    .replace(':categoria', hoteles.categoria));
  }

  consultarHotelesCiudadPrecios(hoteles: BusquedaFormulario): Observable<Array<Hoteles>> {
    return this.http.get<Array<Hoteles>>(this.consultarHotelesCiudadesPrecios.replace(':ciudad', hoteles.ciudad)
    .replace(':precioDe', hoteles.precioDe).replace(':precioHasta', hoteles.precioHasta));
  }

  consultarHotelesCategoriaPrecios(hoteles: BusquedaFormulario): Observable<Array<Hoteles>> {
    return this.http.get<Array<Hoteles>>(this.consultarHotelesCategoriasPrecios.replace(':categoria', hoteles.categoria)
    .replace(':precioDe', hoteles.precioDe).replace(':precioHasta', hoteles.precioHasta));
  }

  consultarHotelesCategoriaCiudadesPrecios(hoteles: BusquedaFormulario): Observable<Array<Hoteles>> {
    return this.http.get<Array<Hoteles>>(this.consultarHotelesCategoriaCiudadPrecios
    .replace(':categoria', hoteles.categoria)
    .replace(':ciudad', hoteles.ciudad)
    .replace(':precioDe', hoteles.precioDe)
    .replace(':precioHasta', hoteles.precioHasta));
  }

  consultarHotelesprecio(hoteles: BusquedaFormulario): Observable<Array<Hoteles>> {
    return this.http.get<Array<Hoteles>>(this.consultarHotelesPrecios
    .replace(':precioDe', hoteles.precioDe)
    .replace(':precioHasta', hoteles.precioHasta));
  }

}
