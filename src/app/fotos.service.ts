import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  private fotos: string[] = [];

  constructor() { }

  agregarFoto(foto: string) {
    this.fotos.push(foto);
  }

  obtenerFotos(): string[] {
    return this.fotos;
  }

  obtenerUltimaFoto(): string {
    return this.fotos.length > 0 ? this.fotos[this.fotos.length - 1] : '';
  } 
}
