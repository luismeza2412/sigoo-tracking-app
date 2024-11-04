import React from 'react';
import { render, screen } from '@testing-library/react';
import CardComponent from '../../app/components/Card/card';
import { useGuia } from '../../app/context/GuiaContext';
import { useRouter } from 'next/navigation';




// Mocks
jest.mock('../../app/context/GuiaContext');
jest.mock('next/navigation');
jest.mock('../../app/actions/fetchGuia');

const mockSetData = jest.fn();
(useGuia as jest.Mock).mockReturnValue({ setData: mockSetData });
const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

describe('CardComponent', () => {
  beforeEach(() => {
    render(<CardComponent />);
  });

  test('renders the search input and button', () => {
    const input = screen.getByPlaceholderText('Buscar número de guía...');
    const button = screen.getByText('Buscar');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

//   test('calls fetchGuia and redirects on successful search', async () => {
//     (fetchGuia as jest.Mock).mockResolvedValue({
//       guia: '36390004411'
//     });

//     const input = screen.getByPlaceholderText('Buscar número de guía...');
//     fireEvent.change(input, { target: { value: '36390004411' } });
//     fireEvent.submit(screen.getByText('Buscar'));


//     expect(button).toBeInTheDocument();

//     // expect(mockSetData).toHaveBeenCalled();
//     // expect(mockPush).toHaveBeenCalledWith('/detail');
//   });

 
});
