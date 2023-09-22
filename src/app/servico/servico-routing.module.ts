import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicoPage } from './servico.page';

const routes: Routes = [
  {
    path: '',
    component: ServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicoPageRoutingModule {}
