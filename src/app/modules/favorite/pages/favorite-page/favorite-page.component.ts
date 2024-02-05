import { Component } from '@angular/core';

import {data}  from '../../../../data/tracks.json';
@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.css'
})
export class FavoritePageComponent {

  track:Array<any> = data;

}
