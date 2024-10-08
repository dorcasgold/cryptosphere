import { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signUp(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  return (
    <div>
      <div className='max-w-[400px] mx-auto min-[600px] px-4 py-20'>
        <h1 className='text-2xl font-bold'>Sign In</h1>
        {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 bg-primary border border-input rounded-2xl' />
              <AiOutlineMail className=' absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 bg-primary border border-input rounded-2xl' />
              <AiFillLock className=' absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-lg'>Sign up</button>
        </form>
        <p className='my-4'>
          Already have an account <Link to='/signin'>Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup