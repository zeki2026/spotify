import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;
  constructor(private http: HttpClient) { }

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
        map(({data}: any) =>{
          return data.reverse();
        })
      )
  }
}