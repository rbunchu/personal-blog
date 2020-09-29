export class HeartRateZone {
  icon: string;
  heartRateLowPercent: number;
  heartRateHighPercent: number;
  zone: string;
  descriptionMerits: string;
  descriptionFeelings: string;
  cssClass: string;

  constructor(icon: string, heartRateLowPercent: number, heartRateHighPercent: number, zone: string, descriptionMerits: string, descriptionFeelings: string, cssClass?: string) {
    this.icon = icon;
    this.heartRateLowPercent = heartRateLowPercent;
    this.heartRateHighPercent = heartRateHighPercent;
    this.zone = zone;
    this.descriptionMerits = descriptionMerits;
    this.descriptionFeelings = descriptionFeelings;
    this.cssClass = cssClass;
  }

  zoneDescription(maxHearRate: number) {
    let heartReateLow = Math.round(this.heartRateLowPercent / 100 * maxHearRate);
    let heartReateHigh = Math.round(this.heartRateHighPercent / 100 * maxHearRate);
    return `${heartReateLow } to ${heartReateHigh}`;
  }
}
