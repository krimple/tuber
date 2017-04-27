import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';
import { YoutubePlayerMiniModule } from 'ng2-youtube-player-mini';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    YoutubePlayerMiniModule
  ],
  declarations: [PlayerComponent],
  exports: [
    PlayerComponent
  ],
  providers: [
  ]
})
export class PlayerModule { }
