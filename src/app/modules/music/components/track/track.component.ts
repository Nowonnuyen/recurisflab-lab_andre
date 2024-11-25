import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Track from './track';
import { Music } from 'src/app/recursiflab/models/music';
import { MusicService } from 'src/app/recursiflab/services/music.service';
import { HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements AfterViewInit, OnInit {
  track_id = '';
  Track = Track; //importer manuellement peut-etre le pb viens de cet import
  track: any;
  music!: Music[];

  constructor(private activatedRoute: ActivatedRoute, private musicService: MusicService) {
    this.track_id = this.activatedRoute.snapshot.params.id;
    this.track = this.Track.find((a) => a.id === this.track_id);
  }
  ngOnInit(): void {
    this.musicService.findAll().subscribe((data: HttpResponse<Music> | any) => {
      console.log(data);
      this.music = data.body.filter((a: Music) => a.category_id === Number(this.track_id));
      console.log(this.music);

    })


  }

  ngAfterViewInit(): void {
    this.track.content?.forEach((a: any) => {
      if (a.id) {
        document.getElementById(a.id)!.style.background = 'url(' + a.image + ')';
      }
    });
  }
  //lecteur dedié à la page Music
  image_to_music = [
    //pk mettre en commentaire element artiste du dernier track crée une erreur???
    { //artist: 'Artist: Nowon',
      artist: '',
      title: 'Parkour',
      path: 'assets/images/Parkour.jpeg',
      music: 'assets/music/Parkour.mp3',
    },

    { //artist: '',
      artist: '',
      title: 'Ed Regulate',
      path: 'assets/images/Ed_regulate2.jpeg',
      music: 'assets/music/Ed-Regulate.mp3',
    },

    {
      //artist: '',
      artist: '',
      title: 'Take Down',
      path: 'assets/images/Air.jpeg',
      music: 'assets/music/Takedown.mp3',
    },

    {
      artist: '',
      title: 'Day Night',
      path: 'assets/images/Dayandnight2.jpeg',
      music: 'assets/music/DayandNight.mp3',
    },
    //{
    //artist: 'Artist: Nowon',
    //title: 'Dune',
    //path: 'assets/images/Dune.jpeg',
    //music: 'assets/music/Dune_Trailer.mp3',
    //},
    {
      artist: '',
      title: 'Trailer',
      path: 'assets/images/Arena.jpeg',
      music: 'assets/music/Arena.mp3',
    },

  ];
}
