import { useEffect, useState } from "react";
import { tempObj, tempFacts } from "./data";
import Locator from "./Locator";
import "./App.css";
import { Typography } from "@mui/material";

function App() {
  const [isLoading, setIsLoading] = useState(false); //change when update to api
  const [isError, setIsError] = useState(false);
  const [locData, setLocData] = useState(tempObj);
  const [locFacts, setLocFacts] = useState(tempFacts);

  // const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`;

  // useEffect(() => {
  //   setIsError(false);
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setIsLoading(false);
  //       setLocData(json);
  //     })
  //     .catch(() => setIsError(true));
  // }, []);

  // useEffect(() => {
  //   if (Object.keys(locData).length > 0) {
  //     console.log(locData.location.country);
  //     const alphaCode = locData.location.country;
  //     const url2 = `http://api.countrylayer.com/v2/alpha/${alphaCode}?access_key=${process.env.REACT_APP_COUNTRYLAYER_API_KEY}`;
  //     setIsError(false);
  //     fetch(url2)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setIsLoading(false);
  //         setLocFacts(json);
  //       })
  //       .catch(() => setIsError(true));
  //   }
  // }, [locData]);

  console.log(locData.location.lat);

  const getContent = () => {
    if (isError) {
      return (
        <div>
          <Typography>
            something went wrong :( the api may have reached its request limit
          </Typography>
        </div>
      );
    }
    if (isLoading) {
      return (
        <div>
          <Typography>loading</Typography>
        </div>
      );
    }

    return <Locator locData={locData} locFacts={locFacts} />;
  };

  return <div className="App">{getContent()}</div>;
}

export default App;
