import {useContext, useEffect, useState} from "react";
import {Context} from '../Context'
import {db} from "../firebase";
import MovieCard from "./MovieCard"

function Cheecker() {
    //const {checkMatches} = useContext(Context)
    //const {result} = useContext(Context)
    //const {obj} = useContext(Context)
    const [data, setData] = useState({})
    const [duplicateArray, setDuplicateArray] = useState([])
    const [movies, setMovies] = useState([]);
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [id, setId] = useState(0)
    useEffect(()=>{
        db.collection("User").onSnapshot(snapshot=>{
            let changes = snapshot.docChanges()
            changes.forEach(item=>{
                if(item.doc.id==id){
                    setData(item.doc.data())
                }
            })
        })
    },[id])
    useEffect(()=>{
        let bunch = []
        for(const name in data){
            bunch.push(data[name])
        }
        let ondDBunch = [].concat(...bunch)
        ondDBunch.sort()
        console.log(ondDBunch)
        ondDBunch = ondDBunch.filter((value, index, self) => self.indexOf(value) !== index)
        console.log(ondDBunch)
        setDuplicateArray(ondDBunch)
        setDuplicateArray(movies => movies.filter(movie=>movie!=="KevinAddedItem0"))
        console.log(duplicateArray)
    },[data])

    /* useEffect(()=>{
        if(duplicateArray.length>0){
            duplicateArray.map(movieName=>{
                console.log(movieName)
                //searchMovies(movieId)
            })
        }
    },[duplicateArray]) */
    useEffect(()=>{
        console.log(selectedMovies)
    },[selectedMovies])

    const searchMovies = async (movieId) => {  
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US`;
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results);
            console.log("selectedMovies")
            console.log(selectedMovies)
        }catch(err){
            console.error(err);
        }
    }
    /* const checkMatches = moviesArray =>{
        let index
        const dupes = []
        for(let i = 0;i<moviesArray.length;i++){
            index = Math.abs(moviesArray[i])-1

            if(moviesArray[i]<0){
                dupes.push(index +1)
            }else{
                moviesArray[index] *= -1
            }
        }
    } */
    /* implement an input box to get the id and show the movie card based on the movie id and the API */
    //let i = result.map(r=><h9>{r}</h9>)
    return (
        <div className="App">
        <header className="App-header">
            <h1>Cheecker page</h1>
            <input 
                type="text" 
                value={id} 
                name="id" 
                placeholder="EnterId" 
                onChange={(event)=>{
                    setId((event.target.value).toString())
                    movies.map(movieId=>searchMovies(movieId))
                }} 
            />
        </header>
        {/* <div className= "grid grid-cols-3 gap-4 p-12 bg-gray-900">
            {movies!=undefined?movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} key={movie.id} />
            )):<h2>We are getting your movies</h2>
            }
        </div> */}
        <div className= "grid grid-cols-3 gap-4 p-12 bg-gray-900">
            {duplicateArray.map(movie=><h2 key={movie}>{movie}</h2>)}
        </div>
        </div>
    );
}
  
export default Cheecker;