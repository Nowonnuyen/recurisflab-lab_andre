import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { HeaderConfig } from 'src/app/recursiflab/configs/header.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  open = false;
  headerConfig = HeaderConfig;
  @ViewChild('burgerBtn') burgerBtn?: ElementRef;
  @ViewChild('fullscreenMenu') fullscreenMenu?: ElementRef;
  isMenuOpen = false;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void { }

  isMobile() {
    return this.deviceService.isMobile();
  }

  toggleMenu() {
    // if (this.fullscreenMenu && this.isMenuOpen == false) {
    //   console.log(this.fullscreenMenu)
    //   this.fullscreenMenu.nativeElement.classList.toggle('show-menu');
    //   this.isMenuOpen = true;
    // }
    // if (this.fullscreenMenu && this.isMenuOpen == true) {
    //   this.fullscreenMenu.nativeElement.classList.toggle('show-menu');
    //   this.isMenuOpen = false;
    // }
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (this.burgerBtn?.nativeElement.ariaExpanded == 'true') {
      this.burgerBtn.nativeElement.click();
    }
  }
}
