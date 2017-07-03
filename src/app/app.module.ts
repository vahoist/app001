import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { boldDirective } from './directives/bold.directives';
import { whileDirective } from './directives/while.directives';

import { FactorialPipe } from './pipes/factorial.pipe';

import { UserService } from './services/user.services';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthorizationComponent } from './Authorization/Authorization.component';

import { AppRoutingModule } from './modules/routing.module';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    boldDirective,
    whileDirective,
    FactorialPipe,
    ContactUsComponent,
    CatalogComponent,
    NotFoundComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , AppRoutingModule
    , ReactiveFormsModule
    , BrowserAnimationsModule

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
