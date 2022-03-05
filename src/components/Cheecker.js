import {useContext, useEffect} from "react";
import {Context} from '../Context'

function Cheecker() {
    const {checkMatches} = useContext(Context)
    const {result} = useContext(Context)
    const {obj} = useContext(Context)

    useEffect(()=>checkMatches(),[obj])
    
    let i = result.map(r=><h9>{r}</h9>)
    return (
        <div className="App">
        <header className="App-header">
            <h3>Hello from Cheecker</h3>
            {i}
        </header>
        </div>
    );
}
  
export default Cheecker;