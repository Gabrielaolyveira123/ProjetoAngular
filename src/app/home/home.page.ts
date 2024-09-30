import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  // Variáveis para armazenar os números inseridos pelo usuário
  numero1: number | undefined;
  numero2: number | undefined;
  // Variável para armazenar o resultado das operações
  resultado: number | null = null;

  constructor(private alertController: AlertController) {}

  // Função para mostrar alertas
  async mostrarAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: mensagem,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Função para somar os números
  somar() {
    if (this.numero1 != null && this.numero2 != null) {
      this.resultado = this.numero1 + this.numero2;
    } else {
      this.mostrarAlerta('Por favor, preencha os dois números para realizar a operação.');
    }
  }

  // Função para subtrair os números
  subtrair() {
    if (this.numero1 != null && this.numero2 != null) {
      this.resultado = this.numero1 - this.numero2;
    } else {
      this.mostrarAlerta('Por favor, preencha os dois números para realizar a operação.');
    }
  }

  // Função para multiplicar os números
  multiplicar() {
    if (this.numero1 != null && this.numero2 != null) {
      this.resultado = this.numero1 * this.numero2;
    } else {
      this.mostrarAlerta('Por favor, preencha os dois números para realizar a operação.');
    }
  }

  // Função para dividir os números
  dividir() {
    if (this.numero1 != null && this.numero2 != null) {
      if (this.numero2 !== 0) {
        this.resultado = this.numero1 / this.numero2;
      } else {
        this.mostrarAlerta('Divisão por zero não é permitida.');
      }
    } else {
      this.mostrarAlerta('Por favor, preencha os dois números para realizar a operação.');
    }
  }
}
