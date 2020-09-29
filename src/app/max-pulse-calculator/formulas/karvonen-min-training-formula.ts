import { IHeartRateFormula } from "../heart-rate-formula";
import { PersonData } from "../person-data";
import { PersonType } from '../person-type';


export class KarvonenMinTrainingFormula implements IHeartRateFormula {
  constructor() {
    this.name = 'Karvonen Minimum Training Heart Rate Formula'
    this.description = '';
  }

  name: string;
  description: string;

  formula(data: PersonData) : number {
    if(!data.maxHeartRate) {
      return 0;
    }

    return (220 - data.age - data.restingHeartRate) * 0.60 + data.restingHeartRate;
  }
}
