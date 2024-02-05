import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit {
  listResults$: Observable<any> = of([]);
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    
  }

  receiveData(term: string): void {
    this.listResults$ = this.searchService.searchTracks$(term);
  }
}
