import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  valor: number;
  crescente: number;
  fatorial: number;

  constructor() {}

  fatorar() {
    let i = 1;
    this.fatorial = this.valor;
    while (i < this.valor) {
      this.fatorial = this.fatorial * i;
      i++;
    }
  }

  ionViewDidEnter() {}
}
