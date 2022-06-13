import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HoomeComponent } from './hoome/hoome.component';
import { ProductsComponent } from './products/products.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { AboutComponent } from './about/about.component';
import { TvComponent } from './tv/tv.component';
import { StandingsComponent } from './standings/standings.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    HoomeComponent,
    ProductsComponent,
    AchievementsComponent,
    AboutComponent,
    TvComponent,
    StandingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
