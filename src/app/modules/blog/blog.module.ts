import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { UiModule } from 'src/app/recursiflab/shared/ui/ui.module';



@NgModule({
  declarations: [BlogComponent, ArticleComponent],
  imports: [CommonModule, BlogRoutingModule, UiModule],
})
export class BlogModule { }
