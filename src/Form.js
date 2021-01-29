import React from 'react'
// import {Link, useRoutMatch} from 'react-router-dom'

export default function Form(props){
    const {submit} = props;
const onSubmit =(evt) =>{
    evt.preventDefault();
    submit()
}

return(
<div name="parent">
    <div>
       <h1>Build Your Own Pizza</h1> 
    </div>
    <div className='form'>
        <form>
            
        </form>


    </div>
    
</div>

)


}