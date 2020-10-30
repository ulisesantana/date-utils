import { SmartDate } from "./SmartDate";

describe("SmartDate should", () => {
  describe("be instantiated based on", () => {
    it("a Date", () => {
      expect(new SmartDate(new Date())).toBeInstanceOf(SmartDate);
    });

    it("a string", () => {
      expect(new SmartDate("2020-12-10")).toBeInstanceOf(SmartDate);
    });

    it("a number of milliseconds", () => {
      expect(new SmartDate(1600000000)).toBeInstanceOf(SmartDate);
    });
  });
});
