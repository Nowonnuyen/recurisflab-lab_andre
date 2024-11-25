import { Component, OnInit } from '@angular/core';
import Article from './components/article/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  Article = Article;
  constructor() { }

  ngOnInit(): void { }
}
