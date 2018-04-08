import React from 'react';

export const NewsFeedComposer = () => (
    <div>
        <div className='left-col'>
            <div className='new-post'>
                <NewPost />
            </div>
            <div className='news-feed'>
                <Feed />
            </div>
        </div>
        <div className='right-col'>
            <Stories className='row-1'/>
            <Trending className='row-2'/>
            <Sponsored className='row-3' />
            <Footer classname='row-4 footer' />
        </div>
    </div>
)