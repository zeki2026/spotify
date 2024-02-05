import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  // mockCover!: TrackModel;
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  state:string = 'paused';
  listObservers: Array<Subscription>=[];

  constructor(public multimediaService: MultimediaService){

  }

  ngOnInit(): void {

    const oberver$ = this.multimediaService.playerStatus$  
      .subscribe(status =>{
        this.state = status;
      });
      this.listObservers = [oberver$];
    // const observer1: Subscription = this.multimediaService.callBack.subscribe(
    //   (response: TrackModel)=>{
    //     console.log('Recibiendo Cancion..', response);
    //   }
    // );

  // const myObservable1$ = this.multimediaService.myObservable2$
  //   .subscribe({
  //      next: (response)=>{
  //        console.log('Recibiendo Cancion..', response);
  //      },
  //      error: (err) =>{console.log(`Error de conexion ${err}`);}
  //    });

  // this.multimediaService.trackInfo$
  //     .subscribe(res=>{
  //       console.log('Reproducir esta cancion',res);
  //     });
  }

  handlePosition(event: MouseEvent): void {
    const elNative:HTMLElement = this.progressBar.nativeElement;
    const { clientX } = event;
    const { x, width }= elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width;
    this.multimediaService.seekAudio(percentageFromX);
  }

  ngOnDestroy(): void {
    this.listObservers.forEach(observer => observer.unsubscribe());
      console.log('CABOOOM!');
  }
}
