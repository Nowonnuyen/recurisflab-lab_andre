import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Article from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements AfterViewInit {
  article_id = '';
  Article = Article;
  article: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.article_id = this.activatedRoute.snapshot.params.id;
    this.article = this.Article.find((a) => a.id === this.article_id);
  }

  ngAfterViewInit(): void {
    this.article.content?.forEach((a: any) => {
      if (a.id) {
        document.getElementById(a.id)!.style.background = 'url(' + a.image + ')';
      }
    });
  }
}
