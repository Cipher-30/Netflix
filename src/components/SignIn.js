import React, { useRef, useState } from 'react'
import { validateCradentials } from '../utils/validates';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { languages } from '../utils/languageConstant';


const SignIn = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
 
    const languageSelected = useSelector( (store) => (store.language.language))
     
    const validateHandler = () => {
        
         setErrorMessage(null);
         
        const message = validateCradentials(emailRef.current.value, passwordRef.current.value);
        setErrorMessage(message);  // SET ERROR MESSAGE

        if (message) return;  //contains some message --> return


         //isSignIn --> False 
        if (!isSignIn) // TELL I AM ON SIGN-UP PAGE
        {
            //SIGN-UP LOGIC
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    //Sign UP
                    const user = userCredential.user;
                    // console.log(user);

                })
                .catch((error) => {
                    const ErrorMessage = error.message;
                    const ErrorCode = error.code;

                    setErrorMessage(`${ErrorCode}--${ErrorMessage}`); // SET-ERROR MESSAGE

                })
        }
        else  // TELL I AM ON SIGN-IN PAGE
        {

            //SIGN-IN LOGIC
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);

                })
                .catch((error) => {
                    const ErrorMessage = error.message;
                    const ErrorCode = error.code;
                    setErrorMessage(`${ErrorCode}--${ErrorMessage}`) // SET-ERROR MESSAGE
                })
        }

    }



    return (
        <div className='max-w-[32rem] min-h-[40rem] mt-8 mx-auto px-12 py-14 rounded-md border border-white bg-[rgba(0,0,0,0.6)]'>
            <form onSubmit={(e) => e.preventDefault()} >
                {/* SIGN-IN */}
                <section className='text-white'>
                    <h1 className='font-bold text-4xl'> {isSignIn ? (languages[languageSelected].signIn) : (languages[languageSelected].signUp)}</h1>

                    <div className='flex flex-col gap-6 mt-8' >

                        {isSignIn === false ? (<input type='text' className=' text-lg px-4 py-2 bg-transparent border border-gray-300' placeholder={languages[languageSelected].fullName} />) : (null)}


                        <input type='email' ref={emailRef} className=' text-lg px-4 py-2 bg-transparent border border-gray-300' placeholder={languages[languageSelected].email} />

                        <input type='Password' ref={passwordRef} className=' text-lg px-4 py-2 bg-transparent border border-gray-300' placeholder={languages[languageSelected].password} />
                        {errorMessage && (<span className='text-red-600 font-semibold'>{errorMessage}</span>)}


                        <button className=' text-lg px-4 py-2  bg-red-600 rounded-md font-semibold ' onClick={validateHandler}  >{isSignIn ? (languages[languageSelected].signIn) : (languages[languageSelected].signUp)}</button>


                        <h1 className='text-center'>OR</h1>
                        <button className=' text-lg px-4 py-2 bg-[rgba(176,175,175,0.47)] rounded-md font-semibold '>Use a sign-in Code</button>
                        <h1>Forget Password?</h1>
                    </div>

                </section>

                <h1 className='text-white' >New to Netflix?<button className=' mx-2 cursor-pointer hover:border-b
                ' onClick={() => { setIsSignIn(!isSignIn) }}>{isSignIn ? (languages[languageSelected].signIn) : (languages[languageSelected].signUp)}</button></h1>


            </form>
        </div>
    )
}

export default SignIn