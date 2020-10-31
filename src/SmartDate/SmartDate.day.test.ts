import { SmartDate } from "./SmartDate";
import { Day } from "../helpers";

describe("SmartDate should", () => {
  describe("retrieve the next day", () => {
    it("for a regular day", () => {
      expect(new SmartDate("2020-12-10").nextDay().toString()).toBe(
        "2020-12-11T00:00:00.000Z"
      );
      expect(
        new SmartDate("2020-03-18T16:45:30.100Z").nextDay().toString()
      ).toBe("2020-03-19T16:45:30.100Z");
    });

    it("for the last day of the month", () => {
      expect(new SmartDate("2020-11-30").nextDay().toString()).toBe(
        "2020-12-01T00:00:00.000Z"
      );
      expect(
        new SmartDate("2020-03-31T16:45:30.100Z").nextDay().toString()
      ).toBe("2020-04-01T16:45:30.100Z");
    });

    it("for spring daylight savings day change", () => {
      expect(new SmartDate("2020-03-29").nextDay().toString()).toBe(
        "2020-03-30T00:00:00.000Z"
      );
      expect(
        new SmartDate("2020-03-29T12:00:00.000Z").nextDay().toString()
      ).toBe("2020-03-30T12:00:00.000Z");
    });

    it("for autumn daylight savings day change", () => {
      expect(
        new SmartDate("2020-10-25T12:00:00.000Z").nextDay().toString()
      ).toBe("2020-10-26T12:00:00.000Z");
    });
  });

  describe("retrieve the previous day", () => {
    it("for a regular day", () => {
      expect(new SmartDate("2020-12-11").previousDay().toString()).toBe(
        "2020-12-10T00:00:00.000Z"
      );
      expect(
        new SmartDate("2020-03-19T16:45:30.100Z").previousDay().toString()
      ).toBe("2020-03-18T16:45:30.100Z");
    });

    it("for the first day of the month", () => {
      expect(new SmartDate("2020-12-01").previousDay().toString()).toBe(
        "2020-11-30T00:00:00.000Z"
      );
      expect(
        new SmartDate("2020-04-01T16:45:30.100Z").previousDay().toString()
      ).toBe("2020-03-31T16:45:30.100Z");
    });

    it("for spring daylight savings day change", () => {
      expect(new SmartDate("2020-03-30").previousDay().toString()).toBe(
        "2020-03-29T00:00:00.000Z"
      );
      expect(
        new SmartDate("2020-03-30T12:00:00.000Z").previousDay().toString()
      ).toBe("2020-03-29T12:00:00.000Z");
    });

    it("for autumn daylight savings day change", () => {
      expect(
        new SmartDate("2020-10-26T12:00:00.000Z").previousDay().toString()
      ).toBe("2020-10-25T12:00:00.000Z");
      expect(
        new SmartDate("2020-10-25T12:00:00.000Z").previousDay().toString()
      ).toBe("2020-10-24T12:00:00.000Z");
    });
  });

  it("check if a day is a weekend day", () => {
    expect(new SmartDate("2020-10-30").isWeekend()).toBe(false);
    expect(new SmartDate("2020-10-31").isWeekend()).toBe(true);
    expect(new SmartDate("2020-11-01").isWeekend()).toBe(true);
    expect(new SmartDate("2020-11-02").isWeekend()).toBe(false);
  });

  it("retrieve the next weekday", () => {
    expect(new SmartDate("2020-10-29").nextWeekday().date.getDay()).toBe(
      Day.Friday
    );
    expect(new SmartDate("2020-10-30").nextWeekday().date.getDay()).toBe(
      Day.Monday
    );
    expect(new SmartDate("2020-10-31").nextWeekday().date.getDay()).toBe(
      Day.Monday
    );
    expect(new SmartDate("2020-11-01").nextWeekday().date.getDay()).toBe(
      Day.Monday
    );
    expect(new SmartDate("2020-11-02").nextWeekday().date.getDay()).toBe(
      Day.Tuesday
    );
    expect(new SmartDate("2020-11-03").nextWeekday().date.getDay()).toBe(
      Day.Wednesday
    );
    expect(new SmartDate("2020-11-04").nextWeekday().date.getDay()).toBe(
      Day.Thursday
    );
    expect(new SmartDate("2020-11-05").nextWeekday().date.getDay()).toBe(
      Day.Friday
    );
  });

  it("retrieve the previous weekday", () => {
    expect(new SmartDate("2020-10-29").previousWeekday().date.getDay()).toBe(
      Day.Wednesday
    );
    expect(new SmartDate("2020-10-30").previousWeekday().date.getDay()).toBe(
      Day.Thursday
    );
    expect(new SmartDate("2020-10-31").previousWeekday().date.getDay()).toBe(
      Day.Friday
    );
    expect(new SmartDate("2020-11-01").previousWeekday().date.getDay()).toBe(
      Day.Friday
    );
    expect(new SmartDate("2020-11-02").previousWeekday().date.getDay()).toBe(
      Day.Friday
    );
    expect(new SmartDate("2020-11-03").previousWeekday().date.getDay()).toBe(
      Day.Monday
    );
    expect(new SmartDate("2020-11-04").previousWeekday().date.getDay()).toBe(
      Day.Tuesday
    );
    expect(new SmartDate("2020-11-05").previousWeekday().date.getDay()).toBe(
      Day.Wednesday
    );
  });
});
