import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { GraphsComponent } from './graphs/graphs.component';
import { ProductionDataSetsComponent } from './production-data-sets/production-data-sets.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { TypographyComponent } from './typography/typography.component';
import { CardsComponent } from './cards/cards.component';
import { IndicatorsComponent } from './indicators/indicators.component';

//NOTE: Need this for SVG linear gradient paths to work. 
import { APP_BASE_HREF } from '@angular/common';

const routes:Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'graphs', component: GraphsComponent },
  { path: 'cards', component: CardsComponent},
  { path: 'indicators', component: IndicatorsComponent},
  { path: 'productionDataSets', component: ProductionDataSetsComponent },
  { path: 'styleGuide', component: StyleGuideComponent},
  { path: 'typography', component: TypographyComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})

export class AppRoutingModule { }
