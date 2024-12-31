import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import calculator from "../assets/calculator.png";
import bed from "../assets/queen-bed.png";
import car from "../assets/car.png";

const Home = () => {
  return (
    <div style={{ height: "100%", padding: "1rem" }}>
      <Typography
        style={{ marginTop: "1rem", marginBottom: ".5rem" }}
        variant="h1"
        className="text-center text-green-600 mb-4"
      >
        Welcome to EcoTravel
      </Typography>
      <Typography
        style={{ marginBottom: ".5rem" }}
        variant="h4"
        className="text-center text-gray-900 my-8"
      >
        Plan your sustainable travel adventure and reduce your carbon footprint
      </Typography>
      <div
        style={{ gap: "2rem", marginTop: "2rem" }}
        className="flex flex-row justify-center items-center flex-wrap"
      >
        <Card style={{ width: "25rem", height: "auto" }} className="shadow-lg">
          <CardBody className="flex flex-col items-center justify-center">
            <div
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              className="flex flex-row justify-evenly items-center"
            >
              <img src={calculator} alt="Calculator" className="w-8 h-8"></img>
              <Typography variant="h5" className="ml-4">
                Carbon Footprint Calculator
              </Typography>
            </div>
            <Typography className="text-gray-600 text-center mb-6">
              Calculate the enviromental impact of your travel choices.
            </Typography>
            <Button
              style={{ backgroundColor: "#059669" }}
              color="green"
              ripple={true}
              className="mt-4"
            >
              <Link to="/calc">Calculate</Link>
            </Button>
          </CardBody>
        </Card>
        <Card style={{ width: "25rem", height: "auto" }} className="shadow-lg">
          <CardBody className="flex flex-col items-center justify-center">
            <div
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              className="flex flex-row justify-evenly items-center"
            >
              <img src={bed} alt="Accomodations" className="w-8 h-8"></img>
              <Typography variant="h5" className="ml-4">
                Eco-Conscious Accommodations
              </Typography>
            </div>
            <Typography className="text-gray-600 text-center mb-6">
              Find and book sustainable hotels and resorts.
            </Typography>
            <Button
              style={{ backgroundColor: "#059669" }}
              color="green"
              ripple={true}
              className="mt-4"
            >
              <Link to="/accom">Book Now !</Link>
            </Button>
          </CardBody>
        </Card>
        <Card style={{ width: "25rem", height: "auto" }} className="shadow-lg">
          <CardBody
            style={{ minHeight: "100%" }}
            className="flex flex-col items-center justify-center"
          >
            <div
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              className="flex flex-row justify-evenly items-center"
            >
              <img src={car} alt="Trip" className="w-8 h-8"></img>
              <Typography variant="h5" className="ml-4">
                Offset Your Trip
              </Typography>
            </div>
            <Typography className="text-gray-600 text-center mb-6">
              Contribute to reforestation projects and environmental NGOs.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default Home;
