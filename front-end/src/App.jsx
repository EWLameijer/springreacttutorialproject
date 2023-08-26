import './App.css'
import LoginForm from './RegistrationForm';

async function postData(url, data) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function App() {

  const register = ({ username, password }) => console.log(`User ${username} has password ${password}`)


  return <>
    Test!!!
    <button onClick={() => postData("http://localhost:8080/api/v1/register", { username: "Wim", password: "Tim" })}>Click me!</button>
    <LoginForm register={register} />
  </>

}

export default App
