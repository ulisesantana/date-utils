import { SmartDate } from "./SmartDate";

type TestDateUseCase = {
  inputDate: string;
  expected: string;
};

describe("SmartDate should", () => {
  it("retrieve the next month", () => {
    const cases: TestDateUseCase[] = [
      {
        inputDate: "2020-10-01T12:00:00.000Z",
        expected: "2020-11-01T12:00:00.000Z",
      },
      {
        inputDate: "2020-10-25T12:00:00.000Z",
        expected: "2020-11-25T12:00:00.000Z",
      },
      {
        inputDate: "2020-10-31T12:00:00.000Z",
        expected: "2020-11-30T12:00:00.000Z",
      },
      {
        inputDate: "2020-04-15T12:00:00.000Z",
        expected: "2020-05-15T12:00:00.000Z",
      },
      {
        inputDate: "2020-01-31T12:00:00.000Z",
        expected: "2020-02-29T12:00:00.000Z",
      },
      {
        inputDate: "2019-01-31T12:00:00.000Z",
        expected: "2019-02-28T12:00:00.000Z",
      },
      {
        inputDate: "2019-01-01T12:00:00.000Z",
        expected: "2019-02-01T12:00:00.000Z",
      },
      {
        inputDate: "2019-01-05T12:00:00.000Z",
        expected: "2019-02-05T12:00:00.000Z",
      },
      {
        inputDate: "2020-01-20T12:00:00.000Z",
        expected: "2020-02-20T12:00:00.000Z",
      },
      {
        inputDate: "2020-12-20T12:00:00.000Z",
        expected: "2021-01-20T12:00:00.000Z",
      },
      {
        inputDate: "2020-12-01T12:00:00.000Z",
        expected: "2021-01-01T12:00:00.000Z",
      },
      {
        inputDate: "2020-12-31T12:00:00.000Z",
        expected: "2021-01-31T12:00:00.000Z",
      },
    ];

    cases.forEach(({ inputDate, expected }: TestDateUseCase) => {
      expect(new SmartDate(inputDate).nextMonth().toString()).toBe(expected);
    });
  });

  it("retrieve the previous month", () => {
    const cases: TestDateUseCase[] = [
      {
        inputDate: "2020-11-25T12:00:00.000Z",
        expected: "2020-10-25T12:00:00.000Z",
      },
      {
        inputDate: "2020-05-15T12:00:00.000Z",
        expected: "2020-04-15T12:00:00.000Z",
      },
      {
        inputDate: "2020-11-30T12:00:00.000Z",
        expected: "2020-10-30T12:00:00.000Z",
      },
      {
        inputDate: "2020-02-20T12:00:00.000Z",
        expected: "2020-01-20T12:00:00.000Z",
      },
      {
        inputDate: "2021-01-20T12:00:00.000Z",
        expected: "2020-12-20T12:00:00.000Z",
      },
      {
        inputDate: "2021-01-01T12:00:00.000Z",
        expected: "2020-12-01T12:00:00.000Z",
      },
      {
        inputDate: "2021-01-31T12:00:00.000Z",
        expected: "2020-12-31T12:00:00.000Z",
      },
      {
        inputDate: "2020-03-31T12:00:00.000Z",
        expected: "2020-02-29T12:00:00.000Z",
      },
      {
        inputDate: "2019-03-31T12:00:00.000Z",
        expected: "2019-02-28T12:00:00.000Z",
      },
      {
        inputDate: "2020-03-01T12:00:00.000Z",
        expected: "2020-02-01T12:00:00.000Z",
      },
      {
        inputDate: "2020-01-01T12:00:00.000Z",
        expected: "2019-12-01T12:00:00.000Z",
      },
      {
        inputDate: "2020-09-01T12:00:00.000Z",
        expected: "2020-08-01T12:00:00.000Z",
      },
      {
        inputDate: "2020-07-03T12:00:00.000Z",
        expected: "2020-06-03T12:00:00.000Z",
      },
    ];

    cases.forEach(({ inputDate, expected }: TestDateUseCase) => {
      expect(new SmartDate(inputDate).previousMonth().toString()).toBe(
        expected
      );
    });
  });
});
