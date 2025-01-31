"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Switch = ({ checked, onChange }) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <div onClick={handleToggle} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      <div 
        style={{ 
          width: '40px', 
          height: '20px', 
          backgroundColor: checked ? 'green' : 'lightgray', 
          borderRadius: '10px', 
          position: 'relative', 
          transition: 'background-color 0.3s'
        }}
      >
        <div 
          style={{ 
            width: '16px', 
            height: '16px', 
            backgroundColor: 'white', 
            borderRadius: '50%', 
            position: 'absolute', 
            top: '2px', 
            left: checked ? '22px' : '2px', 
            transition: 'left 0.3s'
          }} 
        />
      </div>
      <span style={{ marginLeft: '8px' }}>{checked ? 'Темная тема' : 'Светлая тема'}</span>
    </div>
  );
};

const AuthPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'pswrd') {
      alert('Успешный вход!');
      setError('');
      router.push('/second');
    } else {
      setError('Неверное имя пользователя или пароль');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <header className={`p-4 text-center ${isDarkTheme ? 'bg-[#A24772]' : 'bg-[#2F00FF]'}`}>
        <div className={`p-4 rounded-lg shadow-md mb-4 ${isDarkTheme ? 'bg-gray-700' : 'bg-white'}`}>
          <h2 className="text-2xl font-bold">Авторизация</h2>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="relative w-40 h-40 transform scale-y-[-1] rotate-270">
          <div className="bg-orange-500 rounded-full w-40 h-40 absolute"></div>
          <div style={{ backgroundColor: '#A24772' }} className="rounded-full w-28 h-28 absolute top-16 left-9"></div>
          <div style={{ backgroundColor: '#2F00FF' }} className="rounded-full w-20 h-20 absolute top-20 left-24"></div>
        </div>

        <div className={`max-w-md w-full p-8 ml-6 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block">Логин</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`mt-1 block w-full p-2 border-4 rounded-lg transition-transform transform hover:scale-105 ${isDarkTheme ? 'border-white bg-gray-700 text-white' : 'border-black text-black'}`}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full p-2 border-4 rounded-lg transition-transform transform hover:scale-105 ${isDarkTheme ? 'border-white bg-gray-700 text-white' : 'border-black text-black'}`}
               
                required
              />
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mr-2"
              />
              <label className="text-gray-700">Запомнить меня</label>
            </div>
            <div className="flex items-center justify-between mb-4">
              <button 
                type="submit"
                className="w-full text-white p-2 rounded-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-600 transition-transform transform hover:scale-105"
                style={{
                  background: 'linear-gradient(to right, #2F00FF, #FF8000)',
                  transition: 'background 0.3s ease',
                }}>
                Войти
              </button>
            </div>
          </form>
        </div>
        <div className="relative w-40 h-40 ml-4">
                <div className="bg-orange-500 rounded-full w-40 h-40 absolute"></div> {/* Синий круг */}
                <div style={{ backgroundColor: '#A24772' }} className="rounded-full w-28 h-28 absolute top-16 left-9"></div>{/* Зеленый круг, сдвинут вниз */}
                <div style={{ backgroundColor: '#2F00FF' }} className="rounded-full w-20 h-20 absolute top-20 left-24"></div> {/* Красный круг */}
              </div>
      </main>

      <footer className={`bg-gray-800 text-white p-4 text-center ${isDarkTheme ? 'bg-[#A24772]' : 'bg-gray-800'}`}>
        <p>© 2025 Молоткова Анастасия Алексеевна ПР-22.106</p>
      </footer>

      {/* Компонент Switch для переключения тем */}
      <div className="flex justify-center mb-4">
        <Switch checked={isDarkTheme} onChange={setIsDarkTheme} />
      </div>
    </div>
  );
};

export default AuthPage;
