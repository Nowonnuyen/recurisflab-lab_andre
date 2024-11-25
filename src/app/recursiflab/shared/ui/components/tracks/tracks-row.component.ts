import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';

@Component({
  selector: 'tracks-row',
  templateUrl: './tracks-row.component.html',
  styleUrls: ['./tracks-row.component.scss'],
})
export class TracksRowComponent implements OnInit {
  @Input() track1: any;
  url?: SafeResourceUrl;

  constructor(
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    if (this.track1.video)
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.track1.video);
  }
}
