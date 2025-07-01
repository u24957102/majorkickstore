import { SneaksService } from './../service/sneaks.service';
import { Component, inject } from '@angular/core';
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
  Products: Sneaker[] = [] ;

  ngOnInit(): void {
    this.sneaksService.getPopularSneakers(15).subscribe({
      next: (data) => {
        this.Products = data;
      },
      error: (err) => {
        console.error('Error fetching sneakers:', err);
      }
    });
  }
}
