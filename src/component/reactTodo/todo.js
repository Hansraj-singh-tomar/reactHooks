import './style.css';
import React from 'react';
import todo from './images/todo.svg';

const Todo = () => {
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>Add Your List Here 🖕</figcaption>
                    </figure>

                    <div className='addItems'>
                        <input type="text" placeholder="✍ Add Items.." />
                        <i className="fa fa-plus add-btn" title='Add Item'></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
