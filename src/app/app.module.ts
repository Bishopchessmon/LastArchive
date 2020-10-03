import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './module/material-module/material-module.module';
import { NavbarComponent } from './page/common/navbar/navbar.component';
import { FooterComponent } from './page/common/footer/footer.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { AboutComponent } from './page/about/about.component';
import { ProjectsComponent } from './page/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
