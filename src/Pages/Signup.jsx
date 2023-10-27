import { useContext } from 'react';
import signUpImg from '../../public/assets/images/login/login.svg'
import { Authcontext } from '../Authprovider/Authprovider';

const Signup = () => {
    const { signup } = useContext(Authcontext)
    const handleSignUp = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
        signup(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <div className="text-center mr-10 lg:text-left w-full">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 ml-10 max-w-sm w-full border-2 rounded-lg">
                        <form className="card-body" onSubmit={handleSignUp}>
                            <h1 className="text-5xl font-bold">Signup!!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;