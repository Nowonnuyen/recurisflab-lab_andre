import { TestBed } from '@angular/core/testing';

import { CategoryMusicService } from './category-music.service';

describe('CategoryMusicService', () => {
  let service: CategoryMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
