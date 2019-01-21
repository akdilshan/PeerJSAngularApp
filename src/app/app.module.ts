import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConferenceRoomComponent } from './conference-room/conference-room.component';
import { FormsModule } from '@angular/forms';


import {MatListModule, MatCardModule, MatDividerModule, MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, 
    ConferenceRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule, MatDividerModule,MatListModule, MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
