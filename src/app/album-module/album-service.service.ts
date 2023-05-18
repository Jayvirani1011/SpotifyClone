import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  private accessToken: string = 'BQCYxN3n3VhEUyD2js2UFEBjdhaG9OL2IqgpLj-kcl-68B_5iuSCrsDuaa8msKesrAYccW4xyUP8_FlVJ4SkJj77hnmNu0Wp0fKjX_FK39lo-tDAjtl1';
  
  // constructor(private http: HttpClient) {}

  // searchAlbum(albumName: string) {
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
  //   return this.http.get(`search?q=${albumName}&type=album`, { headers });
  // }

  constructor(private http: HttpClient) { }
  getAlbum(albumId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`)
    console.log('albumId ' + albumId)
    return this.http.get(`albums/${albumId}`, { headers })
  }

  getTrack(albumId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`)
    const url = `albums/${albumId}/tracks`;
    return this.http.get<any>(url, { headers })
    // });
  }

}

