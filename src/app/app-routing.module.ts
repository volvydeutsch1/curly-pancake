import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CounterComponent } from './views/counter/counter.component';
import {RandomDadJokeComponent} from './views/random-dad-joke/random-dad-joke.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'random-dad-joke', component: RandomDadJokeComponent},
  {path: '**', pathMatch: 'full', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
