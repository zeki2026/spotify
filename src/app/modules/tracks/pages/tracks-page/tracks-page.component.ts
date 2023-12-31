import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {
  mockTracksList:Array<TrackModel> = 
  [
  ];
  constructor(){

  }

  ngOnInit(): void {
    const {data}:any = dataRaw;
      console.log(dataRaw);
      this.mockTracksList = data;
  }
}
