import React,{useState,useEffect} from "react"
import {db} from "./firebase"

const Context = React.createContext()

function ContextProvider({children}) {

    const [currentId,setCurrentId] = useState(3)
    const [name,setName] = useState("Emily")
    const [obj,setObj] = useState({})
    const [result,setResult] = useState([])

    useEffect(()=>{
        //------THE MAIN METHOD UNCOMMENT IT BEFORE DEPLOYMENT-----------//
        db.collection("User").onSnapshot(snapshot=>{
            let changes = snapshot.docChanges()
            changes.forEach(item=>{
                //console.log("From context "+item.doc.data())
                //console.log("From context "+item.doc.id)
                if(parseInt(item.doc.id)>=0){
                    setCurrentId(item.doc.id)
                }
                if(item.doc.id==currentId){
                    setObj(item.doc.data())
                    setCurrentId(item.doc.id)
                }
            })
        }) 
        /* db.collection("User").onSnapshot(snapshot=>{
            let changes = snapshot.docChanges()
            changes.forEach(item=>{
                
                //console.log(item.doc.id)
                if(parseInt(item.doc.id)>=0){
                    setCurrentId(item.doc.id)
                } 
            })
        }) */
    },[])
    
    //console.log("current id from context "+currentId)
    
    const requestNewId = name =>{
        setName(name)
        setCurrentId(prevId=>{
            let currentId = parseInt(prevId)
            currentId++
            return(currentId.toString())
        })
        db.collection("User").doc(currentId).set({
            [name] : ["KevinAddedItem0"]
        },{merge:true})
    }

    const handleDelete = id =>{
        db.collection("User").doc(id).delete()
        console.log("handleDelete button Clicked")
    }

    const handleAdd = name =>{
        setName(name)
        db.collection("User").doc(currentId).set({
            [name] : ["KevinAddedItem0"]
        },{merge:true})
    }

    const addMovie=(movie_id)=>{
        db.collection("User").doc(currentId).update({
            [name]:window.firebase.firestore.FieldValue.arrayUnion(movie_id)
        })
    }

    const checkMatches=(id)=>{
        
        /* var docRef = db.collection("User").doc(currentId.toString());
        docRef.get().then((doc) => {
            if (doc.exists) {
                setObj(doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document! " + currentId);
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        }); */
         
        //console.log(obj)
        
        /* db.collection("User").onSnapshot(snapshot=>{
            let changes = snapshot.docChanges()
            changes.forEach(item=>{
                if(item.doc.id==id){
                    setObj(item.doc.data())
                    setCurrentId(item.doc.id)
                }
                //console.log(item.doc.id)
                if(parseInt(item.doc.id)>=0){
                    setCurrentId(item.doc.id)
                } 
            })
        }) */
    
        let bunch = []
        /* for (const [key, value] of Object.entries(obj)) {
            console.log(key)
            //console.log(`${value}`);
        } */
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)  
        //console.log(findDuplicates(bunch))
        setResult(findDuplicates(bunch)); 
        console.log(obj)
        console.log("current Id " + currentId)
        //console.log("result is "+result)
    }

    return (
        <Context.Provider value={
            {
                setName,
                name,
                setCurrentId ,
                currentId,
                handleDelete,
                handleAdd,
                addMovie,
                requestNewId,
                checkMatches,
                result,
                obj
            }
        }>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}