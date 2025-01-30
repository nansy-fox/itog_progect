"use client"; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './navbar';
import Link from 'next/link';
const AuthPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'pswrd') {
      alert('Успешный вход!');
      setError('');
      router.push('/page2');
    } else {
      setError('Неверное имя пользователя или пароль');
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4 text-center">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-bold text-black">Авторизация</h2>
          {/* Здесь можно добавить изображение логотипа */}
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center ">
      <div className="relative w-40 h-40 " style={{ transform: 'scaleY(-1) rotate(270deg)' }}>
        <div className="bg-orange-500 rounded-full w-40 h-40 absolute"></div>
        <div style={{ backgroundColor: '#A24772' }} className="rounded-full w-28 h-28 absolute top-16 left-9"></div>
        <div style={{ backgroundColor: '#2F00FF' }} className="rounded-full w-20 h-20 absolute top-20 left-24"></div>
      </div>

        <div className="max-w-md w-full bg-white p-8 ml-6">
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Логин</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full p-2 border-4 border-black rounded-lg transition-transform transform hover:scale-105"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border-4 border-black rounded-lg transition-transform transform hover:scale-105"
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
            <div className="flex items-center justify-between">
            <button 
                type="submit"
                className="w-full text-white p-2 rounded hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-600 rounded-lg transition-transform transform hover:scale-105"
                style={{
                  background: 'linear-gradient(to right, #2F00FF, #FF8000)',
                  transition: 'background 0.3s ease',
                }}>Войти
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
           
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2025 Молоткова Анастасия ПР-22.106.</p>
      </footer>
    </div>
  );
};

export default AuthPage;
