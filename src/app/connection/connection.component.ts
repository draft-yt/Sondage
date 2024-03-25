import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutComponent } from '../layout/layout.component';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [InputTextModule,PasswordModule,LayoutComponent,ButtonModule],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css'
})
export class ConnectionComponent {

}
