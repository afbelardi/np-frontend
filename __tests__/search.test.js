// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import axios from "axios";
// // import { useRouter } from "next/router";
// import Search from "../src/pages/search";


// jest.mock('next/router', () => ({
//   __esModule: true,
//   useRouter: jest.fn()


// describe("Search component", () => {
//   beforeEach(() => {
//     render(<Search />);
//   });

//   it("renders the Navbar and Header components", () => {
//     expect(screen.getByRole("navigation")).toBeInTheDocument();
//     expect(screen.getByRole("heading", { name: /search by state/i })).toBeInTheDocument();
//   });

//   it("displays the search form with an input field and submit button", () => {
//     expect(screen.getByPlaceholderText(/washington/i)).toBeInTheDocument();
//     expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
//   });

//   it("submits the form on valid input", async () => {
//     const mockedAxiosGet = jest.spyOn(axios, "get").mockResolvedValueOnce({ data: { data: [] } });

//     const inputField = screen.getByPlaceholderText(/washington/i);
//     const submitButton = screen.getByRole("button", { name: /submit/i });

//     userEvent.type(inputField, "ValidInput");
//     userEvent.click(submitButton);

//     expect(mockedAxiosGet).toHaveBeenCalledWith(expect.stringContaining("ValidInput"));
//     expect(mockedAxiosGet).toHaveBeenCalledTimes(1);
//   });
// });
