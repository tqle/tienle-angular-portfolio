import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives her
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// Components
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ProductionDataSetsComponent } from './production-data-sets/production-data-sets.component';
import { ProductionDataDetailComponent } from './production-data-detail/production-data-detail.component';
import { MessagesComponent } from './messages/messages.component';

// Services
import { HeroService } from './hero.service';
import { ProductionDataService } from './production-data.service';
import { MessageService } from './message.service';

// App Routing Module

import { AppRoutingModule } from './/app-routing.module';

// Top Navigation Routed Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { GraphsComponent } from './graphs/graphs.component';
import { BarGraphComponent } from './graphs/bar-graph/bar-graph.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { CardsComponent } from './cards/cards.component';
import { TypographyComponent } from './typography/typography.component';
import { SideDrawerComponent } from './side-drawer/side-drawer.component';
import { RadialProgressIndicatorComponent } from './radial-progress-indicator/radial-progress-indicator.component';
import { BarProgressIndicatorComponent } from './bar-progress-indicator/bar-progress-indicator.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { ThermalBarIndicatorComponent } from './thermal-bar-indicator/thermal-bar-indicator.component';
import { ConcentricRadialIndicatorComponent } from './concentric-radial-indicator/concentric-radial-indicator.component';
import { StarRatingIndicatorComponent } from './star-rating-indicator/star-rating-indicator.component';
import { BatteryIndicatorComponent } from './battery-indicator/battery-indicator.component';
import { BatteryGradedIndicatorComponent } from './battery-graded-indicator/battery-graded-indicator.component';
import { HeartRatingIndicatorComponent } from './heart-rating-indicator/heart-rating-indicator.component';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    ProductionDataSetsComponent,
    ProductionDataDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    GraphsComponent,
    BarGraphComponent,
    StyleGuideComponent,
    CardsComponent,
    TypographyComponent,
    SideDrawerComponent,
    RadialProgressIndicatorComponent,
    BarProgressIndicatorComponent,
    IndicatorsComponent,
    ThermalBarIndicatorComponent,
    ConcentricRadialIndicatorComponent,
    StarRatingIndicatorComponent,
    BatteryIndicatorComponent,
    BatteryGradedIndicatorComponent,
    HeartRatingIndicatorComponent,
    CalculatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    HeroService,
    ProductionDataService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
