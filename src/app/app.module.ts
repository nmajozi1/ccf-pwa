import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimalComponent } from './animal/animal.component';
import { IncidentComponent } from './incident/incident.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { RegisterComponent } from './register/register.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { SideHeaderComponent } from './side-header/side-header.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StoreModule } from '@ngrx/store';
import { reducers, initialState } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalComponent,
    IncidentComponent,
    ReportComponent,
    LoginComponent,
    ReportsComponent,
    RegisterComponent,
    NavHeaderComponent,
    SideHeaderComponent,
    MobileNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {initialState}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
