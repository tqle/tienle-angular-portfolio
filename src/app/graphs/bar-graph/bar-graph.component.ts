import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
})
export class BarGraphComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() graphDirectionStyles: string;
  @Input() graphStyles: string;
  @Input() dataSet: Array<number>;
  @Input() isVertical: boolean = true;
  //TODO: make data either coming in as @Input to be generic instead of being set here
  // dataSet:Array<number> = [];

  constructor() {

  }

  ngOnInit() {
    //MOCK DATA - TODO: Make this a mock service
    // this.dataSet = [10,20,30,40,50,60,70];
    // this.dataSet = [10,20,70,40,50,60,20];
  }

}
