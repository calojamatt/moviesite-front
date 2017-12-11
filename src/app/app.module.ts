import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { TheatersComponent } from './theaters/theaters.component';
import { ContentComponent } from './content/content.component';

// Application Imports
import {MoviesService} from './services/movies.service';
import {TheatersService} from './services/theaters.service';
import { AppRoutingModule } from './/app-routing.module';
import { TheatersMoviesComponent } from './theaters-movies/theaters-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    TheatersComponent,
    ContentComponent,
    TheatersMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ MoviesService, TheatersService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
