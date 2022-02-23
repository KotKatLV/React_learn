import React, {useEffect, useState} from 'react';


const Notification = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 2500)
        return () => clearTimeout(timeout);
    }, []);

    return(
        <div>
            { visible && <p>Hello</p>}
        </div>
    )
}

export default Notification;

// const App = () => {
//
//     const [value, setValue] = useState(0);
//     const [visible, setVisible] = useState(true);
//
//     if (visible){
//         return(
//             <div>
//                 <button
//                     onClick={() => setValue((v) => v + 1)}>
//                     +
//                 </button>
//                 <button
//                     onClick={() => setVisible(false)}>hide</button>
//                 <Notification />
//             </div>
//         )
//     }
//     else {
//         return <button onClick={() => setVisible(true)}>show</button>
//     }
// }