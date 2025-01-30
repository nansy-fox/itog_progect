import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Название вашей системы</h1>
      <Link href="/auth">
        <button className="bg-red-500 p-2 rounded hover:bg-red-600 transition">
          Выйти
        </button>
      </Link>
    </header>
  );
};

export default Header;
