import { Component, OnInit, Input } from '@angular/core';
import { CIRCUMFERENCE_CONST } from './circumference_util';

@Component({
  selector: 'app-radial-progress-indicator',
  templateUrl: './radial-progress-indicator.component.html',
  styleUrls: ['./radial-progress-indicator.component.scss']
})

export class RadialProgressIndicatorComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  
  @Input() meterColor: string;
  @Input() valueColor: string;
  @Input() capStyle: string;
  @Input() strokeDashOffset: number;
  @Input() canAnimate: boolean;
 
  constructor() { }

  ngOnInit() {
  }

  /**
   * Converts value or degrees into the proper dash offset for the progress indicator
   * @param value 
   */
  calculateProgress(value:number):number{
    //TODO: Check value if value > 100, 0 or null
    let progress =  value / 100;
    let dashoffset = CIRCUMFERENCE_CONST.circumference * (1 - progress);
    return dashoffset;
  }

  /**
   * TODO: Doesn't work
   * @param aStyle D
   */
  showLineCapStyle(aStyle:string): string{
    switch(aStyle){
      case 'ROUND': return "progress_linecap_round";
      case 'SQUARE': return "progress_linecap_square";
      case 'BUTT': return "progress-linecap-butt";
      default: return "";
    }
  }

  /**
   * TODO: Doesn't work
   */
  showAnimation(isAnimated:boolean): string{
    return (this.canAnimate) ? "animated_progress_value" : "";
  }
}
