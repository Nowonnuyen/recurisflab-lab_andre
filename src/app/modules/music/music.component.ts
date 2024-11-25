import { Component, OnInit } from '@angular/core';
import Track from './components/track/track';
import { CategoryMusicService } from 'src/app/recursiflab/services/category-music.service';
import { HttpResponse } from '@angular/common/http';
import { Categorymusic } from 'src/app/recursiflab/models/category-music';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  Track = Track;
  categoryMusic!: Categorymusic[]
  constructor(private categoryService: CategoryMusicService) { }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe((data: HttpResponse<Categorymusic> | any) => {
      console.log(data);
      this.categoryMusic = data.body;

    })
  }


}
