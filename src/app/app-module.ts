import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { PasswordModule } from 'primeng/password'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'



@NgModule({
  imports: [BrowserModule,InputTextModule,PasswordModule,ButtonModule],
  declarations: [],
  bootstrap: []
})
export class AppModule { }