import { Component, OnInit } from '@angular/core';
import { IHeartRateFormula } from './heart-rate-formula';
import { HeartRateZone } from './heart-rate-zone';
import { PersonData } from './person-data';
import { PersonType } from './person-type';
import { SallyEdwardsFormula } from './formulas/sally-edwards-formula';
import { WinfriedSpanausFormula } from './formulas/winfried-spanaus-formula';
import { FormBuilder, Validators} from '@angular/forms';
import { KarvonenMinTrainingFormula } from './formulas/karvonen-min-training-formula';
import { KarvonenMaxTrainingFormula } from './formulas/karvonen-max-training-formula';


@Component({
  selector: 'app-max-pulse-calculator',
  templateUrl: './max-pulse-calculator.component.html',
  styleUrls: ['./max-pulse-calculator.component.sass']
})

export class MaxPulseCalculatorComponent implements OnInit {

  heartRateFormulas : IHeartRateFormula[] = [];
  heartRateZones: HeartRateZone[] = [];
  personData: PersonData = new PersonData();
  showResult: boolean = false;
  minTraining: number;
  maxTraining: number;

  calculatorForm = this.fb.group({
    age: ['', Validators.required],
    weight: ['', Validators.required],
    personType: [''],
    heartRateFormula: [''],
    restingHeartRate: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {  }

  ngOnInit(): void {
    this.heartRateFormulas.push(new SallyEdwardsFormula());
    this.heartRateFormulas.push(new WinfriedSpanausFormula());

    this.heartRateZones.push(new HeartRateZone('maximum', 90, 100, 'Maximum', 'Develops maximum performance and speed', 'Heart rate zone 5 is your maximal effort. Your heart and your blood and respiratory system will be working at their maximal capacity. Lactic acid will build up in your blood and after a few minutes you won’t be able to continue at this intensity. If you’re just starting out or have only been training for some time, you probably won’t have to train at this intensity. If you’re a professional athlete, look into incorporating interval training into your training plan for peak performance.', 'zone-red'));
    this.heartRateZones.push(new HeartRateZone('hard', 80, 90, 'Hard', 'Increases maximum performance capacity', 'Heart rate zone 4 is where the going gets tough. You’ll be breathing hard and working aerobically. If you train at this intensity, you’ll improve your speed endurance. Your body will get better at using carbohydrates for energy and you’ll be able to withstand higher levels of lactic acid in your blood for longer.', 'zone-yellow'));
    this.heartRateZones.push(new HeartRateZone('moderate', 70, 80, 'Moderate', 'Improves aerobic fitness', 'Working out in heart rate zone 3 is especially effective for improving the efficiency of blood circulation in the heart and skeletal muscles. This is the zone in which that pesky lactic acid starts building up in your bloodstream. Training in this HR zone will make moderate efforts easier and improve your efficiency.', 'zone-green'));
    this.heartRateZones.push(new HeartRateZone('low', 60, 70, 'Light', 'Improves basic endurance and fat burning', 'Exercising in heart rate zone 2 feels light and you should be able to go on for a long time at this intensity.This is the zone that improves your general endurance: your body will get better at oxidizing – burning – fat and your muscular fitness will increase along with your capillary density. Training in heart rate zone 2 is an essential part of every exercise program. Keep at it and you’ll reap the benefits later.', 'zone-blue'));
    this.heartRateZones.push(new HeartRateZone('very-low', 50, 60, 'Very light', 'Improves overall health and helps recovery', 'This is the very low intensity zone. Training at this intensity will boost your recovery and get you ready to train in the higher heart rate zones. To train at this intensity, pick a form of exercise that allows you to easily control your heart rate, such as walking or cycling.', 'zone-grey'));

    this.personData.personType = PersonType.Male;

    this.calculatorForm.patchValue({
      heartRateFormula: this.heartRateFormulas[0].name,
      personType: PersonType.Male
    });
  }

  calculateButtonClick() {
    let formula: IHeartRateFormula = this.heartRateFormulas.find(element => element.name === this.calculatorForm.get('heartRateFormula').value);

    if(!formula || this.calculatorForm.invalid) {
      //show to user error that something is wrong
      return;
    }

    this.personData.age = this.calculatorForm.get('age').value;
    this.personData.personType = this.calculatorForm.get('personType').value;
    this.personData.restingHeartRate = this.calculatorForm.get('restingHeartRate').value;
    this.personData.weight = this.calculatorForm.get('weight').value;

    this.personData.maxHeartRate = Math.round(formula.formula(this.personData));
    let minTrainingFormula : IHeartRateFormula = new KarvonenMinTrainingFormula();
    let maxTrainingFormula : IHeartRateFormula = new KarvonenMaxTrainingFormula();

    this.minTraining = Math.round(minTrainingFormula.formula(this.personData));
    this.maxTraining = Math.round(maxTrainingFormula.formula(this.personData));
    this.showResult = true;
  }

  backButtonClick() {
    this.showResult = false;
  }

  get form() {
    return this.calculatorForm.controls;
  }
}
