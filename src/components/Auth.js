import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store/index';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch()
  // const isAuth = useSelector(state => state.auth.isAuthenticated)

  const submitHandler = e => {
    e.preventDefault()
    dispatch(authActions.login())  // this is not the exact reducer method in authSlice. This is the action creator returning the actual action object which should be dispatched.
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
