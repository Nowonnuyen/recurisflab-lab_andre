import { Injectable } from '@angular/core';
import { Music } from '../models/music';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<Music>> {
    return this.http.get<Music>('/assets/data/music.json', { observe: 'response' });
  }

}
