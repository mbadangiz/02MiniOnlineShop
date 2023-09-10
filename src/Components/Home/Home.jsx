// import { useProducts } from "../Provider/ProductsDataProvider";

import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <div className="w-full">
      <div className="px-3 h-[60px] sm:px-10 w-full lg:px-0 bg-gray-100 backdrop-blur-lg">
        <NavBar />
      </div>
      <Header />
    </div>
  );
};

export default Home;
