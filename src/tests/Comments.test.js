import React from 'react';
import {render,screen} from '@testing-library/react';
import Comments from '../components/Comments';
import { unmountComponentAtNode } from 'react-dom';

import {
    BrowserRouter as Router
} from 'react-router-dom';
import {act} from 'react-dom/test-utils';

let fetchSpy;

const fakeComments = [
    {
        "id": 1,
        "author": null,
        "text": "test comment text",
        "replies": [],
        "timestamp": "2021-10-01 19:19:49 UTC",
        "top": true
    },
    {
        "id": 2,
        "author": null,
        "text": "test comment text",
        "replies": [],
        "timestamp": "2021-10-01 19:19:49 UTC",
        "top": true
    },
    {
        "id": 3,
        "author": null,
        "text": "test comment text",
        "replies": [
            {
                "id": 4,
                "author": null,
                "text": "test comment text",
                "replies": [],
                "timestamp": "2021-10-01 19:19:49 UTC",
                "top": false
            },
            {
                "id": 5,
                "author": null,
                "text": "test comment text",
                "replies": [
                    {
                        "id": 7,
                        "author": null,
                        "text": "test comment text",
                        "replies": [
                            {
                                "id": 10,
                                "author": null,
                                "text": "test comment text",
                                "replies": [],
                                "timestamp": "2021-10-01 19:19:49 UTC",
                                "top": false
                            },
                            {
                                "id": 11,
                                "author": null,
                                "text": "test comment text",
                                "replies": [
                                    {
                                        "id": 13,
                                        "author": null,
                                        "text": "test comment text",
                                        "replies": [
                                            {
                                                "id": 15,
                                                "author": null,
                                                "text": "test comment text",
                                                "replies": [],
                                                "timestamp": "2021-10-01 19:19:49 UTC",
                                                "top": false
                                            },
                                            {
                                                "id": 16,
                                                "author": null,
                                                "text": "test comment text",
                                                "replies": [],
                                                "timestamp": "2021-10-01 19:19:49 UTC",
                                                "top": false
                                            },
                                            {
                                                "id": 17,
                                                "author": null,
                                                "text": "test comment text",
                                                "replies": [],
                                                "timestamp": "2021-10-01 19:19:49 UTC",
                                                "top": false
                                            }
                                        ],
                                        "timestamp": "2021-10-01 19:19:49 UTC",
                                        "top": false
                                    },
                                    {
                                        "id": 14,
                                        "author": null,
                                        "text": "test comment text",
                                        "replies": [],
                                        "timestamp": "2021-10-01 19:19:49 UTC",
                                        "top": false
                                    }
                                ],
                                "timestamp": "2021-10-01 19:19:49 UTC",
                                "top": false
                            },
                            {
                                "id": 12,
                                "author": null,
                                "text": "test comment text",
                                "replies": [],
                                "timestamp": "2021-10-01 19:19:49 UTC",
                                "top": false
                            }
                        ],
                        "timestamp": "testTimeStamp",
                        "top": false
                    },
                    {
                        "id": 8,
                        "author": null,
                        "text": "test comment text",
                        "replies": [],
                        "timestamp": "2021-10-01 19:19:49 UTC",
                        "top": false
                    },
                    {
                        "id": 9,
                        "author": null,
                        "text": "test comment text",
                        "replies": [],
                        "timestamp": "2021-10-01 19:19:49 UTC",
                        "top": false
                    }
                ],
                "timestamp": "2021-10-01 19:19:49 UTC",
                "top": false
            },
            {
                "id": 6,
                "author": null,
                "text": "test comment text",
                "replies": [],
                "timestamp": "2021-10-01 19:19:49 UTC",
                "top": false
            }
        ],
        "timestamp": "2021-10-01 19:19:49 UTC",
        "top": true
    }
]
console.log(fakeComments)

let container;
beforeEach(() => {
    fetchSpy = jest.spyOn(global, "fetch").mockImplementation(()=>
    Promise.resolve({
        json: ()=> JSON.stringify(fakeComments)
    })
    )
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });


test('Makes fetch call to api', async () => {
await act(async ()=> {render(<Router><Comments top={true} video="testWatchId" rerenderCallback={()=>{}} toggleForm={()=>{}}/></Router>)},container);
//const linkElement = screen.getByText(/error/);
//expect(linkElement).toBeInTheDocument();
expect(fetchSpy).toHaveBeenCalled();
}); 

test('Doesn\'t make fetch call if top set to false', async () => {
    await act(async ()=> {render(<Router><Comments top={false} video="testWatchId" rerenderCallback={()=>{}} toggleForm={()=>{}}/></Router>)},container);
    //const linkElement = screen.getByText(/error/);
    //expect(linkElement).toBeInTheDocument();
    expect(fetchSpy).toHaveBeenCalledTimes(0);
    }); 

test('renders comments passed as props', async () => {
    await act(async ()=> {render(<Router><Comments top={false} video="testWatchId" rerenderCallback={()=>{}} toggleForm={()=>{}} replies={[
        {
            "id": 15,
            "author": null,
            "text": "search for this",
            "replies": [],
            "timestamp": "2021-10-01 19:19:49 UTC",
            "top": false
        },
        {
            "id": 16,
            "author": null,
            "text": "test comment text",
            "replies": [],
            "timestamp": "2021-10-01 19:19:49 UTC",
            "top": false
        },
        {
            "id": 17,
            "author": null,
            "text": "test comment text",
            "replies": [],
            "timestamp": "2021-10-01 19:19:49 UTC",
            "top": false
    }]}/></Router>)},container);
    const linkElement = screen.getByText(/search/);
    expect(linkElement).toBeInTheDocument();
    expect(fetchSpy).toHaveBeenCalledTimes(0);
    }); 
