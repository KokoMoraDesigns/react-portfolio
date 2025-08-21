import React from 'react';


const BlogFeaturedImage = props => {

    if (!props.img) {
        return null;
    } //significa: if props.img === null

    return (
        <div className='featured-image-wrapper'>
            <img src={props.img} />
        </div>

    );
};

export default BlogFeaturedImage;
