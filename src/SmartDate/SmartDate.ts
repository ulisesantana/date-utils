import { DayHelper, MonthHelper } from "helpers";

export class SmartDate {
  private readonly date: Date;

  constructor(date: Date | string | number) {
    this.date = new Date(date);
  }

  static create(date: Date | string | number): SmartDate {
    return new SmartDate(date);
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
