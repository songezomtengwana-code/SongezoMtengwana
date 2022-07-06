import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { WelcomeSectionComponent } from './layout/welcome-section/welcome-section.component';
import { TalentSectionComponent } from './layout/talent-section/talent-section.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { ArtistModalComponent } from './components/artist-modal/artist-modal.component';
import { DiscograpyPageComponent } from './layout/discograpy-page/discograpy-page.component';
import { DiscographyCardComponent } from './components/discography-card/discography-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    LandingPageComponent,
    WelcomeSectionComponent,
    TalentSectionComponent,
    ArtistCardComponent,
    ArtistModalComponent,
    DiscograpyPageComponent,
    DiscographyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
