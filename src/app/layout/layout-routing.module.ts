import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('../modules/home/home.module')
          .then(m => m.HomeModule)
      },
      {
        path: 'music',
        loadChildren: () => import('../modules/music/music.module')
          .then(m => m.MusicModule)
      },
      {
        path: 'work', //nouvellement appelé video
        loadChildren: () => import('../modules/work/work.module')
          .then(m => m.WorkModule)
      },

      {
        path: 'blog',
        loadChildren: () => import('../modules/blog/blog.module')
          .then(m => m.BlogModule)
      },

      {
        path: 'contact',
        loadChildren: () => import('../modules/contact/contact.module')
          .then(m => m.ContactModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }