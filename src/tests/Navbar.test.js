import React from 'react';
import {render,screen} from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders Home navbar link',() => {
render(<Navbar/>)
const linkElement = screen.getByText(/Signup/);
expect(linkElement).toBeInTheDocument();
}

); 

