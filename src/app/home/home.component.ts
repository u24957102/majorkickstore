import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SneaksService } from '../service/sneaks.service';
import { Sneaker, Brand } from '../interfaces/interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private sneakerService = inject(SneaksService);
  Products: Sneaker[] = [];
  Brands: Brand[] = [
    {
      id: "nike",
      imageLinks: "https://cdn.brandfetch.io/nike.com/w/512/h/178/theme/",
      name: "Nike"
    },
    {
      id: "adidas",
      imageLinks: "https://cdn.brandfetch.io/adidas.com/w/512/h/178/theme/",
      name: "Adidas"
    },
    {
      id: "puma",
      imageLinks: "https://cdn.brandfetch.io/puma.com/w/512/h/178/theme/",
      name: "Puma"
    },
    {
      id: "reebok",
      imageLinks: "https://cdn.brandfetch.io/reebok.com/w/512/h/178/theme/",
      name: "Reebok"
    },
    {
      id: "converse",
      imageLinks: "https://cdn.brandfetch.io/converse.com/w/512/h/178/theme/",
      name: "Converse"
    },
    {
      id: "vans",
      imageLinks: "https://cdn.brandfetch.io/vans.com/w/512/h/178/theme/",
      name: "Vans"
    },
    {
      id: "asics",
      imageLinks: "https://cdn.brandfetch.io/asics.com/w/512/h/178/theme/",
      name: "Asics"
    },
    {
      id: "new_balance",
      imageLinks: "https://cdn.brandfetch.io/newbalance.com/w/512/h/178/theme/",
      name: "New Balance"
    },
    {
      id: "superga",
      imageLinks: "https://cdn.brandfetch.io/superga.com/w/512/h/178/theme/",
      name: "Superga"
    },
    {
      id: "bathu",
      imageLinks: "https://cdn.brandfetch.io/bathu.co.za/w/512/h/178/theme/",
      name: "Bathu"
    }
  ];

  ngOnInit(): void {
    this.sneakerService.getPopularSneakers().subscribe({
      next: (data) => {
        this.Products = data;
      },
      error: (err) => {
        console.error('Error fetching sneakers:', err);
      }
    });
  }
}