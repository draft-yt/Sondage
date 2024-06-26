import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { Sondage } from '../model/sondage';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  sondage: Sondage[]=[]
}
