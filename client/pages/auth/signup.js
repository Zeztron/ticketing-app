import { useState } from 'react';
import axios from 'axios';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/users/signup", { email, password });
    } catch (err) {
      setErrors(err.response.data.errors);
    };
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
      </div>
      { errors.length > 0 && (
        <div className="alert alert-danger">
          <h4>Oops...</h4>
          <ul className="my-0">
            {errors.map(error => <li key={error.message}>{error.message}</li>)}
          </ul>
        </div>
      )}
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
};