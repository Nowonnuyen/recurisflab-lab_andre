import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from 'src/app/recursiflab/shared/ui/ui.module';
import { MusicRoutingModule } from './music-routing.module';
import { TrackComponent } from './components/track/track.component';
import { MusicComponent } from './music.component';



@NgModule({
  declarations: [MusicComponent, TrackComponent],
  imports: [CommonModule, MusicRoutingModule, UiModule],
})
export class MusicModule { }
