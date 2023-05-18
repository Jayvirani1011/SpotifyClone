import { Component, OnInit } from '@angular/core';
import { HomeServicesService } from './home-services.service';
import { MatDialog } from '@angular/material/dialog';
import { DilogBoxComponent } from './dilog-box/dilog-box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  songList: any[] = []

  constructor(private homeService: HomeServicesService, public dialog: MatDialog){}

  ngOnInit(): void{
    this.homeService.getAllTrack().subscribe((response: any) => {
      if (response != undefined) {
        console.log(response);
        this.songList = response.albums.items;
        console.log(this.songList);
      }
    })
  }

  openDialog() {
    this.dialog.open(DilogBoxComponent);
  }
}
