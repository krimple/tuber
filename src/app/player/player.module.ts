import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { YoutubePlayerMiniModule } from 'ng2-youtube-player-mini';

@NgModule({
  imports: [
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
