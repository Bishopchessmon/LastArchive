import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { MaintenanceComponent } from './page/common/maintenance/maintenance.component';
import { NotFoundComponent } from './page/common/not-found/not-found.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { OthersComponent } from './page/others/others.component';
import { ProjectsComponent } from './page/projects/projects.component';


const routes: Routes = [{
  path: '',
  component: HomepageComponent
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: 'projects',
  component: ProjectsComponent
}, {
  path: 'others',
  component: OthersComponent
}, {
  path: 'home',
  redirectTo: '/',
  pathMatch: 'full',
}, {
  path: 'under-maintenance',
  component: MaintenanceComponent
}, { 
  path: 'not-found', 
  component: NotFoundComponent
}, { 
  path: '**', 
  component: NotFoundComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
