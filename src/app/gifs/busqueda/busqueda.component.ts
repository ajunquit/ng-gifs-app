import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) {
    console.log("busqueda component inicializado...");
  }

  ngOnInit(): void {
  }

  buscar(): void {
    const palabra = this.txtBuscar.nativeElement.value;

    if (palabra.trim().length === 0) {
      return;
    }
    this._gifsService.agregarPalabra(palabra);
    console.log(this._gifsService.historial);
    this.txtBuscar.nativeElement.value = '';
  }

}
