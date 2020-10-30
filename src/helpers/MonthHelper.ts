import { oneDayInMs } from "helpers/constants";

export class MonthHelper {
  static January = 0;
  static February = 1;
  static March = 2;
  static April = 3;
  static May = 4;
  static June = 5;
  static July = 6;
  static August = 7;
  static September = 8;
  static October = 9;
  static November = 10;
  static December = 11;

  static previous(date: Date): Date {
    const previousMonthTotalDays = MonthHelper.getPreviousMonthTotalDays(date);
    const moment = new Date(
      date.getTime() - oneDayInMs * previousMonthTotalDays
    );

    const diff = date.getDate() - moment.getDate();
    const monthNeedsAdjustment = diff === previousMonthTotalDays;

    if (monthNeedsAdjustment) {
      return new Date(moment.getTime() - oneDayInMs * moment.getDate());
    }

    return moment;
  }

  static next(date: Date): Date {
    const nextMonthTotalDays = MonthHelper.getNextMonthTotalDays(date);
    const moment = new Date(date.getTime() + oneDayInMs * nextMonthTotalDays);

    const diff = moment.getDate() - date.getDate();
    const nextMonthHasLessDays = date.getDate() < nextMonthTotalDays;

    if (diff > 0) {
      return new Date(moment.getTime() - oneDayInMs * diff);
    }

    if (diff < 0 && nextMonthHasLessDays) {
      return new Date(moment.getTime() + oneDayInMs * diff * -1);
    }

    return moment;
  }

  private static getPreviousMonthTotalDays(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  }

  private static getNextMonthTotalDays(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth() + 2, 0).getDate();
  }
}
