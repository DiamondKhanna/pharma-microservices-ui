import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Md2Module } from 'md2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import custom route module....
import { AppRoutingModule } from './app-routing.module';
// Import material module....
import { MaterialModule } from './material.module';

// Custom components import....
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Custom services import....
import { DashboardService } from './dashboard.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Md2Module,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
