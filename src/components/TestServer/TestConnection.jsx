import React, { useEffect } from "react";

import axios from "axios";

function TestConnection() {
  useEffect(() => {
    axios.get(`http://localhost:3002/testusers`).then((response) => {
      console.log(response);
    });
  }, []);

  return <></>;
}

export default TestConnection;
