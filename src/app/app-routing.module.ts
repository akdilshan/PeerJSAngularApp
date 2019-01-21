import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConferenceRoomComponent} from '../app/conference-room/conference-room.component';


const routes: Routes = [
  { path: 'conferenceRoom',  component: ConferenceRoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
