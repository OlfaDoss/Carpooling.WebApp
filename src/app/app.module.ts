import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import {LocationStrategy, HashLocationStrategy } from '@angular/common';
import {Ng2PaginationModule} from 'ng2-pagination';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarpoolService } from './carpool.service';
import { ListCarpoolsComponent } from './list-carpools/list-carpools.component';
import { AddCarpoolComponent } from './add-carpool/add-carpool.component';
import { EditCarpoolComponent } from './edit-carpool/edit-carpool.component';
import { SearchCarpoolComponent } from './search-carpool/search-carpool.component';
import { DetailCarpoolComponent } from './detail-carpool/detail-carpool.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListCarpoolsComponent,
    AddCarpoolComponent,
    EditCarpoolComponent,
    SearchCarpoolComponent,
    DetailCarpoolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    Ng2PaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CarpoolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
