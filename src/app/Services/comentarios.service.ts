import { Injectable } from '@angular/core';
import { Comentario } from 'src/app/model/Comentarios.models';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  public comentarios : Comentario[]=[
    {
      userName: 'Enrique Doriloko',
      resena: 'Me parece muy buena pelicula',
      titulo: 'Spider-man',
      },
    {
      userName: 'Luis Chacon',
      resena: 'Me parece muy buena pelicula',
      titulo: 'Shrek',
    },
  ];
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
        resena: comentario.resena
      });
  }

  public addComen()
  {
    
  }

}
