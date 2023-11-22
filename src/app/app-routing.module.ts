import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { GameComponent } from './game/game.component';
import { HostComponent } from './host/host.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'host', component: HostComponent },
  { path: 'player', component: PlayerComponent },
  { path: '', redirectTo: '/game', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
