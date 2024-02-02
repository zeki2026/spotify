import { EventEmitter, Injectable} from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService{

  callBack: EventEmitter<any> = new EventEmitter();
  
  myObservable1$: Observable<any> = new Observable();

  // myObservable2$: Subject<any> = new Subject();

  myObservable2$: BehaviorSubject<any> = new BehaviorSubject('Hay agua XD');

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
  
      setTimeout(()=>{
        this.myObservable2$.next('Envia agua')
      },1500);

      setTimeout(()=>{
        this.myObservable2$.error('error al Envia agua')
      },2500);
  }
}
