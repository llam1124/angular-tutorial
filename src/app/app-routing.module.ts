import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
//  imports: [
//   CommonModule
//  ],
//  declarations: []

	imports: [ RouterModule.forRoot(routes) ],

	exports: [ RouterModule ]

})
export class AppRoutingModule { }
