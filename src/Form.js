import React from 'react'
// import {Link, useRoutMatch} from 'react-router-dom'

export default function Form(props){
    const {submit, values, update} = props;
const onSubmit =(evt) =>{
    evt.preventDefault();
    submit()
}
const onChange = evt => {
    const {name, value} =evt.target
    update(name,value)
}
return(
<div name="parent">
    <div>
       <h1>Build Your Own Pizza</h1> 
    </div>
    <div className='form'>
        <form>
            <select name='size' value={values.size} onChange={onChange}>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>
        </form>


    </div>
    
</div>

)


}