import {useEffect, useState} from "react";
import {db} from "../firebase";

function Cheecker() {
    const [data, setData] = useState({})
    const [duplicateArray, setDuplicateArray] = useState([])
    const [movies, setMovies] = useState([]);
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [id, setId] = useState(0)

    //get movies based on user id
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

    //Get duplicate values(same movies) from the users
    useEffect(()=>{
        let bunch = []
        for(const name in data){
            bunch.push(data[name])
        }
        let ondDBunch = [].concat(...bunch)
        ondDBunch.sort()
        ondDBunch = ondDBunch.filter((value, index, self) => self.indexOf(value) !== index)
        setDuplicateArray(ondDBunch)
        setDuplicateArray(movies => movies.filter(movie=>movie!=="KevinAddedItem0"))
    },[data])

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
                }} 
            />
        </header>
        <div className= "grid grid-cols-3 gap-4 p-12 bg-blue-900">
            {duplicateArray.map(movie=><h2 key={movie}>{movie}</h2>)}
        </div>
        </div>
    );
}
  
export default Cheecker;