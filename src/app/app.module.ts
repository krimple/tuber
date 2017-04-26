import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PlayerModule } from './player/player.module';
import { RoutingModule } from './routing/routing.module';
import { VideoListModule } from './video-list/video-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    VideoListModule,
    PlayerModule,
    RoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
