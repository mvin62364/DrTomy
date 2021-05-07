import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RoutesGuard } from './guards/routes.guard';
import { AuthenticationGuard } from './guards/authentication.guard';
import { WashComponent } from './components/wash/wash.component';

const routes: Routes = [
	{ path: 'authentication', component: AuthenticationComponent, canActivate: [AuthenticationGuard] },
	{ path: 'profile', component: ProfileComponent, canActivate: [RoutesGuard] },
	{ path: 'wash', component: WashComponent },
	{ path: 'home', component: HomeComponent, canActivate: [RoutesGuard] },
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: '404', component: NotfoundComponent },
	{ path: '**', redirectTo: '/404' },
	{ path: 'wash', component: WashComponent },
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
