import { Injectable, Sanitizer, SecurityContext } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Video } from '../models/video';
import 'rxjs/add/operator/toPromise';
import * as Url from 'url';
import { environment } from '../../environments/environment';

@Injectable()
export class YouTubeService {

  constructor(
    private http: Http,
    private sanitizer: Sanitizer) { }

  playlist(name: string): Promise<Video[]> {
    return this.http.get('https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          'key': environment.youtubeKey,
          'part': 'snippet',
          'maxResults': 50,
          'q': encodeURIComponent(name)
        }
      })
      .toPromise()
      .then(
        (data: Response) => {
          return data.json();
        })
      .then((data: any) => {
         return data.items.map((item) => {
           return new Video(
             item.snippet.title,
             this.sanitizer.sanitize(SecurityContext.HTML, item.snippet.description),
             item.id.videoId,
             Url.parse(item.snippet.thumbnails.default.url));
         });
      });
  }
}
