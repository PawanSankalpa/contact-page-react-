import React, { useState } from "react";

function App() {
  const [greetings, setGreetings] = useState("Hello! ");
  const [contact, setContact] = useState(
    {
        fName: "",
        lName: "",
        email: ""

    }
  )

  function handleSubmit() {
    setGreetings(`Hello! ${contact.fName} ${contact.lName}`);
  }

  function handleChange(event) {
    const{name, value} = event.target;

    setContact(prevValue => {
        if (name === "fName"){
            return {
                fName: value,
                lName: prevValue.lName,
                email: prevValue.email
            };
        } else if (name === "lName"){
            return{
                fName: prevValue.fName,
                lName: value,
                email: prevValue.email
            };
        } else if (name === "email"){
            return{
                fName: prevValue.fName,
                lName: prevValue.lName,
                email: value
            };
        }
    });
  }

  return (
    <div className="container">
      <h1>{greetings}</h1>
      <p>{contact.email === "" ? "...@gmail.com" : contact.email}</p>
      <input
        name="fName"
        onChange={handleChange}
        type="text"
        placeholder="First Name"
        value={contact.fName}
        autoComplete="off"
      />
      <input
        name="lName"
        onChange={handleChange}
        type="text"
        placeholder="Last Name"
        value={contact.lName}
        autoComplete="off"
      />
      <input
        name="email"
        onChange={handleChange}
        type="text"
        placeholder="Email Adress"
        value={contact.email}
        autoComplete="off"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
