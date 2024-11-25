import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicComponent } from './music.component';
import { TrackComponent } from './components/track/track.component';


const routes: Routes = [
    { path: '', component: MusicComponent },
    { path: 'track/:id', component: TrackComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MusicRoutingModule { }
