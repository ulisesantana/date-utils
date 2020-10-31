import { DayHelper, MonthHelper } from "helpers";

export class SmartDate {
  private readonly _date: Date;

  constructor(date: Date | string | number) {
    this._date = new Date(date);
  }

  static create(date: Date | string | number): SmartDate {
    return new SmartDate(date);
  }

  get date(): Date {
    return new Date(this._date);
  }

  isWeekend(): boolean {
    return DayHelper.isWeekend(this.date);
  }

  previousDay(): SmartDate {
    return SmartDate.create(DayHelper.previous(this.date));
  }

  nextDay(): SmartDate {
    return SmartDate.create(DayHelper.next(this.date));
  }

  previousMonth(): SmartDate {
    return SmartDate.create(MonthHelper.previous(this.date));
  }

  nextMonth(): SmartDate {
    return SmartDate.create(MonthHelper.next(this.date));
  }

  toString(): string {
    return this.date.toISOString();
  }
}
