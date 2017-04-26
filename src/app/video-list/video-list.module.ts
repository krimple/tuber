import { VideoListComponent } from './video-list.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YouTubeService } from './youtube.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    VideoListComponent
  ],
  providers: [
    YouTubeService
  ],
  exports: [
    VideoListComponent
  ]
})
export class VideoListModule {}
