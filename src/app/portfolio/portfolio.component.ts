import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  selectedImage: string = '';
  isModalClosed: boolean = true;

  openModal(imageSrc: string){
    this.selectedImage = imageSrc;
    this.isModalClosed = false;
    console.log('portfolio');
  }

  closeModal(){
    this.isModalClosed = true;
  }
}
