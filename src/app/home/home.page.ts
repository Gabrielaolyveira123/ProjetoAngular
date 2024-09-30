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
  public peso: number | undefined;
  public altura: number | undefined;
  public valor_IMC: number | undefined;
  public situacao: string = "";
  constructor(private alertController: AlertController) { }

  async calcularIMC() {
    if (this.peso == null || this.altura == null) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Por favor, preencha os dois campos antes de calcular o IMC',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.valor_IMC = this.peso / (this.altura * this.altura);

    if (this.valor_IMC < 18.5) {
      this.situacao = 'Abaixo do peso';
    } else if (this.valor_IMC >= 18.5 && this.valor_IMC <= 24.9) {
      this.situacao = 'Peso normal';
    } else if (this.valor_IMC >= 25.0 && this.valor_IMC <= 29.9) {
      this.situacao = 'Sobrepeso';
    } else {
      this.situacao = 'obesidade';
    }
  }
}
