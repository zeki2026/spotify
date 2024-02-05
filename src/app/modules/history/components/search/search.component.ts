import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  
  @Output() callbackData: EventEmitter<any> = new EventEmitter();

  src:string = 'asd'

  constructor() { }

  ngOnInit(): void {
    
  }

  callSearch(term:string):void {
    if(term.length >=3){
      this.callbackData.emit(term)
    }
  }
}
