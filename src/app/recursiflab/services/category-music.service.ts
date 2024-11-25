import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Categorymusic } from '../models/category-music';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryMusicService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<Categorymusic>> {
    return this.http.get<Categorymusic>('/assets/data/category_music.json', { observe: 'response' });
  }


}
