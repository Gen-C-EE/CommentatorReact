import React from 'react';
import {render,screen} from '@testing-library/react';
import VideoPage from '../components/VideoPage';

test('renders VideoPage component',() => {
render(<VideoPage/>)
const linkElement = document.querySelector('.video-responsive');
expect(linkElement).toBeInTheDocument();
}

); 