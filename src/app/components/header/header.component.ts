import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // ✅ Import these

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // ✅ Add here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}