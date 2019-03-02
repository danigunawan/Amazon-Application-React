import React from "react";
import FormErrors from "./FormErrors";

const NewProductForm = props => {
    const { errors = [] } = props;
    const handleSubmit = event => {
        event.preventDefault();

        const { currentTarget } = event;
        const formData = new FormData(currentTarget);

        props.onSubmit({
            title: formData.get("title"),
            description: formData.get("description"),
            price: formData.get("price")
        });

        // currentTarget.reset();
    };

    return (
        <form className="ProductForm" onSubmit={handleSubmit} >
            <div>
                <label htmlFor="title">Title</label> <br/>
                <FormErrors noField forField="title" errors={errors} />
                <input name="title" id="title" />
            </div>
            <div>
                <label htmlFor="description">Description</label> <br/>
                <FormErrors noField forField="description" errors={errors} />
                <input name="description" id="description" />
            </div>
            <div>
                <label htmlFor="price">Price</label> <br/>
                <FormErrors noField forField="price" errors={errors} />
                <input name="price" id="price" />
            </div>
            <div>
                <input type="submit" value="Submit Product to Sell" />
            </div>
        </form>
    );
};

export default NewProductForm;

////////////////////////////Max integrated NewProductForm into ProductNewPage
// import React, { Component } from "react";
// import { Product } from "../requests";

// class NewProductForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             product: null
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }



//     handleSubmit = event => {
//         event.preventDefault();

//         const { currentTarget } = event;
//         const formData = new FormData(currentTarget);

//         const newProduct = {
//             title: formData.get("title"),
//             description: formData.get("description"),
//             price: formData.get("price")
//         };

//         Product.create(newProduct).then(productFromServer => {
//             // `productFromServer` is an object with the id of the product
//             // we just created
//             //   We now want to redirect the user to the ProductShowPage
//             // for the product we just created
//             //   pushing something onto the end of the history prop
//             // causes a redirect
//             //   history is a prop that is given to all components
//             // rendered by a `Route` component
//             // It is an array of every path the user has been to
//             this.props.history.push(`/products/${productFromServer.id}`);
//           });
          
//         currentTarget.reset();
//     }
//     render () {
//         return (
//             <form className="ProductForm" onSubmit={this.handleSubmit} >
//                 <div>
//                     <label htmlFor="title">Title</label> <br/>
//                     <input name="title" id="title" />
//                 </div>
//                 <div>
//                     <label htmlFor="description">Description</label> <br/>
//                     <textarea name="description" id="description" cols="50" rows="5"></textarea>
//                 </div>
//                 <div>
//                     <label htmlFor="price">Price</label>
//                     <input type="price" id="price" />
//                 </div>
//                 <div>
//                     <input type="submit" value="Submit Product" />
//                 </div>
//             </form>  
//         );
//     }
// };

// export default NewProductForm;