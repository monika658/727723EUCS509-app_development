import React from 'react';

const Signup = () => {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
