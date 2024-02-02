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
    this.loadDatAll();
    // this.loadDatRandom();
  }

  loadDatAll():void{
    this.TrackService.getAllTracks$()
    .subscribe((track:TrackModel[]) =>{this.tracksTrending = track;});

    this.TrackService.getAllRandom$()
      .subscribe({
        next: (data:TrackModel[])=>{this.tracksRandom = data;},
        error: (err) =>{console.log("Error de conexion ${err}");}
      });
  }

  ngOnDestroy(): void {
      this.listObservable.forEach(u => u.unsubscribe());
  }
} 
