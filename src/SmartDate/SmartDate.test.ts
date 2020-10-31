import { SmartDate } from "./SmartDate";

describe("SmartDate should", () => {
  describe("be instantiated with", () => {
    it("a Date", () => {
      expect(new SmartDate(new Date())).toBeInstanceOf(SmartDate);
    });

    it("a string", () => {
      expect(new SmartDate("2020-12-10")).toBeInstanceOf(SmartDate);
    });

    it("a number of milliseconds", () => {
      expect(new SmartDate(1600000000)).toBeInstanceOf(SmartDate);
    });

    it("an empty constructor", () => {
      expect(new SmartDate()).toBeInstanceOf(SmartDate);
    });
  });
});
