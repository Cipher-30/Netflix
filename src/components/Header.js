import { signOut } from 'firebase/auth'
import React,{useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useSelector , useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { supportedLanguages } from '../utils/languageConstant'
import { addLanguage } from '../utils/configSlice'
import { languages } from '../utils/languageConstant'

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();



  const userInfo = useSelector( (store) => (store.user));
  const languageSelected = useSelector( (store) => (store.language.language));
 
  
  const handleSignOut = () =>
  {
    signOut(auth).then( () =>
    { })
    .catch( (error) =>
    {
      console.log(error.message);
      
    })
  }


  const languageHandler = (e) =>
  {
    console.log(e.target.value);
    dispatch(addLanguage(e.target.value))
    
  }



  useEffect( () =>
    {
      //EVENT-LISTENER
      const unsubscribe =  onAuthStateChanged( auth, (user) =>
      {
        if(user)
        {  //SIGN-IN OR SIGN-UP
          const{uid, email, displayName} = user;
  
          dispatch( addUser({ uid: uid, email: email, displayName: displayName }));
          navigate('/browse');

        }
        else
        { //SIGN-OUT
             dispatch(removeUser());
             navigate('/');
        }


        //CLEAN EL WHEN UN-MOUNT
        return () => 
        {
          unsubscribe();
        }
  
      } )
  
    }, [])







    return (
      <>
        <header className=' mt-0 sm:px-8  pt-8 sm:pt-4  z-30 bg-black text-white'>
          <nav className='flex justify-between items-center '>
            {/* LEFT */}
            <div>
              <Link to='/'>
                <img
                  className='w-28 h-14 sm:w-40 sm:h-16'
                  src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                  alt='logo'
                />
              </Link>
            </div>
  
            {/* RIGHT */}
            <div className='flex gap-1 sm:gap-4 items-center'>
              <select
                className=' sm:px-4 py-1 text-sm font-semibold bg-transparent text-white rounded-sm border border-gray-400'
                onChange={languageHandler}
                value={languageSelected}
              >
                {supportedLanguages.map((obj) => (
                  <option
                    key={obj?.identifier}
                    className='text-black'
                    value={obj?.identifier}
                  >
                    {obj?.language}
                  </option>
                ))}
              </select>
  
              {userInfo && (
                <Link to='/browse/search-gpt'>
                  <button className='text-xs sm:text-sm font-semibold text-white bg-purple-600 rounded-md px-2 py-1 sm:px-4 sm:py-1 transition-all duration-150 ease-in-out hover:bg-purple-700'>
                    GPT-Search
                  </button>
                </Link>
              )}
  
              {userInfo === null ? (
                <Link to='/signin'>
                  <button className='text-xs sm:text-sm font-semibold text-white bg-red-600 rounded-md px-2 py-1 sm:px-4 sm:py-1 transition-all duration-150 ease-in-out hover:bg-red-700'>
                    {languages[languageSelected]?.signIn}
                  </button>
                </Link>
              ) : (
                <button
                  className='text-xs sm:text-sm font-semibold text-white bg-red-600 rounded-md px-2 py-1 sm:px-4 sm:py-1 transition-all duration-150 ease-in-out hover:bg-red-700'
                  onClick={handleSignOut}
                >
                  {languages[languageSelected]?.signOut}
                </button>
              )}
            </div>
          </nav>
        </header>
      </>
    );
  };
  
export default Header