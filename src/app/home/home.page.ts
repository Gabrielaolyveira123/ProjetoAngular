import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  public gasolina: number | undefined;
  public alcool: number | undefined;
  public razao: number | undefined;
  public resultado: string = "";

  constructor(private alertCtrl: AlertController) {}

  async comparar() {
    if (this.gasolina == null || this.alcool == null) {
      const alert = await this.alertCtrl.create({
        header: 'Atenção',
        message: 'Por favor, preencha os dois valores',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (this.gasolina <= 0 || this.alcool <= 0) {
      const alert = await this.alertCtrl.create({
        header: 'Inválido',
        message: 'Os valores devem ser maiores que zero',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (this.gasolina === this.alcool) {
      this.resultado = 'Ambos são vantajosos';
      return;
    }

   this.razao = this.alcool / this.gasolina;
    console.log('A razão é:', this.razao);

    if (this.razao <= 0.7) {
      this.resultado = 'Álcool é mais vantajoso';
    } else {
      this.resultado = 'Gasolina é mais vantajosa';
    }
    console.log('Resultado:', this.resultado);
  }
}
  
