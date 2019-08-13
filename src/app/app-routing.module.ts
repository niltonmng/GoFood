import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './foods/foods.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'fooddetail/0', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'herodetail/0', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fooddetail/:id', component: FoodDetailComponent },
  { path: 'foods', component: FoodsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
