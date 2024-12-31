import { Outlet, Link } from "react-router-dom";
import "./App.css";
import { Button, Navbar } from "@material-tailwind/react";

function App() {
  return (
    <div style={{ minHeight: "100vh" }} className="flex flex-col">
      <Navbar
        style={{ maxWidth: "100%", backgroundColor: "#059669" }}
        className="p-2 h-30 rounded-none"
      >
        <div className="w-full flex justify-between items-center flex-wrap">
          <div className="flex flex-row shrink ">
            <svg
              className="w-6 h-6 m-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
              />
            </svg>
            <Button className="bg-teal-400 shadow-none hover:shadow-none p-2">
              <Link
                to="/"
                className="text-white text-3xl font-bold hover:text-gray-500"
              >
                EcoTravel
              </Link>
            </Button>
          </div>

          <div className="flex space-x-6">
            <Button className="bg-teal-400 shadow-none hover:shadow-none">
              <Link
                to="/calc"
                className="text-white text-lg hover:text-gray-500"
              >
                Carbon Calculator
              </Link>
            </Button>
            <Button className="bg-teal-400 shadow-none hover:shadow-none">
              <Link
                to="/accom"
                className="text-white text-lg hover:text-gray-500"
              >
                Eco Accomodations
              </Link>
            </Button>
            <Button className="bg-teal-400 shadow-none hover:shadow-none">
              <Link
                to="/login"
                className="text-white text-lg hover:text-gray-500"
              >
                Login
              </Link>
            </Button>
            <Button className="bg-teal-400 shadow-none hover:shadow-none">
              <Link
                to="/reg"
                className="text-white text-lg hover:text-gray-500"
              >
                Register
              </Link>
            </Button>
            <Button className="bg-teal-400 shadow-none hover:shadow-none">
              <Link to="/" className="text-white text-lg hover:text-gray-500">
                Home
              </Link>
            </Button>
          </div>
        </div>
      </Navbar>

      <main className="main flex flex-grow">
        <Outlet />
      </main>

      <footer
        style={{ backgroundColor: "#059669" }}
        className="text-center font-semibold text-white"
      >
        © 2024 EcoTravel. All rights reserved.
        <br /> Committed to sustainable and responsible travel.
      </footer>
    </div>
  );
}

export default App;
