import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  template: `
    <a href="#" routerLink="/video-list">Back..</a><br/>
    <hr/>
    Video: {{ key }} <br/>
    <youtube-player [playerId]='"player"' 
                    [width]="640" 
                    [height]="480"
                    [videoId]='key'> </youtube-player>
  `
})
export class PlayerComponent implements OnInit, OnChanges {

  key: string = null;

  constructor(private details: ActivatedRoute) { }

  ngOnInit() { this.watch(); }

  ngOnChanges(changes: any) { this.watch(); }

  watch() {
    this.key = this.details.snapshot.params['videoId'];
    console.log(`Key is ${this.key}`);
  }
}
