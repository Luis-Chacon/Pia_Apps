import { Injectable } from '@angular/core';
import { Comentario } from 'src/app/model/Comentarios.models';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  public comentarios : Comentario[];
  constructor() { }

  public getCome() : Comentario[]
  {
    return this.comentarios;
  }

  public addComenInput(comentario:any)
  {
    this.comentarios.unshift(
      {
        userName: comentario.userName,
        titulo: comentario.titulo,
        reseña: comentario.reseña
      });
  }

  public addComen()
  {
    
  }

}
