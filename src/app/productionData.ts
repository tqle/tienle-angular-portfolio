import { Widgets } from './widgets';

export interface ProductionData {
    // time: string;
    // hours_ago: number;
    // minutes_ago: number;
    // widgets: object;
    id: number;
    value: number;
    unit: string;
    factory: string;
    widgets: Widgets;
}
