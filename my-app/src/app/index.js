import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Добро пожаловать!</h1>
        <Link href="/login">
          <a className="text-blue-500 hover:underline">Перейти к авторизации</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
