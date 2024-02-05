import { EventEmitter, Injectable} from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService{

  callBack: EventEmitter<any> = new EventEmitter();
  
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement;
  public timeElapsed$: BehaviorSubject<any> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<any> = new BehaviorSubject('-00:00');
  public playerStatus$: BehaviorSubject<any> = new BehaviorSubject('paused');
  public playerPorcentage$: BehaviorSubject<any> = new BehaviorSubject(0);

  // myObservable1$: Observable<any> = new Observable();

  // myObservable2$: Subject<any> = new Subject();

  // myObservable2$: BehaviorSubject<any> = new BehaviorSubject('Hay agua XD');

  constructor() { 
    // this.myObservable1$ = new Observable((observer:Observer<any>)=>{
    //   observer.next('Se madndo correctamente')

    //   setTimeout(()=>{
    //     observer.complete()
    //   },2500);

    //   setTimeout(()=>{
    //     observer.next('Se mando desoues del tiempo')
    //   },2500);

    //   setTimeout(()=>{
    //     observer.error('Se mando desoues del tiempo')
    //   },2500);
    // });
  
      // setTimeout(()=>{
      //   this.myObservable2$.next('Envia agua')
      // },1500);

      // setTimeout(()=>{
      //   this.myObservable2$.error('error al Envia agua')
      // },2500);

      this.audio = new Audio();

      this.trackInfo$
        .subscribe(response =>{
          if(response){
            this.setAudio(response);
          }
        })

      this.listenAllEvents();
  }

  private listenAllEvents():void {
    this.audio.addEventListener('timeupdate',this.calculateTime,false);
    this.audio.addEventListener('playing',this.setPlayerstatus,false);
    this.audio.addEventListener('play',this.setPlayerstatus,false);
    this.audio.addEventListener('pause',this.setPlayerstatus,false);
    this.audio.addEventListener('ended',this.setPlayerstatus,false);
  }


  private setPlayerstatus = (state: any)=>{
    switch (state.type) {
      case 'play':
        this.playerStatus$.next('play');
        break;
      case 'playing':
        this.playerStatus$.next('playing');
        break;
      case 'ended':
        this.playerStatus$.next('ended');
        break;
      default:
        this.playerStatus$.next('paused')
        break;
    }
  }

  public tooglePlayer():void{
    this.audio.paused ? this.audio.play() : this.audio.pause();

  }

  private calculateTime = ()=>{
    const {duration, currentTime} = this.audio;
    this.setTimeElapsed(currentTime);
    this.setRemaining(currentTime, duration);
    this.setPercentage(currentTime, duration);
  }

  private setPercentage(currentTime:number, duration:number):void {
    this.playerPorcentage$.next((currentTime/duration)*100);
  }

  private setTimeElapsed(currentTime: number): void{
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor(currentTime / 60) % 60;

    const displaySeconds = (seconds<10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes<10) ? `0${minutes}` : minutes;

    const displayFormat = `${displayMinutes}:${displaySeconds}`;

    this.timeElapsed$.next(displayFormat);

  }

  private setRemaining(currentTime: number, duration: number): void{
    let timeLeft = (duration - currentTime);
    
    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor(timeLeft / 60) % 60;
    const displaySeconds = (seconds<10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes<10) ? `0${minutes}` : minutes;

    const displayFormat = `-${displayMinutes}:${displaySeconds}`;

    this.timeRemaining$.next(displayFormat);

  }


  public setAudio(track: TrackModel):void{
    console.log('desde el servicio',track);
    this.audio.src = track.url;
    this.audio.play();

  }

  public seekAudio(percentage: number):void{
    const { duration } = this.audio;
    const percentageToSecond = (percentage * duration) / 100;
    this.audio.currentTime = percentageToSecond;
  }
}
