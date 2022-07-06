import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './layout/about/about.component';
import { LandingComponent } from './layout/landing/landing.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { ServicesComponent } from './layout/services/services.component';
import { ContactsComponent } from './layout/contacts/contacts.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    CardComponent,
    InputComponent,
    ButtonComponent,
    AboutComponent,
    LandingComponent,
    WelcomeComponent,
    ServicesComponent,
    ContactsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
