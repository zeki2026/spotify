import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import {Observable, of } from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  private skipById(listTracks:TrackModel[], id: number): Promise<TrackModel[]>{

    return new Promise((resolve, reject)=>{
      const listTmp = listTracks.filter(track => track._id!=id);
      return resolve(listTmp);
    })
  }

  getAllTracks$():Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({data}: any) =>{
          return data;
        })
      )
  }

  getAllRandom$():Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({data}:any)=>this.skipById(data,2)),
        map((filterData) =>{
          return filterData.reverse();
        }),
        // map((dataReverse)=>{
          //   return dataReverse.filter((track:TrackModel)=>track._id != 1)
          // })
        // tap(data=>console.log(data)),
        catchError((err)=>{
          const {status,statusText} = err;
          console.log('Se murio la peticion http',status,statusText);

          return of([])
        })
      )
  }
}