import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {



  constructor(private _gifsService: GifsService) { }

  ngOnInit(): void {
  }

  buscar(palabra: string) {

    console.log(palabra);
    this._gifsService.agregarPalabra(palabra);
  }

  get historial() {
    return [...this._gifsService.historial];
  }

}
