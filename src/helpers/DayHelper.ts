import { oneDayInMs, oneHourInMs } from "helpers/constants";

export class DayHelper {
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

  static next(date: Date): Date {
    const moment = new Date(date);
    moment.setDate(moment.getDate() + 1);

    const diff = moment.getTime() - date.getTime();

    if (diff < oneDayInMs) {
      return new Date(moment.getTime() + oneHourInMs);
    }

    return moment;
  }
}
