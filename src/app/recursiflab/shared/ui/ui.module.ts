import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VimeModule } from '@vime/angular';
import { PlayerComponent } from './components/player/player.component';
import { CustomPipe } from '../../pipes/custom-pipe.module';
import { ArticlesRowComponent } from './components/articles/articles-row.component';
import { VideoComponent } from './components/video/video.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component'
import { TracksRowComponent } from './components/tracks/tracks-row.component';



@NgModule({
  declarations: [
    PlayerComponent, ArticlesRowComponent, VideoComponent, VideoDetailComponent, TracksRowComponent
  ],
  imports: [
    CommonModule,
    VimeModule,
    CustomPipe
  ],
  exports: [
    PlayerComponent,
    ArticlesRowComponent,
    VideoComponent,
    VideoDetailComponent,
    TracksRowComponent
  ]
})
export class UiModule { }
