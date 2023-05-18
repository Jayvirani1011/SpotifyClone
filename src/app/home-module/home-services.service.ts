import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {
  [x: string]: any;
  private clientId: string = '442a1df554d34f438d5f6ca99fb59389';
  private clientSecret: string = '9b7a7347a03b43568a8723cfc7680273';
  private accessToken: string = 'BQCYxN3n3VhEUyD2js2UFEBjdhaG9OL2IqgpLj-kcl-68B_5iuSCrsDuaa8msKesrAYccW4xyUP8_FlVJ4SkJj77hnmNu0Wp0fKjX_FK39lo-tDAjtl1';
  private playlist_id: string = '3cEYpjA9oz9GiPac4AsH4n ';
  constructor(private http: HttpClient) { }

  private getAccessToken(): void{
    const auth = btoa(`${this.clientId}: ${this.clientSecret}`);
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', Authorization: `Basic ${auth}`});
    const body = 'grant_type=client_credentials';
    const response: any = this.http.post(`https://accounts.spotify.com/api/${this.accessToken}`, body, { headers }).subscribe();
    this.accessToken = response.access_token;
  }

  getAllTrack(){
    if(!this.accessToken){
      this.getAccessToken();
    }
    const headers = new HttpHeaders({Authorization: `Bearer ${this.accessToken}`});
    return this.http.get(`browse/new-releases`,{headers,});
   
  }
  
  getPlaylistTracks(albumId: string): Observable<any>{
    const headers = new HttpHeaders({Authorization: `Bearer ${this.accessToken}`});
    return this.http.get(`/albums/${albumId}`, { headers });
  }
}
