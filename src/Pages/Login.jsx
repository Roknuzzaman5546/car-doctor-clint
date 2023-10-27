import loginimg from '../../public/assets/images/login/login.svg'

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
    }
    
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <div className="text-center mr-10 lg:text-left w-full">
                        <img src={loginimg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 ml-7 max-w-sm w-full border-2 rounded-lg">
                        <form className="card-body" onSubmit={handleLogin}>
                            <h1 className="text-5xl font-bold">Login</h1>
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
                                <button className="btn btn-error">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;