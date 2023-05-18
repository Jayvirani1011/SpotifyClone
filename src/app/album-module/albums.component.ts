import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from './album-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent {
  albumArtist: any;
  album: any;

  constructor(private albumService: AlbumServiceService) {}

  ngOnInit(): void {
    const albumId = '4aawyAB9vmqN3uQ7FjRGTy';
    this.albumService.getAlbum(albumId).subscribe(
      (response) => {
        this.album = response
        this.albumArtist = response.tracks.items.flatMap(
          (track: any) => track.artists
        );
        console.log('Response', response);
        console.log('albm item', this.albumArtist);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  // getAlubum(){
  //   const albumId = '4aawyAB9vmqN3uQ7FjRGTy'
  //   this.albumService.getAlbum(albumId).subscribe(
  //     (response)=>{
  //       this.album = response
  //       console.log(response);
        
  //       // this.album = response.artist.name
  //     },
  //     (error)=>{
  //       console.log('Error',error)
  //     }
  //   );
  // }
}
