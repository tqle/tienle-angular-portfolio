import { Component, OnInit, Input } from '@angular/core';
import { ProductionData } from '../productionData';

@Component({
  selector: 'app-production-data-detail',
  templateUrl: './production-data-detail.component.html',
  styleUrls: ['./production-data-detail.component.scss']
})
export class ProductionDataDetailComponent implements OnInit {

  @Input() productionData: ProductionData;

  constructor() { }

  ngOnInit() {
  }

}
