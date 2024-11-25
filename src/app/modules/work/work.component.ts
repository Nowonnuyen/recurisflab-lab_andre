import { Component, HostListener, OnInit } from '@angular/core';
import { IVideo } from 'src/app/recursiflab/models/i-video-model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  numberOfVideos = 5;
  width: number = window.innerWidth;
  videos: IVideo[] = [
    {
      thumbnail: '../../../assets/images/Dunee.png',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Dune_2021_transparent_logo.png',
      video: 'https://www.youtube.com/embed/sZYXmYeKNhI',
      title: 'Dune | © Warner Bros',
      description: 'Trailer Film',
      abstract: '2021'
    },
    {
      thumbnail: '../../../assets/images/Ferrari.jpg',
      logo: 'https://images.fanart.tv/fanart/the-matrix-5b41d3cbeff6d.png',
      video: 'https://www.youtube.com/embed/CuugqlKXpj8',
      title: 'RedSkin | © Ferrari',
      description: 'Advertising',
      abstract: '2023'
    },
    {
      thumbnail: '../../../assets/images/Apple.jpg',
      logo: 'https://images.fanart.tv/fanart/paterson-57efa53b9cd16.png',
      video: 'https://www.dailymotion.com/embed/video/x8m5o4x?autoplay=1',
      title: 'Dynamic Island | © Apple',
      description: 'Advertising',
      abstract: '2023'
    },
    {
      thumbnail: '../../../assets/images/dior.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tb8LutyHmk0',
      title: 'Dior | © Iconoclast',
      description: 'Advert Media',
      abstract: '2019'
    },
    {
      thumbnail: '../../../assets/images/iniesta2.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tb8LutyHmk0',
      title: 'Andres | © Lagencia',
      description: 'Video Editing',
      abstract: '2018'
    },
    {
      thumbnail: '../../../assets/images/1917.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tb8LutyHmk0',
      title: '1917 | © Dreamworks',
      description: 'Trailer Film',
      abstract: '2019'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
    {
      thumbnail: '../../../assets/images/emptyThumbnail.png',
      logo: 'https://images.fanart.tv/fanart/se7en-525fb1844f2c8.png',
      video: 'https://www.youtube.com/embed/tiYVIZD1G9c',
      title: 'TBA',
      description: 'none',
      abstract: 'Recursiflab'
    },
  ]
  showedVideos: IVideo[] = [];

  constructor() {
    this.setVideos();
  }

  ngOnInit(): void {
  }

  // using hostlistener to detect window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // if window width == mobile set videos length to 5
    this.width = event.target.innerWidth;
    // this.setVideos();
  }

  setVideos() {
    this.showedVideos = this.videos.slice(0, this.numberOfVideos);
  }

  loadMore() {
    console.log(this.videos.length);
    this.numberOfVideos += 2;
    if (this.numberOfVideos < this.videos.length) {
      console.log('works');
      this.setVideos();
    } else {
      this.showedVideos = this.videos;
    }
  }

  //lecteur dedié à la page Work
  image_to_music = [
    //pk mettre en commentaire element artiste du dernier track crée une erreur???
    { //artist: 'Artist: Nowon',
      artist: '',
      title: 'Frat',
      path: 'assets/images/Frat.jpg',
      music: 'assets/music/Frat.mp3',
    },

    { //artist: '',
      artist: '',
      title: 'Soap',
      path: 'assets/images/Soap.jpg',
      music: 'assets/music/Soap.mp3',
    },

    {
      //artist: '',
      artist: '',
      title: 'Take Me',
      path: 'assets/images/TakeMe2.jpg',
      music: 'assets/music/TakeMe.mp3',
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
