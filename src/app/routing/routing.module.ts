import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteDef } from '@angular/compiler-cli/src/ngtools_impl';
import { Route, RouterModule } from '@angular/router';
import { PlayerComponent } from '../player/player.component';
import { VideoListComponent } from '../video-list/video-list.component';

export const routes: Route[] = [
  { path: 'player/:videoId', component: PlayerComponent },
  { path: 'video-list', component: VideoListComponent },
  { path: '', redirectTo: 'video-list', pathMatch: 'full' }
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);
