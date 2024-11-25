import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //adn du lazyloading here bro //tout ca c le router outlet
  {
    path: '', //les differents path on ete mis dans le layout-routing.module.ts a la racine de app
    loadChildren: () => import('./layout/layout.module')
      .then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

