import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { NotFoundComponent } from './page/common/not-found/not-found.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { OthersComponent } from './page/others/others.component';
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
    component: TodoListComponent,
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
