import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
// import ProductShowPage from "./components/ProductShowPage"
import * as serviceWorker from './serviceWorker';

import App from "./components/App";

// const ProductDetails = () => {
//     return (
//         <div>
//             <h1>What is your favourite product on Amazon?</h1>
//             <p>Divine's OG</p>
//             <p>By Original God</p>
//             <p>
//                 <small>Seen a million time(s)</small> • 
//                 <small>Created 13.56 billion years ago</small> •
//                 <small>Last edited just now</small>
//             </p>
//         </div>
//     );
// };

// const ReviewDetails = () => {
//     return (
//         <div>
//             <p>Of all the rooms to burn in your uncle's home...The kitchen! Are you mad, boy?</p>
//             <p><small>By Ulises Wisozk</small></p>
//             <p><small>Created 1 day ago</small></p>
//         </div>
//     );
// };

// const ProductShowPage = () => {
//     return (
//         <div>
//             <ProductDetails />
//             <h1>Reviews</h1>
//             <ReviewDetails />
//         </div>
//     )
// }



// ReactDOM.render(<ProductDetails />, document.getElementById('root'));
// ReactDOM.render(<ReviewDetails />, document.getElementById('root'));
// ReactDOM.render(<ProductShowPage />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
