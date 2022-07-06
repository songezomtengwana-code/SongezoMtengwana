import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  public _artists: any;

  constructor(private http: HttpClient) { }

  getArtists() {
    const url = `${environment.apiBaseUrl}`;
    this.http.get(url).subscribe((artists) => {
      this._artists = artists;
    });
  }
  get artists() { return this._artists }
}
