import { Day, oneDayInMs, oneHourInMs } from "helpers";

export class DayHelper {
  static isWeekend(date: Date): boolean {
    const weekday = date.getDay();
    return weekday === Day.Saturday || weekday === Day.Sunday;
  }

  static previous(date: Date): Date {
    const moment = new Date(date);
    moment.setDate(moment.getDate() - 1);

    const diff = date.getTime() - moment.getTime();
    if (diff > oneDayInMs) {
      return new Date(moment.getTime() + oneHourInMs);
    }

    if (diff < oneDayInMs) {
      return new Date(moment.getTime() - oneHourInMs);
    }

    return moment;
  }

  static previousWeekday(date: Date): Date {
    const moment = DayHelper.previous(date);

    if (DayHelper.isWeekend(moment)) {
      return DayHelper.previousWeekday(moment);
    }

    return moment;
  }

  static next(date: Date): Date {
    const moment = new Date(date);
    moment.setDate(moment.getDate() + 1);

    const diff = moment.getTime() - date.getTime();

    if (diff < oneDayInMs) {
      return new Date(moment.getTime() + oneHourInMs);
    }

    return moment;
  }

  static nextWeekday(date: Date): Date {
    const moment = DayHelper.next(date);

    if (DayHelper.isWeekend(moment)) {
      return DayHelper.nextWeekday(moment);
    }

    return moment;
  }
}
