import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './auth.guard';
import { UsersComponent } from './pages/users/users.component';
import { LikesComponent } from './pages/likes/likes.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    {path: '', component: LoginComponent}, // authGuard ile koruma
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]}, // authGuard ile koruma
    {path: 'users', component: UsersComponent, canActivate: [authGuard]}, // authGuard ile koruma
    {path: 'likes', component: LikesComponent, canActivate: [authGuard]}, // authGuard ile koruma
    {path: 'detail/:id', component: ProductDetailComponent, canActivate: [authGuard]}, // authGuard ile koruma
    {path: 'search', component: SearchComponent, canActivate: [authGuard]}, // authGuard ile koruma
    {path: '**', redirectTo: ''} // istenen sayfa yoksa anasayfaya yönlendir
];