import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { YouTubeService } from './youtube.service';

describe('Youtube Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [YouTubeService]
    });
  });

  it('should ...', inject([YouTubeService], (service: YouTubeService) => {
    expect(service).toBeTruthy();
  }));
});
