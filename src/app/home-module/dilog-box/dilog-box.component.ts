import { Component, OnInit } from '@angular/core';
import { HomeServicesService } from '../home-services.service';

@Component({
  selector: 'app-dilog-box',
  template: `
    <div *ngIf="trackSongs && trackSongs.length > 0">
      <h2>List of Songs</h2>
      <ul>
        <li *ngFor="let trackSong of trackSongs">
          {{ trackSong.name }} - {{ trackSong.artist }}
        </li>
      </ul>
    </div>

    <div *ngIf="!trackSongs || trackSongs.length === 0">
      <p>No songs available.</p>
    </div>
  `,
  styles: [],
})
export class DilogBoxComponent implements OnInit {
  trackSongs: any[] = [];

  constructor(private homeService: HomeServicesService) {}

  ngOnInit(): void {
    const albumId = "";
    this.homeService.getPlaylistTracks(albumId).subscribe(
      (trackSongs: any[]) => {
        this.trackSongs = trackSongs;
        console.log(`Tracks of songs : ${this.trackSongs}`);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
