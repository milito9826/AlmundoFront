import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelesComponent } from './components/hoteles/hoteles.component';

const routes: Routes = [
    {
      path: '',
      component: HotelesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelesRoutingModule { }
