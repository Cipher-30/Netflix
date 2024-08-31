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
        <header className='mt-0 z-30'>
            <nav className='flex  justify-between items-center  '>
             
              {/* LEFT  */}
                <div className=''>
                <Link to={"/"}>
                  <img className='w-[10rem] h-[4.5rem]' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
                  </Link>
                </div>

              {/* RIGHT */}
                <div className='flex gap-4'> 
                     
                     <select className='px-6 font-semibold bg-transparent text-white py-1 rounded-sm border border-gray-400'onClick={ (e) => languageHandler(e)}   name='language'>

                      {supportedLanguages.map( (obj) => {
                        return( <option key={obj?.identifier} className='text-black' value={obj?.identifier} >{obj?.language}</option> )
                      })}
                       
                        {/* <option className='text-black' value={"english"} >English</option>
                        <option className='text-black' value={"hindi"}>Hindi</option> */}
                     </select>

                     {userInfo && (<Link to={"/browse/search-gpt"}><button className= 'text-s font-semibold text-white bg-purple-600 rounded-md px-4 py-1 transition-all duration-150 ease-in-out hover:bg-purple-700' >
                       GPT-Search
                    </button>
                     </Link>)}
               


                   {userInfo === null ? ( <Link to={"/signin"}>
                    <button className= 'text-s font-semibold text-white bg-red-600 rounded-md px-4 py-1 transition-all duration-150 ease-in-out hover:bg-red-700' >
                    {languages[languageSelected]?.signIn}
                    </button>
                    </Link> ) : (
                    <button className= 'text-s font-semibold text-white bg-red-600 rounded-md px-4 py-1 transition-all duration-150 ease-in-out hover:bg-red-700 ' onClick={handleSignOut} >
                        {languages[languageSelected].signOut}
                    </button>)}



                   

                </div>

            </nav>
        </header>
    </>
  )
}

export default Header