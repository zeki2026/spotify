import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track!: TrackModel;

  constructor(){

  }

  ngOnInit(): void {
      
  }
}
