import { PersonData } from './person-data';

type FormulaFunctionType = (data: PersonData) => number;

export interface IHeartRateFormula {
  name: string;
  description: string;
  formula: FormulaFunctionType;
}
