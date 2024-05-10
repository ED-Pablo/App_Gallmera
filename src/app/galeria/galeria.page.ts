import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FotosService } from '../fotos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage {

  constructor(public fotosService: FotosService, private navCtrl: NavController) {}

  verDetalle(foto: string) {
  }
}
