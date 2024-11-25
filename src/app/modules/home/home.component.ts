import { Component, OnInit } from '@angular/core';
import { fade } from '../../recursiflab/shared/animation/animations';
// import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ //mon trigger que j'apelle fade avec un tableau qui va lister toutes les transitions (qui se trouve now dans mon fichier animations.ts) 
    //creer un fichier animations plutot que de le laisser dans home me permettra de l'utiliser dans nimporte quel component
    fade
  ]
})
export class HomeComponent implements OnInit {
  constructor() {


  }

  ngOnInit(): void {

  }
  image_to_music = [
    //pk mettre en commentaire element artiste du dernier track crée une erreur???
    { //artist: 'Artist: Nowon',
      artist: '',
      title: 'Take Me',
      path: 'assets/images/TakeMe2.jpg',
      music: 'assets/music/TakeMe.mp3',
    },
    {
      artist: '',
      title: 'Kunoichi',
      path: 'assets/images/Kunoichi.jpeg',
      music: 'assets/music/Kunoichi.mp3',
    },
    { //artist: '',
      artist: '',
      title: 'New Day',
      path: 'assets/images/NewDay.png',
      music: 'assets/music/NewDay.mp3',
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
      title: 'Parkour',
      path: 'assets/images/Parkour.png',
      music: 'assets/music/Parkour.mp3',
    },

  ];


}
