const App = () => {
  return (
    <div className="bg-secondary">
      <nav className="flex justify-center">
        <ul className="flex">
          <li className="m-4"><a href="#">Home</a></li>
          <li className="m-4"><a href="#">Portfolio</a></li>
          <li className="m-4"><a href="#">Contact</a></li>
        </ul>
      </nav>
      <h1 className="font-inter text-primary leading-[96px] text-9xl mt-[96px] text-center">Hello Tailwind from ReactJS</h1>
      <p className="font-inter text-primary mt-[24px] text-center">I'm Yogawan, and this is my Documentation for learning Tailwind. 26 October 2024, 21:31</p>
      <div className="flex justify-center">
        <button className="p-[16px] bg-primary text-secondary rounded-[100px] mt-4">Go to my Real Portfolio</button>
      </div>
    </div>
  );
};

export default App;