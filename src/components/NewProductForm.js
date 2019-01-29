import React from "react";

const NewProductForm = props => {
    const handleSubmit = event => {
        event.preventDefault();

        const { currentTarget } = event;
        const formData = new FormData(currentTarget);

        props.onSubmit({
            title: formData.get("title"),
            description: formData.get("description")
        });

        currentTarget.reset();
    }

    return (
        <form className="ProductForm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label> <br/>
                <input name="title" id="title" />
            </div>
            <div>
                <label htmlFor="description">Description</label> <br/>
                <textarea name="description" id="description" cols="50" rows="5"></textarea>
            </div>
            <div>
                <input type="submit" valu="Submit Product" />
            </div>
        </form>  
    );
};

export default NewProductForm;