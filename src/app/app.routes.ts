import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import path from 'path';
import { MainComponent } from './main/main.component';
import { CreerSondageComponent } from './creer-sondage/creer-sondage.component';
import { ConnectionComponent } from './connection/connection.component';
import { VoterComponent } from './voter/voter.component';

export const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        title: 'Page Principale'
      },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'creer-sondage',
        component: CreerSondageComponent,
        title: 'Création de sondage'
      },
      {
        path: 'connection',
        component: ConnectionComponent,
        title: 'Connection'
      },
      {
        path: 'voter/id',
        component: VoterComponent,
        title: 'Voter'
      }

    
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}