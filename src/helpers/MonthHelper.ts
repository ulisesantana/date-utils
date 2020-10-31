import { oneDayInMs } from "helpers/constants";

export class MonthHelper {
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
    const currentMonthHasLessDaysThanNextMonth =
      date.getDate() < nextMonthTotalDays;

    if (diff === nextMonthTotalDays) {
      return new Date(
        date.getTime() + oneDayInMs * MonthHelper.getMonthTotalDays(date)
      );
    }

    if (diff > 0) {
      return new Date(moment.getTime() - oneDayInMs * diff);
    }

    if (diff < 0 && currentMonthHasLessDaysThanNextMonth) {
      return new Date(moment.getTime() + oneDayInMs * diff * -1);
    }

    return moment;
  }

  private static getMonthTotalDays(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  private static getPreviousMonthTotalDays(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  }

  private static getNextMonthTotalDays(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth() + 2, 0).getDate();
  }
}
