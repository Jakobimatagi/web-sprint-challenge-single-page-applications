import React from 'react';
import {Link} from 'react-router-dom'
import Form from './Form'

export default function Home(){

return(
    <div>
        <div className='top'>
            <h1>Your favorite food, delivered while coding</h1>
            <button><Link to='./Form'>Pizza?</Link></button>
        </div>
        <div className='bottom'>
            <form>
                
            </form>
        </div>
    </div>
)
}