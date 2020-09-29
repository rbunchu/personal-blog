import { IHeartRateFormula } from "../heart-rate-formula";
import { PersonData } from "../person-data";
import { PersonType } from '../person-type';


export class SallyEdwardsFormula implements IHeartRateFormula {
  constructor() {
    this.name = 'Sally Edwards'
    this.description = 'Wzór stworzony przez lekkoatletkę Sally Edwards. Najdokładniejszy wzór, błąd w obliczeniach nie przekracza ± 5% Wzór: Mężczyźni 214 - 0.5 × wiek - 0.022 × waga w kg; Kobiety 210 - 0.5 × wiek - 0.022 × waga w kg';
  }

  name: string;
  description: string;

  formula(data: PersonData) : number {
    if(data.personType == PersonType.Male) {
      return 214 - 0.5 * data.age - 0.022 * data.weight;
    } else {
      return 210 - 0.5 * data.age - 0.022 * data.weight;
    }
  }
}
