import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroTableComponent } from './hero-table/hero-table.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroFormComponent } from './hero-form/hero-form.component';




@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroTableComponent,
    HeroDetailComponent,
    
    HeroSearchComponent,
    DashboardComponent,
    HeroFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
     InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
