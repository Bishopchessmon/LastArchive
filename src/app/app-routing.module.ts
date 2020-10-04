import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './page/common/not-found/not-found.component';
import { HomepageComponent } from './page/homepage/homepage.component';


const routes: Routes = [{
  path: '',
  component: HomepageComponent
}, {
  path: 'home',
  redirectTo: '/',
  pathMatch: 'full',
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
