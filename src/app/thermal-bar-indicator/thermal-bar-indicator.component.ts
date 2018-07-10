import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thermal-bar-indicator',
  templateUrl: './thermal-bar-indicator.component.html',
  styleUrls: ['./thermal-bar-indicator.component.scss']
})

export class ThermalBarIndicatorComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;

  @Input() meterColor: string;
  @Input() valueColor: string;
  @Input() startGradientColor: string;
  @Input() endGradientColor: string;

  @Input() strokeDashArray: number;
  @Input() strokeDashOffset: number;
  
  ngOnInit() {
  }

  /**
   * Calculate bar progress indicator by value and total length
   */
  calculateProgress(value:number, length: number):number{
    let progress = length - (length * ((100 - value) /100));
    return progress;
  }

  calculatePercentage():number{
    return 100 - this.strokeDashOffset;
  }

  showRemainingPercentage():string{
    return "Remaining Percentage: "+ this.calculatePercentage() + " %";
  }

  showActualPercentage():string{
    return "Actual Percentage: "+ this.strokeDashOffset + " %";
  }
}
