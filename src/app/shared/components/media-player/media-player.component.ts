import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  mockCover: TrackModel = {
    name: "Getting Over",
    album: "One Love",
    cover: "https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg",
    duration: 333,
    url: "",
    _id: 1,
    artist: {
      name: "David Guetta",
      nickname: "David Guetta",
      nationality: "FR"
    }
  };

  listObservers: Array<Subscription>=[];

  constructor(private multimediaService: MultimediaService){

  }

  ngOnInit(): void {
    // const observer1: Subscription = this.multimediaService.callBack.subscribe(
    //   (response: TrackModel)=>{
    //     console.log('Recibiendo Cancion..', response);
    //   }
    // );
    // this.listObservers = [observer1];

    const myObservable1$ = this.multimediaService.myObservable2$
    .subscribe({
       next: (response)=>{
         console.log('Recibiendo Cancion..', response);
       },
       error: (err) =>{console.log(`Error de conexion ${err}`);}
     });
  }

  ngOnDestroy(): void {
    this.listObservers.forEach(observer => observer.unsubscribe());
      console.log('CABOOOM!');
  }
}
