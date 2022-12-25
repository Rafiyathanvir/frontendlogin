import React from 'react'
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

//import { useFormik } from "formik";
//import axios from "axios";

    
const Forgetpassword= () => {

	/*const [data, setData] = useState({ email: ""});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/forgot-password";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);

			alert("pls check your mail")
			navigate("/login");
		  } 
		  catch (error) {
			console.log("login error");
			alert("Incorrect Username / Password")
		  }
	
	  };
			//alert("successfully loged in")
			//	navigate("/");
			  
		//} catch (error) {
		//	if (
				//error.response &&
				//error.response.status >= 400 &&
				//error.response.status <= 500
			//) {
				//alert("invalied email/password")

				//setError(error.response.data.message);
			//}
		//}
	//};*/
/*const navigate = useNavigate();
const formik = useFormik({
	initialValues: {
	  
	  email: ""
	},
	
	onSubmit: async (values) => {
		try {
		  const login = await axios.post("http://localhost:5000/api/forgot-password", values);
		  alert("pls check your mail")
		  navigate("/");
		} catch (error) {
		  console.log("login error");
		  alert("Incorrect Username / Password")
		}
	  },
	});*/

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");
	const navigate = useNavigate();

    const setVal = (e) => {
        setEmail(e.target.value)
    }

    const sendLink = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("email ");
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else {
            const res = await fetch("http://localhost:5000/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });
			alert("successfully send check your email")

            const data = await res.json();


            if (data.status === 201) {

                setEmail("");
                setMessage(true)
            } else {
                toast.error("Invalid User",{
                    position: "top-center"
                })
            }
        }
    }
    return (
<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
				<h1>Enter Registerted email address</h1>

					<form  >
						<input
							type="email"
							placeholder="Email"
							name="email"
							required className={styles.input}
							
							onChange={setVal}
							value={email}

						/>  
                     
						<button type="button" onClick={sendLink}   className={styles.green_btn}>
							Send
						</button>
						
                        </form>

						<Link to="/login"><button type="button"   className={styles.green_btn}>
							Back
						</button></Link>
						<ToastContainer style={{ color: "red", fontWeight: "bold" }} />

                        </div>
                        </div>
                        </div>
  )
                        
}

export default Forgetpassword