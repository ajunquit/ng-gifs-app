import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/search-gifs-response';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  get resultados(): Gif[] {
    return this._gifsService.resultados;
  }

  constructor(private _gifsService: GifsService) { }

  ngOnInit(): void {
  }

}
