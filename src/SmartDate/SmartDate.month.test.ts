import { SmartDate } from "./SmartDate";

describe("SmartDate should", () => {
  it("retrieve the next month", () => {
    expect(
      new SmartDate("2020-10-25T12:00:00.000Z").nextMonth().toString()
    ).toBe("2020-11-25T12:00:00.000Z");
    expect(
      new SmartDate("2020-04-15T12:00:00.000Z").nextMonth().toString()
    ).toBe("2020-05-15T12:00:00.000Z");
    expect(
      new SmartDate("2020-10-31T12:00:00.000Z").nextMonth().toString()
    ).toBe("2020-11-30T12:00:00.000Z");
    expect(
      new SmartDate("2020-01-31T12:00:00.000Z").nextMonth().toString()
    ).toBe("2020-02-29T12:00:00.000Z");
    expect(
      new SmartDate("2019-01-31T12:00:00.000Z").nextMonth().toString()
    ).toBe("2019-02-28T12:00:00.000Z");
    expect(
      new SmartDate("2020-01-20T12:00:00.000Z").nextMonth().toString()
    ).toBe("2020-02-20T12:00:00.000Z");
    expect(
      new SmartDate("2020-12-20T12:00:00.000Z").nextMonth().toString()
    ).toBe("2021-01-20T12:00:00.000Z");
  });

  it("retrieve the previous month", () => {
    expect(
      new SmartDate("2020-11-25T12:00:00.000Z").previousMonth().toString()
    ).toBe("2020-10-25T12:00:00.000Z");
    expect(
      new SmartDate("2020-05-15T12:00:00.000Z").previousMonth().toString()
    ).toBe("2020-04-15T12:00:00.000Z");
    expect(
      new SmartDate("2020-11-30T12:00:00.000Z").previousMonth().toString()
    ).toBe("2020-10-30T12:00:00.000Z");
    expect(
      new SmartDate("2020-02-20T12:00:00.000Z").previousMonth().toString()
    ).toBe("2020-01-20T12:00:00.000Z");
    expect(
      new SmartDate("2021-01-20T12:00:00.000Z").previousMonth().toString()
    ).toBe("2020-12-20T12:00:00.000Z");
    expect(
      new SmartDate("2020-03-31T12:00:00.000Z").previousMonth().toString()
    ).toBe("2020-02-29T12:00:00.000Z");
    expect(
      new SmartDate("2019-03-31T12:00:00.000Z").previousMonth().toString()
    ).toBe("2019-02-28T12:00:00.000Z");
  });
});
