import { Link } from "react-router-dom";
import {useContext, useState} from "react";
import {Context} from '../Context'

function NewSession() {
    const {currentId} = useContext(Context)
    const {handleAdd} = useContext(Context)
    const {requestNewId} = useContext(Context)
    const [name,setName]=useState("")

    const handleName=event=>{
        setName(event.target.value)
    }

    return (
        <div className="bg-blue-200 p-8 flex justify-center">
            <div className="grid grid-cols-2 gap-4 p-12 border-2 w-2/6 h-4/6 justify-items-center">
                <div className="m-16">
                    <h3>Hello from NewSession the id is {currentId}</h3>
                </div>
                <div className="App-Header">
                    <h1>Double click to requestNewId</h1>
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        onClick={()=>requestNewId(name)}
                        >requestNewId</button>
                    <label>User Name</label>
                    <input 
                        className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text" 
                        value={name} 
                        name="name" 
                        placeholder="User Name" 
                        onChange={handleName} 
                    />

                    <button 
                        className="flex items-center px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                        onClick={()=>handleAdd(name)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        handle Add
                    </button>
                    <button><Link to = "/chooser">Go to Chooser</Link></button>
                </div>
            </div>
        </div>
    );
}
  
export default NewSession;