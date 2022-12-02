import { fireEvent, render, screen } from "@testing-library/react";
import {
  firstChartUppercase,
  formateYearMonthDay,
} from "../../../helper/helper";
import { CommonCard } from "../CommonCard";

const news = {
  id: "00fa3ef8-0675-4f3e-87c7-1c5c7d3938e2",
  title: "aut molestiae qui quis exercitationem",
  thumbnailUrl: "http://placeimg.com/300/300/technology",
  category: "technology",
  views: 1310,
  createdAt: "2022-01-06T08:28:26.217Z",
};
const onClick = jest.fn();
describe("Render Item", () => {
  it("Render component with the correct properties", () => {
    render(<CommonCard key={news.id} {...news} onClick={onClick} />);
    const renderedTitle = screen.getByText(news.title);
    // const renderedimage = screen.getByText(news.thumbnailUrl);
    const renderedCategory = screen.getByText(
      firstChartUppercase(news.category)
    );
    const renderedView = screen.getByText(news.views);
    const renderedDate = screen.getByText(
      formateYearMonthDay(news.createdAt, "/")
    );
    expect(renderedTitle).toBeDefined();
    // expect(renderedimage).toBeDefined();
    expect(renderedCategory).toBeDefined();
    expect(renderedView).toBeDefined();
    expect(renderedDate).toBeDefined();
  });

  it("If button is pressed, should call the onClick property", () => {
    render(<CommonCard key={news.id} {...news} onClick={onClick} />, {});
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
