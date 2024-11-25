import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';

@Component({
  selector: 'articles-row',
  templateUrl: './articles-row.component.html',
  styleUrls: ['./articles-row.component.scss'],
})
export class ArticlesRowComponent implements OnInit {
  @Input() article1: any;
  url?: SafeResourceUrl;

  constructor(
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    if (this.article1.video)
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.article1.video);
  }
}
