import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/search-gifs-response';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKeyGifsDevelopers: string = 'guMXgBkyccjv364LHTxUxlqWreiLVC8k';
  private _apiUrlGifsDevelopers: string = 'https://api.giphy.com/v1/gifs';

  private _historial: string[] = [];

  // TODO: Cambiar any por su tipo.
  public resultados: Gif[] = [];

  constructor(private _httpClient: HttpClient) {
    console.log("gifs service initialized...");
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  get historial() {
    return [...this._historial];
  }

  agregarPalabra(palabra: string): void {
    palabra = palabra.trim().toLocaleLowerCase();
    if (!this._historial.includes(palabra)) {
      this._historial.unshift(palabra);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set("api_key", this._apiKeyGifsDevelopers)
      .set("q", palabra)
      .set("limit", "10");

    this._httpClient.get<SearchGifsResponse>(`${this._apiUrlGifsDevelopers}/search`, { params })
      .subscribe(response => {
        console.log(response);
        this.resultados = response.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })
  }
}
