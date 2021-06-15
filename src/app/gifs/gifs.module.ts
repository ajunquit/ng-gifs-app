import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContenidoComponent } from './contenido/contenido.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    MainPageComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class GifsModule { }
