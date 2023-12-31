import { Component } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
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
  }
}
