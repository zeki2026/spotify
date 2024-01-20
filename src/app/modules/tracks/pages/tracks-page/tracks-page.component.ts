import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObservable: Array<Subscription> = [];
  
  constructor(private TrackService: TrackService){

  }

  ngOnInit(): void {
    this.TrackService.getAllTracks$()
    .subscribe((track:TrackModel[]) =>{
      console.log(track)
      this.tracksTrending = track;
    });

    this.TrackService.getAllRandom$()
    .subscribe((data:TrackModel[])=>{
      console.log(data);
      this.tracksRandom = data;
    });

  }

  ngOnDestroy(): void {
      this.listObservable.forEach(u => u.unsubscribe());
  }
} 
