import { TestBed, inject } from '@angular/core/testing';

import { YouTubeService } from './youtube.service';

describe('PlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YouTubeService]
    });
  });

  it('should ...', inject([YouTubeService], (service: YouTubeService) => {
    expect(service).toBeTruthy();
  }));
});
