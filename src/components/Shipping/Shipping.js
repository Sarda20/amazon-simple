import userEvent from '@testing-library/user-event';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'


const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} placeholder='Email' {...register("email", { required: true })} />

                {errors.email && <span className='error'>This field is required</span>}

                <input placeholder='Address' {...register("address", { required: true })} />

                <br />

                <Link to='/placeorder'>
                    <button className='btn-regular'>Submit</button>
                </Link>
            </form>
        </div>
    );
};

export default Shipping;