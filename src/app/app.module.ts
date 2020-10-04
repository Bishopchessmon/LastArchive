import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './module/material-module/material-module.module';
import { NavbarComponent } from './page/common/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterComponent } from './page/common/footer/footer.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { AboutComponent } from './page/about/about.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { NotFoundComponent } from './page/common/not-found/not-found.component';
import { MaintenanceComponent } from './page/common/maintenance/maintenance.component';
import { OthersComponent } from './page/others/others.component';
import { TodoListComponent } from './page/projects/todo-list/todo-list.component';
import { CharactersListComponent } from './page/projects/characters-list/characters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    ProjectsComponent,
    NotFoundComponent,
    MaintenanceComponent,
    OthersComponent,
    TodoListComponent,
    CharactersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
