import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit {

  @Input() tracks: Array<TrackModel> = [];
  optionSort: {property: string | null, order: string} = {
    property: null,
    order: 'desc'
  }
  constructor() { }

  ngOnInit() {
  }

  changeSort(property: string): void{
    const {order} = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc'? 'desc' : 'asc'
    }
  }
}
