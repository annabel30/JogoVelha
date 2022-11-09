import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jogoVelha';
  cont : number = 2;
  contX : number;
  contO : number;
  imagem1 : string;
  imagem2 : string;
  imagem3 : string;
  imagem4 : string;
  imagem5 : string;
  imagem6 : string;
  imagem7 : string;
  imagem8 : string;
  imagem9 : string;
  mensagem : string = "Jogando...";
  childe = "../assets/img/zhongli.png";
  zhongli = "../assets/img/childe.png";
  jogar1() {
    if (this.imagem1 === this.zhongli || this.imagem1 === this.childe){

    } else {
      if (this.cont % 2 === 0){
        this.imagem1 = this.zhongli;
        this.contO++;
      } else {
        this.imagem1 = this.childe;
      }
      this.cont++;
      if (this.contO === 3) {
        this.mensagem = "O ganhou"
      } else if (this.contX === 3){
        this.mensagem = "X ganhou"
      }
    }
  }
  jogar2() {
    if (this.imagem2 === this.zhongli || this.imagem2 === this.childe){

    } else {
    if (this.cont % 2 === 0){
      this.imagem2 = this.zhongli;
      this.contO++;
    } else {
      this.imagem2 = this.childe;
    }
    this.cont++;
    if (this.contO === 3) {
      this.mensagem = "O ganhou"
    } else if (this.contX === 3){
      this.mensagem = "X ganhou"
    }
  }
  }
  jogar3() {
    if (this.imagem3 === this.zhongli || this.imagem3 === this.childe){

    } else {
    if (this.cont % 2 === 0){
      this.imagem3 = this.zhongli;
      this.contO++;
    } else {
      this.imagem3 = this.childe;
    }
    this.cont++;
    if (this.contO === 3) {
      this.mensagem = "O ganhou"
    } else if (this.contX === 3){
      this.mensagem = "X ganhou"
    }
  }
  }
  jogar4() {
    if (this.imagem4 === this.zhongli || this.imagem4 === this.childe){

    } else {
    if (this.cont % 2 === 0){
      this.imagem4 = this.zhongli;
      this.contO++;
    } else {
      this.imagem4 = this.childe;
    }
    this.cont++;
    if (this.contO === 3) {
      this.mensagem = "O ganhou"
    } else if (this.contX === 3){
      this.mensagem = "X ganhou"
    }
  }
  }
  jogar5() {
    if (this.imagem5 === this.zhongli || this.imagem5 === this.childe){

    } else {
    if (this.cont % 2 === 0){
      this.imagem5 = this.zhongli;
      this.contO++;
    } else {
      this.imagem5 = this.childe;
    }
    this.cont++;
    if (this.contO === 3) {
      this.mensagem = "O ganhou"
    } else if (this.contX === 3){
      this.mensagem = "X ganhou"
    }
  }
  }
  jogar6() {
    if (this.imagem6 === this.zhongli || this.imagem6 === this.childe){

    } else {
    if (this.cont % 2 === 0){
      this.imagem6 = this.zhongli;
      this.contO++;
    } else {
      this.imagem6 = this.childe;
    }
    this.cont++;
    if (this.contO === 3) {
      this.mensagem = "O ganhou"
    } else if (this.contX === 3){
      this.mensagem = "X ganhou"
    }
  }
  }
  jogar7() {
    if (this.imagem7 === this.zhongli || this.imagem7 === this.childe){

    } else {
    if (this.cont % 2 === 0){
      this.imagem7 = this.zhongli;
      this.contO++;
    } else {
      this.imagem7 = this.childe;
    }
    this.cont++;
    if (this.contO === 3) {
      this.mensagem = "O ganhou"
    } else if (this.contX === 3){
      this.mensagem = "X ganhou"
    }
  }
  }
  jogar8() {
    if (this.imagem8 === this.zhongli || this.imagem8 === this.childe){

    } else {
    if (this.cont % 2 === 0){
      this.imagem8 = this.zhongli;
      this.contO++;
    } else {
      this.imagem8 = this.childe;
    }
    this.cont++;
    if (this.contO === 3) {
      this.mensagem = "O ganhou"
    } else if (this.contX === 3){
      this.mensagem = "X ganhou"
    }
  }
  }
  jogar9() {
    if (this.imagem9 === this.zhongli || this.imagem9 === this.childe){

    } else {
    if (this.cont % 2 === 0){
      this.imagem9 = this.zhongli;
      this.contO++;
    } else {
      this.imagem9 = this.childe;
    }
    this.cont++;
    if (this.contO === 3) {
      this.mensagem = "O ganhou"
    } else if (this.contX === 3){
      this.mensagem = "X ganhou"
    }
  }
  }
}
