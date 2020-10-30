export class DateTime {
  private readonly date: Date;
  private readonly oneDayInMs = 86400000;
  private readonly oneHourInMs = 3600000;

  constructor(date: Date | string | number) {
    this.date = new Date(date);
  }

  static create(date: Date | string | number): DateTime {
    return new DateTime(date);
  }

  previousDay(): DateTime {
    const moment = DateTime.create(this.date);
    moment.date.setDate(moment.date.getDate() - 1);

    const diff = this.date.getTime() - moment.date.getTime();
    if (diff > this.oneDayInMs) {
      return DateTime.create(moment.date.getTime() + this.oneHourInMs);
    }

    if (diff < this.oneDayInMs) {
      return DateTime.create(moment.date.getTime() - this.oneHourInMs);
    }

    return moment;
  }

  nextDay(): DateTime {
    const moment = DateTime.create(this.date);
    moment.date.setDate(moment.date.getDate() + 1);

    const diff = moment.date.getTime() - this.date.getTime();
    if (diff > this.oneDayInMs) {
      return DateTime.create(moment.date.getTime() - this.oneHourInMs);
    }

    if (diff < this.oneDayInMs) {
      return DateTime.create(moment.date.getTime() + this.oneHourInMs);
    }

    return moment;
  }

  previousDay(): DateTime {
    const moment = DateTime.create(this.date);
    moment.date.setDate(moment.date.getDate() - 1);

    const diff = this.date.getTime() - moment.date.getTime();
    if (diff > this.oneDayInMs) {
      return DateTime.create(moment.date.getTime() + this.oneHourInMs);
    }

    if (diff < this.oneDayInMs) {
      return DateTime.create(moment.date.getTime() - this.oneHourInMs);
    }

    return moment;
  }

  nextMonth(): DateTime {
    const nextMonthTotalDays = this.getNextMonthTotalDays();
    const moment = DateTime.create(
      this.date.getTime() + this.oneDayInMs * nextMonthTotalDays
    );

    const diff = moment.date.getDate() - this.date.getDate();
    const nextMonthHasLessDays = this.date.getDate() < nextMonthTotalDays;

    if (diff > 0) {
      return DateTime.create(moment.date.getTime() - this.oneDayInMs * diff);
    }

    if (diff < 0 && nextMonthHasLessDays) {
      return DateTime.create(
        moment.date.getTime() + this.oneDayInMs * diff * -1
      );
    }

    return moment;
  }

  toString(): string {
    return this.date.toISOString();
  }

  private getNextMonthTotalDays(): number {
    return new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 2,
      0
    ).getDate();
  }
}
