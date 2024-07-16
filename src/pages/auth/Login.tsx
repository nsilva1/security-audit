import { useState } from 'react';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const goToHome = () => {
    navigate('/home')
  }

  const login = (e: any) => {
    e.preventDefault();

    if (email === '' || password === '') {
      toast.warning('Please fill all fields!!');
      return;
    }

    try {
        setLoading(true);
      setTimeout(() => {
        // navigate('/home');
        goToHome();
      }, 3000);
    } catch (error) {
      toast.error('Error logging in. Please try again later');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=''>
      <div className='flex h-screen justify-center items-center'>
        <div className='bg-white rounded-xl p-8 flex flex-col items-center'>
          <h2 className='text-center block text-2xl font-bold'>LOGIN</h2>
          <form>
            <fieldset disabled={loading}>
              <div className='mb-4'>
                <label className='block font-medium'>
                  Email<span className='text-error'>*</span>
                </label>
                <input
                  className='input input-bordered w-full'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label className='block font-medium'>
                  Password<span className='text-error'>*</span>
                </label>
                <input
                  className='input input-bordered w-full'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <button
                  onClick={(e) => login(e)}
                  type='button'
                  className='btn btn-success btn-wide'
                >
                  {
                    loading ? <Loader /> : 'LOGIN'
                  }
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Login };
