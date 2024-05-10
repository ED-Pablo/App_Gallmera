import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';
import { FotosService } from '../fotos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public fotosService: FotosService, private router: Router) {}

  ngOnInit(): void {
    Camera.requestPermissions();
  }

  imagenParaMostrar: string = "";
  imagenTomada: any;  

  async getPicture() {
    this.imagenTomada = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    if(this.imagenTomada && this.imagenTomada.webPath){
      this.imagenParaMostrar = this.imagenTomada.webPath;
      this.fotosService.agregarFoto(this.imagenParaMostrar);
    }
  }
}

