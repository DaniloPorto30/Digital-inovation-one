import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Frontend/template/home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './Frontend/template/footer/footer.component';
import { HeaderComponent } from './Frontend/template/header/header.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import { AboutComponent } from './Frontend/template/about/about.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SelectionComponent } from './Frontend/template/selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatProgressBarModule,
    MatStepperModule,
    MatExpansionModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{



 }
