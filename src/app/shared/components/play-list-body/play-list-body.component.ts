import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit {

  tracks: Array<TrackModel> = [];
  optionSort: {property: string | null, order: string} = {
    property: null,
    order: 'desc'
  }
  constructor() { }

  ngOnInit() {
    const {data}:any = dataRaw;
    this.tracks = data;  
  }

  changeSort(property: string): void{
    const {order} = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc'? 'desc' : 'asc'
    }
  }
}
