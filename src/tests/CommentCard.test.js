import React from 'react';
import {render,screen} from '@testing-library/react';
import CommentCard from '../components/CommentCard';


var comment =     {
    "id": 2,
    "author": null,
    "text": "test comment text",
    "replies": [],
    "timestamp": "2021-10-01 19:19:49 UTC",
    "top": true
};



test('renders Comment Card',() => {
render(<CommentCard comment={ comment } rerenderCallback={()=>{}} video={()=>{}}/>)
const linkElement = screen.getByText(/test comment text/);
expect(linkElement).toBeInTheDocument();
}); 

