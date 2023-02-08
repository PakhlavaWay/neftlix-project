import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from '../../components/Login/Header';
import Footer from '../../components/Footer';
import axios from '../../api/axios';
import { useDispatch } from 'react-redux';
import { setAuthAC, setUserAC } from '../../redux/reducer';

const Login = () => {
  const [values, setValues] = useState({email: '', password: ''});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = async (data) => {
    try {
        const result = await axios.post('/signin', JSON.stringify(data));
        if (result.status === 200) {
            console.log(result);
            localStorage.setItem('token', result.data.accessToken);
            localStorage.setItem('userName', result.data.user.name);
            dispatch(setUserAC({
                id: result.data.user.id,
                name: result.data.user.name,
                email: result.data.user.email,
                age: result.data.user.age,
            }));
            dispatch(setAuthAC(true));
            setValues({email: "", password: ""});
            navigate('/browse');
        }
        else {
            console.log(result)
        }

    }
    catch(e) {
        console.log(e.message);
        console.log(e);
        console.log(JSON.stringify(data));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(values);
  } 

  const handleChange = (data) => {
    setValues({...values, [data.name]: data.value})
  }


  return (
    <Component className='login'>
        <Header />
        <main className="main">
            <div className="main__container">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="main__email input-container">
                        <input className='user-info' type="text" name="email" placeholder=' ' onChange={(e) => handleChange(e.target)} value={values.email}/>
                        <label htmlFor="">Email or phone number</label>
                    </div>
                    <div className="main__password input-container">
                        <input className='user-info' type="text" name="password" placeholder=' ' onChange={(e) => handleChange(e.target)} value={values.password}/>
                        <label htmlFor="">Password</label>
                    </div>
                    
                    <button type='submit'>Sign In</button>
                    <div className='main__details'>
                        <div className='main__checkbox-container'>
                            <input type="checkbox" id='checkbox'/>
                            <label htmlFor="checkbox">Remember me</label>
                        </div>
                        <NavLink to='/help'>Need help?</NavLink>
                    </div>
                </form>

                <div>
                    <div>
                        <p>New to Netflix?</p>
                        <NavLink to='/'>Sign up now.</NavLink>
                    </div>
                    <p>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <NavLink>Learn more.</NavLink>
                    </p>
                </div>
            </div>
        </main>
        <Footer bgColor={'rgba(0,0,0,.75)'}/>
    </Component>
  )
}

const Component = styled.section`
    min-height: 100vh;
    position: relative;
    z-index: 1;
    main {
        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/b917d571-224d-40fa-b55d-d20cc293f4c0/US-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg');
        height: 160vh;
        display: flex;
        justify-content: center;

        .main__container {
            h1 {
                margin-bottom: 30px;
                font-size: 2rem;
            }
            background-color: rgba(0,0,0,.75);
            width: 35%;
            height: 90vh;
            margin-top: 100px;
            border-radius: 6px;
            padding: 60px;
            min-width: 400px;
            min-height: 660px;

            form {
                display: grid;
                grid-template-row: 1fr 1fr 1fr 1fr;
                row-gap: 20px;
                margin-bottom: 50px;
                .input-container {
                    position: relative;
                    border-radius: 6px;
                    
                    input {
                        width: 100%;
                        background: #333;
                        border: none;
                        border-radius: 4px;
                        height: 50px;
                        padding: 16px 20px 0;
                        color: white;
                        outline: none;
                        caret-color: white;
                        
                        &:focus~label {
                            top: -4px;
                            font-size: 0.65rem;
                        }    

                        &:not(:placeholder-shown)~label {
                            top: -4px;
                            font-size: 0.65rem;
                        }

                    }
                    label {
                        position: absolute;
                        z-index: 2;
                        pointer-events: none;
                        transform: translateY(50%);
                        left: 20px;
                        top: 4px;
                        color: #8c8c8c;
                        font-size: 0.9rem;
                        transition: font .1s ease,top .1s ease,transform .1s ease;
                    }
                }   
                button {
                    border-radius: 6px;
                    font-size: 1rem;
                    font-weight: 500;
                    margin: 24px 0 0px;
                    padding: 15px 10px;
                    background: #e50914;
                    color: white;
                    font-weight: 700;

                    &:hover {
                        background-color: red;
                    }
                }

                .main__details {
                    display: flex;
                    justify-content: space-between;

                    .main__checkbox-container {
                        display: flex;
                        align-items: center;
                        input[type='checkbox'] {
                            background: #737373;
                            border-radius: 2px;

                            accent-color: #737373;

                        }
                        label {
                            color: #b3b3b3;
                            font-size: 0.8rem;
                        }
                    }

                    a {
                        color: #b3b3b3;
                        font-size: 0.8rem;
                    }
                }
            }
            div {
                div {
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    column-gap: 5px;
                    p {
                        color: #737373;
                        font-size: 1rem;
                    }
                    a {
                        color: white;
                    }
                }

                p {
                    color: #737373;
                    font-size: 0.9rem;
                }
            }
        }
    }

`;

export default Login