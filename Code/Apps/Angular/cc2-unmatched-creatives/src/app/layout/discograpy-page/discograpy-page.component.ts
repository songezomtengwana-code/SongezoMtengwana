import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service'
import { Artist } from 'src/app/models/artist.model';
import { ArtistModalService } from 'src/app/services/artist-modal.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discograpy-page',
  templateUrl: './discograpy-page.component.html',
  styleUrls: ['./discograpy-page.component.scss',
    '../../components/discography-card/discography-card.component.scss']
})
export class DiscograpyPageComponent implements OnInit {

  constructor(protected http: HttpClient, protected _ArtistService: ArtistService, protected _ArtistModalService: ArtistModalService) { }

  ngOnInit(): void {
  }

  get artists(): Artist[] { return this._ArtistService.artists }

  get activeArtist(): Artist {
    return this._ArtistModalService.artist;
  }

  getArtistry(artistry: string[]): string {
    var result: string = '';
    artistry?.forEach((_artistry: string) => {
      result += `${_artistry}/`;
    });
    if (result?.endsWith('/')) {
      result = result.substr(0, result?.length - 1)
    }
    return result;
  }

  bgswitch(): void {
    const navbar = document.getElementById('navbar') as HTMLElement;
    const artist = document.getElementById('artist') as HTMLElement;
    window.onscroll = function () { myFunction() };
    function myFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#181818";
        artist.style.opacity = "1";
      } else {
        artist.style.opacity = "0";
        navbar.style.backgroundColor = "transparent"
      }
    }
  }
}
