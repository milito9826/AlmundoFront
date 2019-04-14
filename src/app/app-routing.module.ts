import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hoteles',
    loadChildren: './hoteles/hoteles.module#HotelesModule'
  },
  {
    path: '',
    redirectTo: 'hoteles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
