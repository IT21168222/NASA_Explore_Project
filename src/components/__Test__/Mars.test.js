// import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import Main from "../Mars_Rover_Photography/Main";

// describe("Main Component", () => {
//   test("renders loading message initially", () => {
//     render(<Main />);
//     expect(screen.getByText(/loading/i)).toBeInTheDocument();
//   });

//   test("renders error message if fetch fails", async () => {
//     jest.spyOn(global, "fetch").mockRejectedValueOnce(new Error("Fetch failed"));
//     render(<Main />);
//     await waitFor(() => expect(screen.getByText(/error fetching data/i)).toBeInTheDocument());
//   });

//   test("renders photos when fetched successfully", async () => {
//     const fakeData = {
//       photos: [
//         { id: 1, img_src: "fake-url1", earth_date: "2024-05-01" },
//         { id: 2, img_src: "fake-url2", earth_date: "2024-05-02" },
//         // Add more fake data as needed
//       ],
//     };
//     jest.spyOn(global, "fetch").mockResolvedValueOnce({
//       json: async () => fakeData,
//     });
//     render(<Main />);
//     await waitFor(() => expect(screen.getByText(/earth date/i)).toBeInTheDocument());
//     expect(screen.getAllByAltText(/mars rover photo/i)).toHaveLength(fakeData.photos.length);
//   });

//   test("renders 'No Mars rover photos available' if no photos fetched", async () => {
//     const fakeData = { photos: [] };
//     jest.spyOn(global, "fetch").mockResolvedValueOnce({
//       json: async () => fakeData,
//     });
//     render(<Main />);
//     await waitFor(() => expect(screen.getByText(/no mars rover photos available/i)).toBeInTheDocument());
//   });

//   test("paginates correctly when clicking on page buttons", async () => {
//     const fakeData = {
//       photos: [
//         { id: 1, img_src: "fake-url1", earth_date: "2024-05-01" },
//         { id: 2, img_src: "fake-url2", earth_date: "2024-05-02" },
//         // Add more fake data as needed
//       ],
//     };
//     jest.spyOn(global, "fetch").mockResolvedValueOnce({
//       json: async () => fakeData,
//     });
//     render(<Main />);
//     await waitFor(() => expect(screen.getByText(/earth date/i)).toBeInTheDocument());
    
//     // Assuming you have at least 2 pages
//     userEvent.click(screen.getByText("2"));
//     await waitFor(() => expect(screen.getByText(/2024-05-02/i)).toBeInTheDocument());
//   });
// });













// import { render, screen, fireEvent } from '@testing-library/react';
// import Main from '../Mars_Rover_Photography/Main';

// describe('Main component', () => {
//   beforeEach(() => {
//     // Mock the fetch function
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve({ photos: [] }),
//       })
//     );
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('renders without crashing', async () => {
//     render(<Main />);
//     const titleElement = screen.getByText(/Mars Rover Photos/i);
//     expect(titleElement).toBeInTheDocument();
//   });

//   it('displays error message if data fetching fails', async () => {
//     global.fetch.mockImplementationOnce(() => Promise.reject('API is down'));

//     render(<Main />);
//     const errorMessage = await screen.findByText(/Error fetching data/i);
//     expect(errorMessage).toBeInTheDocument();
//   });

//   it('displays photos when data fetching is successful', async () => {
//     const mockData = {
//       photos: [
//         {
//           id: 1,
//           img_src: 'mockImageUrl',
//           earth_date: '2024-05-05',
//         },
//       ],
//     };
//     global.fetch.mockImplementationOnce(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(mockData),
//       })
//     );

//     render(<Main />);
//     const photoElement = await screen.findByAltText(/Mars Rover Photo/i);
//     expect(photoElement).toBeInTheDocument();
//   });

//   it('displays pagination buttons', async () => {
//     render(<Main />);
//     const paginationButtons = await screen.findAllByRole('button');
//     expect(paginationButtons.length).toBeGreaterThan(0);
//   });

//   it('updates current page when pagination button is clicked', async () => {
//     const mockData = {
//       photos: Array.from({ length: 60 }, (_, index) => ({
//         id: index + 1,
//         img_src: `mockImageUrl${index + 1}`,
//         earth_date: '2024-05-05',
//       })),
//     };
//     global.fetch.mockImplementationOnce(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(mockData),
//       })
//     );

//     render(<Main />);
//     const paginationButton = await screen.findByText('2');
//     fireEvent.click(paginationButton);
//     const photoElement = await screen.findByAltText(/Mars Rover Photo/i);
//     expect(photoElement).toBeInTheDocument();
//   });
// });


// describe('Main component', () => {
// it('displays pagination buttons', () => {
   
//       expect(true).toBe(true); // Asserting that the disabled attribute is true
//     });

// });

// test('adds 1 + 2 to equal 3', () => {
//   expect(3).toBe(3)
// })

// import { expect, test } from 'vitest'




// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Main from './Main';

// test('renders Mars Rover Photos heading', () => {
//   render(<Main />);
//   const headingElement = screen.getByText(/Mars Rover Photos/i);
//   expect(headingElement).toBeInTheDocument();
// });

// test('renders pagination buttons', () => {
//   render(<Main />);
//   const paginationButtons = screen.getAllByRole('button');
//   expect(paginationButtons.length).toBeGreaterThan(0);
// });

// test('fetches photos from NASA API and renders them', async () => {
//   render(<Main />);
//   const photoCards = await screen.findAllByRole('img', { name: /Mars Rover Photo/i });
//   expect(photoCards.length).toBeGreaterThan(0);
// });

// test('clicking on pagination button changes current page', async () => {
//   render(<Main />);
//   const paginationButtons = screen.getAllByRole('button');
//   const nextPageButton = paginationButtons[1]; // Assuming there are at least two pages

//   userEvent.click(nextPageButton);

//   const photoCards = await screen.findAllByRole('img', { name: /Mars Rover Photo/i });
//   expect(photoCards.length).toBeGreaterThan(0);
// });



// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { test } from 'vitest';
// import Main from '../Mars_Rover_Photography/Main';

// test('renders Mars Rover Photos heading', () => {
//   render(<Main />);
//   const headingElement = screen.getByText(/Mars Rover Photos/i);
//   expect(headingElement).toBeInTheDocument();
// });

// test('renders pagination buttons', () => {
//   render(<Main />);
//   const paginationButtons = screen.getAllByRole('button');
//   expect(paginationButtons.length).toBeGreaterThan(0);
// });

// test('fetches photos from NASA API and renders them', async () => {
//   render(<Main />);
//   const photoCards = await screen.findAllByRole('img', { name: /Mars Rover Photo/i });
//   expect(photoCards.length).toBeGreaterThan(0);
// });

// test('clicking on pagination button changes current page', async () => {
//   render(<Main />);
//   const paginationButtons = screen.getAllByRole('button');
//   const nextPageButton = paginationButtons[1]; // Assuming there are at least two pages

//   userEvent.click(nextPageButton);

//   const photoCards = await screen.findAllByRole('img', { name: /Mars Rover Photo/i });
//   expect(photoCards.length).toBeGreaterThan(0);
// });


import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../Mars_Rover_Photography/Main';

describe('Home Component', () => {
    test('renders loading state initially', () => {
        render(<Main />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
});