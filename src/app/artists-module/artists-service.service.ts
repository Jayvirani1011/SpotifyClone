import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ArtistsServiceService {
  private accessToken: string = 'BQCYxN3n3VhEUyD2js2UFEBjdhaG9OL2IqgpLj-kcl-68B_5iuSCrsDuaa8msKesrAYccW4xyUP8_FlVJ4SkJj77hnmNu0Wp0fKjX_FK39lo-tDAjtl1';
  constructor(private http: HttpClient) { }

  getArtist(artistName: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    // return this.http.get(`search?q=${artistName}&type=artist`, { headers });
    return this.http.get(`search?q=${artistName}&type=artist`, { headers }).pipe(map((val,index)=>{
      return {}
    }));
  }
}
