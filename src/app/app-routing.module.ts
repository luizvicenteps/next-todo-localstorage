import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsBrComponent } from './pages/news-br/news-br.component';
import { NewsUsComponent } from './pages/news-us/news-us.component';
import { StarWarsPeopleComponent } from './pages/star-wars-people/star-wars-people.component';
import { StarWarsPlanetsComponent } from './pages/star-wars-planets/star-wars-planets.component';
import { StarWarsStarshipsComponent } from './pages/star-wars-starships/star-wars-starships.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [];
const rotas: Routes = [

  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent
  },

  {
    path: 'tarefas',
    component: TodoComponent
  },
  {
    path: 'noticias-br',
    component: NewsBrComponent
  },
  {
    path: 'noticias-us',
    component: NewsUsComponent
  },
  {
    path: 'star-wars-pessoas',
    component: StarWarsPeopleComponent
  },
  {
    path: 'star-wars-naves',
    component: StarWarsStarshipsComponent
  },
  {
    path: 'star-wars-planetas',
    component: StarWarsPlanetsComponent
  },
  {
    path: 'sobre',
    component: AboutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
