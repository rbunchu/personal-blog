import { IHeartRateFormula } from "../heart-rate-formula";
import { PersonData } from "../person-data";
import { PersonType } from '../person-type';


export class WinfriedSpanausFormula implements IHeartRateFormula {
  constructor() {
    this.name = 'Winfried Spanaus'
    this.description = 'Wzór opracowany w 2000 roku przez Winfried Spanaus na próbie 600 badanych. Wzór przeznaczony głównie dla sportowców. Błąd w wyliczeniach wynosi ± 10 uderzeń na minutę. Wzór: Mężczyźni 223 - 0.9 × wiek; Kobiety 226 - 0.9 × wiek.';
  }

  name: string;
  description: string;

  formula(data: PersonData) : number {
    if(data.personType == PersonType.Male) {
      return 223 - 0.9 * data.age;
    } else {
      return 226 - 0.9 * data.age;
    }
  }
}
