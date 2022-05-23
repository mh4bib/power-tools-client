import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    let errorMessage;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);

    if (GoogleLoading || loading) {
        return <LoadingSpinner></LoadingSpinner>
     }
 
     if (GoogleError || error) {
         errorMessage = <p className='text-red-600'><small>{GoogleError?.message || error.message}</small></p>
     }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className="card md:w-96 bg-base-100 mx-4 md:mx-auto shadow-xl my-4">
            <div className="card-body">
                <h2 className="text-center text-[20px]">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Your Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 8,
                                    message: 'password must have 8 character or longer'
                                }
                            })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                        </label>
                    </div>
                    {errorMessage}
                    <input type="submit" value="login" className='btn w-full max-w-xs' />
                </form>
                <p><small>Don't have an account ? <Link to={'/register'} className='text-primary'>register</Link></small></p>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;