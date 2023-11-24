/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading/Loading.jsx"

function About() {
  const [randomUserData, setRandomUserData] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?gender=female")
      .then((res) => {
        setRandomUserData(res.data.results[0]); // Get the first user from the array
      })
      .catch((err) => console.log(err));
  }, []);

  const User = ({ data }) => {
    const className = "w-full h-10 text-white text-xl flex items-center justify-center";

    const MessModal = ({ label, value }) => {
      return (
        <div className={className}>
          <strong>{label}: {value}</strong>
        </div>
      );
    };

    return (
      <div className="w-full h-screen gap-3 flex-col flex items-center justify-stretch bg-gray-900">
        <div className="w-48 h-48 rounded-lg ring-4 m-4">
          <img
            className="w-full rounded-lg ring-4 p-2"
            src={data.picture.large}
            alt=""
          />
        </div>

        <MessModal label="First Name" value={data.name.first} />
        <MessModal label="Last Name" value={data.name.last} />
        <MessModal label="Phone" value={data.phone} />
        <MessModal label="Email" value={data.email} />
        <MessModal label="Location" value={data.location.street.name} />
      </div>
    );
  };

  return (
    <div className="w-full h-screen">
      {randomUserData ? (
        <User data={randomUserData} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default About;
