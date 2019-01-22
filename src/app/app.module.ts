import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConferenceRoomComponent } from './conference-room/conference-room.component';
import { FormsModule } from '@angular/forms';

import {MatListModule, MatCardModule, MatDividerModule, MatGridListModule, MatButtonModule, MatDialogModule, MatInputModule, MatChipsModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent, 
    ConferenceRoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule, MatDividerModule,MatListModule, MatGridListModule, MatButtonModule, MatDialogModule, MatInputModule, MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
