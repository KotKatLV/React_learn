import React, {useContext} from 'react';

const MyContext = React.createContext();

const Child = () => {
    const value = useContext(MyContext);
    return <p>{ value }</p>
}

export default Child;

// const App = () => {
//     return(
//         <MyContext.Provider value="Hello world 123">
//             <Child />
//         </MyContext.Provider>
//     )
// }