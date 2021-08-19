import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NamespacesComponent } from './components/namespaces/namespaces.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';

@NgModule({
  declarations: [
    AppComponent,
    NamespacesComponent,
    RoomsComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
