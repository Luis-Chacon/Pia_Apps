import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Comentario } from '../model/Comentarios.models';
import { ComentariosService } from '../Services/comentarios.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private data: ComentariosService, 
    private router: Router
  ) {}

  getComentarios():Comentario[]
  {
    //console.log("getComenatrios Tab3");
    return this.data.getCome();

  }

  addComentFromFrom()
  {
    this.router.navigateByUrl("/Agregar_com");
  }


}
