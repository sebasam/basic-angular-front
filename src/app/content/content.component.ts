import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  btn: string = 'Saber más';
  tanjiro: string = '';
  zenitsu: string = '';
  inosuke: string = '';
  sanemi: string = '';
  gyomei: string = '';
  tokito: string = '';

  tanjiroFn(){
    this.tanjiro = 'Usuario de la Respiración de Agua y La Danza del Dios del Fuego, su hermana es un demonio.'
  }
  zenitsuFn(){
    this.zenitsu = 'Usuario de la Respiración del Rayo, pelea con más fuerza cuando está dormido'
  }
  inosukeFn(){
    this.inosuke = 'Usuario de la Respiración de la Bestia, fue criado por jabalíes.'
  }
  sanemiFn(){
    this.sanemi = 'Pilar del viento, tiene más experiencia que sus demás compañeros.'
  }
  gyomeiFn(){
    this.gyomei = 'Pilar de la Roca, es el cazador de demonios más fuerte.'
  }
  tokitoFn(){
    this.tokito = 'Pilar de la Niebla, se convirtió en pilar entrenandop dos meses seguidos.'
  }
}
