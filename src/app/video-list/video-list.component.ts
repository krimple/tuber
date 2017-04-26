import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Video } from '../models/video';
import { YouTubeService } from './youtube.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/share';
import { Router } from '@angular/router';
@Component({
  selector: 'app-video-list',
  templateUrl: 'video-list.component.html',
  styleUrls: ['video-list.component.css']
})
export class VideoListComponent implements OnInit {

  private form: FormGroup;

  @ViewChild('searchTerm') searchTerm: Input;

  videos: Video[];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private youTubeService: YouTubeService) {
  }

  ngOnInit() {
    const self = this;
    this.form = this.formBuilder.group({
      searchTerm: ''
    });
    this.youTubeService.playlist('cats')
      .then((videos: Video[]) => {
        this.videos = videos;
      })
      .then(() => {
        self.form.get('searchTerm')
          .valueChanges
          .debounceTime(1000)
          .distinctUntilChanged()
          .subscribe((data) => {
            this.youTubeService.playlist(data)
              .then((videos: Video[]) => {
                self.videos = videos;
              });
          });
      });
  }

  watch(video: Video) {
    this.router.navigate(['player', video.videoId]);
  }
}

