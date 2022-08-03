import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { HoomeComponent } from './hoome/hoome.component';
import { ProductsComponent } from './products/products.component';
import { StandingsComponent } from './standings/standings.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full' },
  {path: 'home', component:HoomeComponent},
  {path: 'about', component:AboutComponent},
  {path:'achievements',component:AchievementsComponent},
  {path:'products',component:ProductsComponent},
  {path:'media',component:TvComponent},
  {path:'standings',component:StandingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
