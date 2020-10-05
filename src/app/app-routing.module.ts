import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { MaintenanceComponent } from './page/common/maintenance/maintenance.component';
import { NotFoundComponent } from './page/common/not-found/not-found.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { OthersComponent } from './page/others/others.component';
import { CharacterListComponent } from './page/projects/character-list/character-list.component';
import { ProjectListComponent } from './page/projects/project-list/project-list.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { TodoListComponent } from './page/projects/todo-list/todo-list.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent,
}, {
  path: 'about',
  component: AboutComponent,
}, {
  path: 'project',
  component: ProjectsComponent,
  children: [{
    path: '',
    component: ProjectListComponent,
  }, {
    path: 'character-list',
    component: CharacterListComponent, 
  }, { 
    path: 'todo-list',
    component: TodoListComponent,
  }, { 
    path: 'guild-list',
    component: MaintenanceComponent,
  }, {
    path: 'project-list',
    redirectTo: '',
    pathMatch: 'full'
  }, {
    path: 'recent',
    redirectTo: '',
    pathMatch: 'full',
  }, { 
    path: '**', 
    component: ProjectListComponent,
  }],
}, {
  path: 'others',
  component: OthersComponent,
}, {
  path: 'home',
  redirectTo: '/',
  pathMatch: 'full',
}, { 
  path: '**', 
  component: NotFoundComponent,
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
