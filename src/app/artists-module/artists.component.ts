import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ArtistsServiceService } from './artists-service.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit {
  artistsName: string = '';
  artistsRec: any[] = [];
  art = new FormControl('', [Validators.required]);

  constructor(private artistsService: ArtistsServiceService) {}

  ngOnInit() {}
  searchArtist() {
    this.artistsService.getArtist(this.artistsName).subscribe((response: any) => {
        console.log(response);
        this.artistsRec = response.artists.items;
      });
  }
  
}
