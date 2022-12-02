import {
  orderByKey,
  orderByDate,
  formateYearMonthDay,
  firstChartUppercase,
} from "../helper";

describe("helpers", () => {
  it("should order the array by the key that is passed to it in the second parameter", () => {
    const initialArray = [
      { name: "Yamila", age: 28, status: true },
      { name: "Diego", age: 39, status: true },
      { name: "Mateo", age: 1, status: true },
    ];
    const orderedArray = orderByKey(initialArray, "age");
    expect(orderedArray[0].age).toEqual(39);
    expect(orderedArray[1].age).toEqual(28);
    expect(orderedArray[2].age).toEqual(1);
  });

  it("should order the array by the date", () => {
    const initialArray = [
      {
        name: "Diego",
        age: 39,
        status: true,
        createdAt: "2021-05-15T16:57:01.223Z",
      },
      {
        name: "Yamila",
        age: 28,
        status: true,
        createdAt: "2022-01-06T08:28:26.217Z",
      },
      {
        name: "Mateo",
        age: 1,
        status: true,
        createdAt: "2021-04-05T18:29:49.193Z",
      },
    ];
    const orderedArrayByDate = orderByDate(initialArray, "createdAt");
    console.log(orderedArrayByDate);
    expect(orderedArrayByDate[0].createdAt).toEqual("2022-01-06T08:28:26.217Z");
    expect(orderedArrayByDate[1].createdAt).toEqual("2021-05-15T16:57:01.223Z");
    expect(orderedArrayByDate[2].createdAt).toEqual("2021-04-05T18:29:49.193Z");
  });

  it("should format the date", () => {
    const utcDate = "2021-04-05T18:29:49.193Z";
    const separator = "/";
    const formatedDate = formateYearMonthDay(utcDate, separator);
    expect(formatedDate).toEqual("2021/04/05");
  });

  it("should capitalize the first letter of the word.", () => {
    const initialWord = "word";
    const formatedWord = firstChartUppercase(initialWord);
    expect(formatedWord).toEqual("Word");
  });
});
