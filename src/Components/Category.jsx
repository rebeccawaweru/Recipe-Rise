function Category({image, title, caption}) {
    return (
        <div>
            <div style={{flexWrap:"wrap"}} className="categorystyle">
            <img style={{flexWrap:"wrap"}}className="category-image" src={image} alt="pic" />
            <p>{title}</p>
            <p>{caption}</p>
            </div>
            </div>
        );
}

export default Category;