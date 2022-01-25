import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alert = () => {

    const diffToast = () => {
        // alert("login successfull");
        // toast("login successfull");
        toast.success("login successfull", {
            position: "top-center"
        });
    }

    return (
        <>
            <div className="main-div">
                <h2>Welcome to signin page</h2>
                <button className='btn btn-primary' onClick={diffToast}>Login</button>
            </div>
            <ToastContainer />
        </>
    );
};

export default Alert;
