import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { ArtistModalService } from 'src/app/services/artist-modal.service';
import { Artist } from 'src/app/models/artist.model';

@Component({
  selector: 'app-talent-section',
  templateUrl: './talent-section.component.html',
  styleUrls: ['./talent-section.component.scss']
})
export class TalentSectionComponent implements OnInit {
  constructor(private artistService: ArtistService, protected artistModalService: ArtistModalService) { }
  ngOnInit(): void {
    this.artistService.getArtists();
  }
  /**
   *Get's a list of active artists
   *
   * @readonly
   * @type {Artist[]}
   * @memberof LandingPageComponent
   */
  get artists() { console.log(this.artistService.artists); return this.artistService.artists }
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
