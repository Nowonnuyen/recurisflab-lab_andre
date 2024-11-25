import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
    { path: '', component: BlogComponent },
    { path: 'article/:id', component: ArticleComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogRoutingModule { }
