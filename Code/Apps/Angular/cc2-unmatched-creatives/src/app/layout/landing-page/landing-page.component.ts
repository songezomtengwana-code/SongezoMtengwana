import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { ArtistModalService } from 'src/app/services/artist-modal.service';
import { Artist } from 'src/app/models/artist.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(protected _artistService: ArtistService, protected artistModalService: ArtistModalService) { }

  ngOnInit(): void {
    this._artistService.getArtists()
  }

  /**
   *Get's a list of active artists
   *
   * @readonly
   * @type {Artist[]}
   * @memberof LandingPageComponent
   */
  get artists() { console.log(this._artistService.artists); return this._artistService.artists }
  /**
   * Show's artist's modal
   *
   * @param {Artist} artist
   * @memberof LandingPageComponent
   */
  showArtistModal(artist: Artist): void {
    this.artistModalService.viewArtistModal(artist);
  }
  /**
   * Hide's artist's modal
   *
   * @memberof LandingPageComponent
   */
  hideArtistModal(): void {
    this.artistModalService.hideArtistModal();
  }

}
