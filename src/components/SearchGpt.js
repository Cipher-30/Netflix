import React, {  useRef, useState } from 'react'
import {  useSelector } from 'react-redux';
import { languages } from '../utils/languageConstant';
import { imageUrl, options } from '../utils/constants';


const SearchGpt = () => {

   const languageSelected = useSelector( (store) => (store.language.language))

//    const dispatch = useDispatch();

   const refSearchText = useRef(null);
   const [movies, setMovies] = useState([""]);
   const [sugMovies, setSugMovies] = useState('');

//    console.log(movies);






   const searchMovieTmbd = async (movie) =>
   {

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options);
        const dataJson = await response.json();
    
        return dataJson.results;




    } catch (error) {
        console.error('Error fetching data:', error);
    }
         
   }
   




const fetchSearch = (query) => {
    fetch(`https://tastedive.com/api/similar?q=${query}&type=movie&k=1035015-Amit-055FBBCE`)
        .then(response => response.json())
        .then(dataJson => {
            const useableData = dataJson.similar.results;

            // Update the state with the new movies
            setMovies(useableData.map(movie => movie.name));

            // Log the movies array to check if it has been updated
            console.log(useableData.map(movie => movie.name));

            // Create an array of Promises to fetch details from TMDb
            const promiseArray = useableData.map(movie => searchMovieTmbd(movie.name));

            // Fetch details for each movie from TMDb
            return Promise.all(promiseArray);
        })
        .then(TmbdResults => {
            // Log the detailed results from TMDb
            
            
            const data = TmbdResults.splice(1,7).flat();
            console.log(data);
            setSugMovies(data);
            
            // setSugMovies(data);

            // console.log(sugMovies.flat());
           
        })
        .catch(error => {
            // Handle any errors
            console.error('Error fetching data:', error);
        });
};



   
   const SearchHandler = () =>
   {
        console.log(refSearchText.current.value);

        const query = refSearchText.current.value;

        fetchSearch(query);
        
   }

  



return (
    <div className='relative'>
        <section className='w-full min-h-screen bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg)] bg-cover bg-center bg-no-repeat'>
            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent'>
                <div className='pt-28 w-full min-h-screen'>
                    {/* SEARCH BAR */}
                    <div className='flex justify-center'>
                        <form className='flex items-center w-full max-w-xl' onSubmit={(e) => { e.preventDefault(); }}>
                            <input
                                ref={refSearchText}
                                type='text'
                                className='w-full px-4 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600'
                                placeholder={languages[languageSelected].placeholder}
                            />
                            <button
                                className='px-6 py-2 bg-red-600 text-white font-semibold rounded-r-md border border-red-600 transition-all duration-300 hover:bg-red-700 focus:outline-none'
                                onClick={SearchHandler}
                            >
                                {languages[languageSelected].search}
                            </button>
                        </form>
                    </div>

                    {/* MOVIE CARDS */}
                    {sugMovies.length > 0 ? (
                        <div className='flex flex-wrap mt-28 justify-center pt-12 bg-black bg-opacity-94 min-h-screen'>
                            {sugMovies.map((obj) => (
                                <div
                                    key={obj.id}
                                    className="overflow-hidden group cursor-pointer flex-shrink-0 bg-black mx-4 mb-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                                >
                                    <img
                                        src={imageUrl + obj?.poster_path}
                                        alt={'Movie Poster'}
                                        className="w-full h-80 object-cover rounded-t-lg"
                                    />
                                    <h1 className="text-lg my-4 px-2 text-center text-white font-semibold truncate">
                                        {obj?.title}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-white text-center text-xl mt-4"></div>
                    )}
                </div>
            </div>
        </section>
    </div>
);



}


export default SearchGpt





















