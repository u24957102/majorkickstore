import { SneaksService } from './../service/sneaks.service';
import { Component, inject, Injectable } from '@angular/core';
import { Sneaker, Brand } from '../interfaces/interface';

@Component({
  selector: 'app-productspage',
  standalone: true,
  imports: [],
  templateUrl: './productspage.component.html',
  styleUrl: './productspage.component.scss'
})

export class ProductspageComponent {
  private sneaksService = inject(SneaksService);
  Products: Sneaker[] = [];
  ImageLinks: string[] = ["./../assets/images/J1.png", "./../assets/images/J2.png", "./../assets/images/J3.png", "./../assets/images/J4.png"];
  
  //Track hover state of the product_div
  isHoveringPD: { [key: string]: boolean } = {};
  // Track selected image for each product
  selectedImages: { [key: string]: string } = {};
  // Track clicked image for each product
  clickedImages: { [key: string]: string } = {};
  // Track hover state for each product
  isHovering: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.sneaksService.getPopularSneakers(50).subscribe({
      next: (data) => {
        this.Products = data;
        // Initialize selectedImages with default image for each product
        this.Products.forEach(sneaker => {
          this.selectedImages[sneaker._id] = sneaker.imageLinks.length > 0 ? sneaker.imageLinks[1] : sneaker.thumbnail;
        });
        console.log(data);
      },
      error: (err) => {
        console.error('Error fetching sneakers:', err);
      }
    });
  }

  // Handle main image div hover
  onMainImageHover(sneakerId: string): void {
    this.isHovering[sneakerId] = true;
    // Show first image from ImageLinks when hovering, but only if no image is clicked
    if (!this.clickedImages[sneakerId]) {
      this.selectedImages[sneakerId] = this.ImageLinks[0];
    }
  }

  // Handle main image div mouse leave
  onMainImageLeave(sneakerId: string): void {
    this.isHovering[sneakerId] = false;
    // Return to original image when not hovering, but only if no image is clicked
    if (!this.clickedImages[sneakerId]) {
      const sneaker = this.Products.find(s => s._id === sneakerId);
      if (sneaker) {
        this.selectedImages[sneakerId] = sneaker.imageLinks.length > 0 ? sneaker.imageLinks[1] : sneaker.thumbnail;
      }
    }
  }

  // Handle image click in images-div
  onImageClick(sneakerId: string, imageUrl: string): void {
    this.selectedImages[sneakerId] = imageUrl;
    this.clickedImages[sneakerId] = imageUrl;
  }

  // Check if an image is clicked for styling
  isImageClicked(sneakerId: string, imageUrl: string): boolean {
    return this.clickedImages[sneakerId] === imageUrl;
  }

  // Get the current display image for a product
  getDisplayImage(sneaker: Sneaker): string {
    return this.selectedImages[sneaker._id] || (sneaker.imageLinks.length > 0 ? sneaker.imageLinks[1] : sneaker.thumbnail);
  }
  //Setting the product div 
  onProduct_divHover(sneakerId: string){
    this.isHoveringPD[sneakerId] = true;
  }
  onProductHover(sneakerId: string){
    return this.isHoveringPD[sneakerId] ;
  }
  //Resting the image Product_div to it's default
  onProduct_divLeave(sneakerId: string){
    this.isHoveringPD[sneakerId] = false ;
    const sneaker = this.Products.find(s=>s._id === sneakerId);
    if (sneaker) {
        this.selectedImages[sneakerId] = sneaker.imageLinks.length > 0 ? sneaker.imageLinks[1] : sneaker.thumbnail;
        this.clickedImages[sneakerId] = "";
      }
    
  }
}