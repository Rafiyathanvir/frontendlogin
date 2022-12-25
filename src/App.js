import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Forgetpassword from "./components/Forgetpassword"; 
import firebase from "firebase"

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/forgetpassword" exact element={<Forgetpassword />} />

			<Route path="/" element={<Navigate replace to="/login" />} />

{/* here its navigate to login page that is the use of navigate here */}
		</Routes>
	);
}

export default App;
