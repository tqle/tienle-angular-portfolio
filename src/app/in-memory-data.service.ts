import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        const heroes = [
            { id: 1, name: 'Anni Albers' },
            { id: 2, name: 'Josef Albers' },
            { id: 3, name: 'Herbert Bayer' },
            { id: 4, name: 'Marianne Brandt' },
            { id: 5, name: 'Marcel Breuer' },
            { id: 6, name: 'Walter Gropius' },
            { id: 7, name: 'Wassily Kandinsky' },
            { id: 8, name: 'Ludwig Mies van der Rohe' },
            { id: 9, name: 'László Moholy-Nagy' },
            { id: 10, name: 'Marcel Breuer' }
        ];
        const productionDataSets = [
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
          }
        ];
        return {heroes,productionDataSets};
    }
}