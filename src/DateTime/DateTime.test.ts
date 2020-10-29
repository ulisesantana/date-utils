import { DateTime } from "./DateTime";

describe("DateTime should", () => {
  describe("be instantiated based on", () => {
    it("a Date", () => {
      expect(new DateTime(new Date())).toBeInstanceOf(DateTime);
    });

    it("a string", () => {
      expect(new DateTime("2020-12-10")).toBeInstanceOf(DateTime);
    });

    it("a number of milliseconds", () => {
      expect(new DateTime(1600000000)).toBeInstanceOf(DateTime);
    });
  });

  describe("retrieve the next day", () => {
    it("for a regular day", () => {
      expect(new DateTime("2020-12-10").nextDay().toString()).toBe(
        "2020-12-11T00:00:00.000Z"
      );
      expect(
        new DateTime("2020-03-18T16:45:30.100Z").nextDay().toString()
      ).toBe("2020-03-19T16:45:30.100Z");
    });

    it("for spring daylight savings day change", () => {
      expect(new DateTime("2020-03-29").nextDay().toString()).toBe(
        "2020-03-30T00:00:00.000Z"
      );
      expect(
        new DateTime("2020-03-29T12:00:00.000Z").nextDay().toString()
      ).toBe("2020-03-30T12:00:00.000Z");
    });

    it("for autumn daylight savings day change", () => {
      expect(
        new DateTime("2020-10-25T12:00:00.000Z").nextDay().toString()
      ).toBe("2020-10-26T12:00:00.000Z");
    });
  });

  it("retrieve the next month", () => {
    expect(
      new DateTime("2020-10-25T12:00:00.000Z").nextMonth().toString()
    ).toBe("2020-11-25T12:00:00.000Z");
    expect(
      new DateTime("2020-04-15T12:00:00.000Z").nextMonth().toString()
    ).toBe("2020-05-15T12:00:00.000Z");
    expect(
      new DateTime("2020-10-31T12:00:00.000Z").nextMonth().toString()
    ).toBe("2020-11-30T12:00:00.000Z");
    expect(
      new DateTime("2020-01-20T12:00:00.000Z").nextMonth().toString()
    ).toBe("2020-02-20T12:00:00.000Z");
    expect(
      new DateTime("2020-12-20T12:00:00.000Z").nextMonth().toString()
    ).toBe("2021-01-20T12:00:00.000Z");
  });
});
