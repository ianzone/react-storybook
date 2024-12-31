import { useState } from 'react';
import './LoginForm.css'; // 添加这一行

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          data-testid='email'
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          data-testid='password'
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type='submit' className='submit-button'>
        Submit
      </button>
      {submitted && <p>Welcome!</p>}
    </form>
  );
}
