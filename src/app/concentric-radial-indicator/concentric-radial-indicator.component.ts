import { Component, OnInit, Input } from '@angular/core';

import { CircumferenceUtil } from '../radial-progress-indicator/circumference_util';


@Component({
  selector: 'app-concentric-radial-indicator',
  templateUrl: './concentric-radial-indicator.component.html',
  styleUrls: ['./concentric-radial-indicator.component.scss']
})
export class ConcentricRadialIndicatorComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;

  @Input() meterColor: string;
  @Input() valueColor1: string;
  @Input() valueColor2: string;
  @Input() capStyle: string;
  @Input() strokeDashOffset: number;
  @Input() innerStrokeDashOffset: number;

  @Input() canAnimate: boolean;

  constructor() { }

  ngOnInit() {
  }

 /**
   * Converts value or degrees into the proper dash offset for the progress indicator
   * @param value
   */
  calculateProgress(value: number): number {
    // TODO: Check value if value > 100, 0 or null
    const progress =  value / 100;
    const dashoffset = CircumferenceUtil.CIRCUMFERENCE * (1 - progress);
    return dashoffset;
  }

}
