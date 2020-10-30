import { SmartDate } from "./SmartDate";

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
});
