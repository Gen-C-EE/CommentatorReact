import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import AddCommentForm from '../components/AddCommentForm';


let fetchSpy;
let fakeResponse = {
    "id": 34,
    "author": null,
    "text": "test comment text",
    "replies": null,
    "timestamp": "2021-10-01 19:19:49 UTC",
    "top": true
}

beforeEach(() => {
    fetchSpy = jest.spyOn(global, "fetch").mockImplementation(()=>
    Promise.resolve({
        json: ()=> JSON.stringify(fakeResponse)
    })
    )
});

test('renders AddCommentForm',() => {
render(<AddCommentForm/>)
const linkElement = screen.getByText(/New/);
expect(linkElement).toBeInTheDocument();
}

); 

test('calls API when submitted',() => {
    const { getByTestId, getAllByTestId } = render(<AddCommentForm parent={null} video="testWatchId" top={true} rerenderCallback={()=>{}} toggleForm={()=>{}}/>)
    const linkElement = screen.getByText(/New/);
    expect(linkElement).toBeInTheDocument();
    fireEvent.change(getByTestId('commentText'), { target: { value: "Hello World"}});
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(fetchSpy).toHaveBeenCalled();
    //expect(fetchSpy).toHaveBeenCalledWith("http://localhost:8080/comments",expect.objectContaining({body: expect.objectContaining({"text":"Hello World"})}));
    }
    
    ); 

test('doesnt call API when submitted without text',() => {
    const { getByTestId, getAllByTestId } = render(<AddCommentForm parent={null} video="testWatchId" top={true} rerenderCallback={()=>{}} toggleForm={()=>{}}/>)
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(fetchSpy).toHaveBeenCalledTimes(0);

    }
    
    ); 