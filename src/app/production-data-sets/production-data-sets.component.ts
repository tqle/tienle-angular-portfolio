import { Component, OnInit, Input } from '@angular/core';
import { ProductionData } from '../productionData';

// Test Import mock production data
// import { PRODUCTION_DATA_SET } from '../mock-productionDataSets';

//Import Service
import { ProductionDataService } from '../production-data.service';

@Component({
  selector: 'app-production-data-sets',
  templateUrl: './production-data-sets.component.html',
  styleUrls: ['./production-data-sets.component.scss']
})

export class ProductionDataSetsComponent implements OnInit {
  //Test mock data
  //productionDataSets = PRODUCTION_DATA_SET;
 
 //Production Data Set Declaration to set by service
  productionDataSets:ProductionData[];

  //Selected Production Data
  selectedProductionData:ProductionData;

  constructor(private productionDataService:ProductionDataService) { }

  ngOnInit() {
    this.getProductionDataSets();
  }
  
  //Get Production Data Sets from service
  getMockProductionDataSets():void {
    // this.productionDataSets = this.productionDataService.getProductionDataSets();
    this.productionDataService.getMockProductionDataSets()
    .subscribe(productionDataSets => this.productionDataSets = productionDataSets);
  }

   /** Get Heroes from service of mock data */
  getProductionDataSets():void{
    this.productionDataService.getProductionDataSets()
      .subscribe(productionDataSets => this.productionDataSets = productionDataSets);
  }

  /** Add Production Data */
  add(value: number, unit: string, factory: string): void {
    if(!value) { return; }
    if(!unit) { return; }
    if(!factory) { return; }
    this.productionDataService.addProductionData({ value,unit,factory } as ProductionData)
      .subscribe(productionData => { 
        this.productionDataSets.push(productionData);
      });
  }

  /** Delete Production Data */
  delete(productionData:ProductionData): void {
    this.productionDataSets = this.productionDataSets.filter(h => h !== productionData);
    this.productionDataService.deleteProductionData(productionData).subscribe();
  }

  /** Selected Production Data  */
  onSelect(productionData:ProductionData): void{
    this.selectedProductionData = productionData;
  }

 /**
  * Return the total number or count of all widget types by production data.
  * @param productionData Return 
  */
  getTotalWidgets(productionData:ProductionData):number{
    let totalWidgets = 0;
    if(productionData && productionData.widgets){
      if(productionData.widgets.blue) totalWidgets += productionData.widgets.blue;
      if(productionData.widgets.red) totalWidgets += productionData.widgets.red;
      if(productionData.widgets.green) totalWidgets += productionData.widgets.green;
      if(productionData.widgets.yellow) totalWidgets += productionData.widgets.yellow;
    }
    return totalWidgets;
  }

  /**
   * Return the Widget Style based on color of widget based on production data
   * @param productionData 
   * @param color 
   */
  showWidgetsStyle(productionData:ProductionData,color:String):string{
    switch(color){
      case 'BLUE': 
        return (productionData.widgets && productionData.widgets.blue > 0) ? 'blueWidgets' : 'zeroBlueWidgets';
      case 'RED':
        return (productionData.widgets && productionData.widgets.red > 0) ? 'redWidgets' : 'zeroRedWidgets';
      case 'GREEN':
        return (productionData.widgets && productionData.widgets.green > 0) ? 'greenWidgets' : 'zeroGreenWidgets';
      case 'YELLOW':
        return (productionData.widgets && productionData.widgets.yellow > 0) ? 'yellowWidgets' : 'zeroYellowWidgets';
    }
  }

  /**
   * Return the Widget Size or count based on color of widget based on production data
   * @param productionData 
   * @param color 
   */
  showWidgetsSize(productionData:ProductionData,color:String):number{
    switch(color){
      case 'BLUE': 
        return (productionData.widgets && productionData.widgets.blue > 0) ? productionData.widgets.blue : 0;
      case 'RED':
        return (productionData.widgets && productionData.widgets.red > 0) ? productionData.widgets.red: 0;
      case 'GREEN':
        return (productionData.widgets && productionData.widgets.green > 0) ? productionData.widgets.green : 0;
      case 'YELLOW':
        return (productionData.widgets && productionData.widgets.yellow > 0) ? productionData.widgets.yellow : 0;
    }
  }

}
