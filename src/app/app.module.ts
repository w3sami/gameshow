import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfig } from './firebase.config';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { GameComponent } from './game/game.component';
import { HostComponent } from './host/host.component';
import { PlayerComponent } from './player/player.component';
import { AppRoutingModule } from './app-routing.module';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HostComponent,
    PlayerComponent,
    ScoreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: window.location.pathname === '/c4/' ? '/c4/' : '/',
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
