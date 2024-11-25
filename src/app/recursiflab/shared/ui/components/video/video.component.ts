import { Component, Input } from '@angular/core';
import { IVideo } from 'src/app/recursiflab/models/i-video-model';
import { MatDialog } from '@angular/material/dialog';
import { VideoDetailComponent } from '../video-detail/video-detail.component';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})

export class VideoComponent {
    @Input() video!: IVideo;
    constructor(
        private dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    openVideoDetail() {
        const dialogRef = this.dialog.open(VideoDetailComponent, {
            panelClass: 'custom-modalbox',
            data: this.video
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}