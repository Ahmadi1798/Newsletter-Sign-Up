import React, { useState } from "react";
import "./index.css";
import Main from "./Components/Main";
import Success from "./Components/Success";

const App = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (email) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      setSuccess(!success);
    } else {
      setSuccess(false);
      setErrorMessage("Valid Email Required");
      const inputEmail = document.getElementById("inputEmail");
      inputEmail.classList.add("error-message");
    }
    setEmail(email);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      {success ? (
        <Success email={email} />
      ) : (
        <Main
          onSubmit={handleSubmit}
          errorMessage={errorMessage}
          errorStatus={success}
        />
      )}
    </div>
  );
};

export default App;
