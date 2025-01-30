const Cont=()=>(
  
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4 text-center">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-xl font-bold">Логотип</h2>
        </div>
      </header>
      <header className="text-black p-4 text-center">
        <h1 className="text-2xl">Страница 2</h1>
      </header>

      <main className="flex-grow flex items-center justify-center ">
      
        <div className="relative w-40 h-40 ml-4">
                <div className="bg-orange-500 rounded-full w-40 h-40 absolute"></div> {/* Синий круг */}
                <div style={{ backgroundColor: '#A24772' }} className="rounded-full w-28 h-28 absolute top-16 left-9"></div>{/* Зеленый круг, сдвинут вниз */}
                <div style={{ backgroundColor: '#2F00FF' }} className="rounded-full w-20 h-20 absolute top-20 left-24"></div> {/* Красный круг */}
              </div>
              
      </main>
    </div>
  
);
export default Cont;
