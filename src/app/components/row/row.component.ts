import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-row',
  standalone: true,
  imports: [],
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss'
})
export class RowComponent {
@Input()  header: string = 'Product Row';
@Input()  Product: string = 'Product Row';
}
