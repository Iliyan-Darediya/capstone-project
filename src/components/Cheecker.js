import {useContext, useEffect, useState} from "react";
import {Context} from '../Context'
import {db} from "../firebase";
function Cheecker() {
    //const {checkMatches} = useContext(Context)
    const {result} = useContext(Context)
    const {obj} = useContext(Context)
    const [data, setData] = useState({})
    const [duplicateArray, setDuplicateArray] = useState([])
    useEffect(()=>{
        db.collection("User").onSnapshot(snapshot=>{
            let changes = snapshot.docChanges()
            changes.forEach(item=>{
                if(item.doc.id==9){
                    setData(item.doc.data())
                }
            })
        })
    },[])
    useEffect(()=>{
        let bunch = []
        for(const name in data){
            bunch.push(data[name])
            //console.log(data[name])
        }
        let ondDBunch = [].concat(...bunch)
        ondDBunch.sort()
        setDuplicateArray([...new Set(
            ondDBunch.filter((value, index, self) => self.indexOf(value) !== index))]
        );
        setDuplicateArray(duplicateArray.filter(movie=>movie!=="KevinAddedItem0"))
    },[data])
    useEffect(()=>{
        console.log(duplicateArray)
    },[duplicateArray])
    
    const checkMatches = moviesArray =>{
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
    }
    
    let i = result.map(r=><h9>{r}</h9>)
    return (
        <div className="App">
        <header className="App-header">
            <h1>Cheecker page</h1>
        </header>
        </div>
    );
}
  
export default Cheecker;