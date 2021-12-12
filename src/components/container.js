import React from 'react';
import Write from './write.js';
import List from './list.js';

function Container(){
    return(
        <div style={{textAlign: 'center'}}>
            <Write />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Container;