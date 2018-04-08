import React from 'react';
import {NavMenuBar} from './NavMenuBar';
import {NewsFeedOptions} from './NewsFeedOptions';
import {NewsFeedComposer} from './NewsFeedComposer';

export const NewsFeed = () => (
    <div>
        <NavMenuBar />
        <div className='grid-col-2'>
            <NewsFeedOptions id='leftCol'/>
            <NewsFeedComposer />
        </div>
    </div>
)