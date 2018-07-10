import { ProductionData } from './productionData';

//Mock Production Data
export const PRODUCTION_DATA_SET: ProductionData[] = [
  { 
    id: 1,
    value: 5,
    unit: 'Hours',
    factory: 'Primary',
    widgets: {
      "blue": 1,
      "red": 5,
      "green": 4,
      "yellow": 2
    }
  },
  {
    id: 2,
    value: 350,
    unit: 'Minutes',
    factory: 'Secondary',
    widgets: {
      "blue": 0,
      "red": 0,
      "green": 1,
      "yellow": 7
    }
  },
  { 
    id: 3,  
    value: 6,
    unit: 'Hours',
    factory: 'Primary',
    widgets: {   
      "blue": 3,
      "red": 8,
      "green": 1,
      "yellow": 1
    }
  },
  {
    id: 4,
    value: 150,
    unit: 'Minutes',
    factory: 'Secondary',
    widgets: {
      "blue": 10,
      "red": 3,
      "green": 0,
      "yellow": 10
    }
  },
];
// export const PRODUCTION_DATA_SET: ProductionData[] = [
//     {
//       time: "12:01:00",
//       hours_ago: 6,
//       minutes_ago: 359,
//       factory: "Primary",
//       widgets: {
//         "blue": 4,
//         "red": 3,
//         "green": 0,
//         "yellow": 9
//       }
//     },
//     {
//       time: "12:35:00",
//       hours_ago: 6,
//       minutes_ago: 325,
//       factory: "Secondary",
//       widgets: {
//         "blue": 1,
//         "red": 5,
//         "green": 4,
//         "yellow": 2
//       }
//     },
//     {
//       time: "14:10:00",
//       hours_ago: 4,
//       minutes_ago: 230,
//       factory: "Primary",
//       widgets: {
//         "blue": 0,
//         "red": 0,
//         "green": 1,
//         "yellow": 7
//       }
//     },
//     {
//       time: "17:37:00",
//       hours_ago: 1,
//       minutes_ago: 23,
//       factory: "Secondary",
//       widgets: {
//         "blue": 3,
//         "red": 8,
//         "green": 1,
//         "yellow": 1
//       }
//     },
//     {
//       time: "17:57:00",
//       hours_ago: 1,
//       minutes_ago: 3,
//       factory: "Primary",
//       widgets: {
//         "blue": 0,
//         "red": 3,
//         "green": 0,
//         "yellow": 0
//       }
//     }
//   ];