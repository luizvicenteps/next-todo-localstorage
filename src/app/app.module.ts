import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { NewsBrComponent } from './pages/news-br/news-br.component';
import { NewsUsComponent } from './pages/news-us/news-us.component';
import { StarWarsPeopleComponent } from './pages/star-wars-people/star-wars-people.component';
import { StarWarsStarshipsComponent } from './pages/star-wars-starships/star-wars-starships.component';
import { StarWarsPlanetsComponent } from './pages/star-wars-planets/star-wars-planets.component';
import { AboutComponent } from './pages/about/about.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertDialog } from './shared/alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BreadcrumbsComponent,
    FooterComponent,
    HomeComponent,
    TodoComponent,
    NewsBrComponent,
    NewsUsComponent,
    StarWarsPeopleComponent,
    StarWarsStarshipsComponent,
    StarWarsPlanetsComponent,
    AboutComponent,
    AlertDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ],
  exports: [MatDialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
