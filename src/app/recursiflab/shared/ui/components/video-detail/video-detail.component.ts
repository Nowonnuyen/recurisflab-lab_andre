import { Component, HostListener, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IVideo } from 'src/app/recursiflab/models/i-video-model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-video-detail',
    templateUrl: './video-detail.component.html',
    styleUrls: ['./video-detail.component.scss'],
})
export class VideoDetailComponent {
    isShowed = false;
    @ViewChild('videoDetail', { static: true }) videoDetail?: ElementRef
    constructor(
        private dialogRef: MatDialogRef<VideoDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public video: IVideo
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    @HostListener('document:click', ['$event'])
    autoClose(event: any): void {
        if (!this.videoDetail?.nativeElement.contains(event.target) && !this.isShowed) {
            this.isShowed = true;
        } else if (!this.videoDetail?.nativeElement.contains(event.target) && this.isShowed) {
            this.dialogRef.close();
        }
    }
}
