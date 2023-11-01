function Category({image, title, caption}) {
    return (
        <div className="category">
            <img src={image} alt="category"/>
            <p>{title}</p>
            <p>{caption}</p>
        </div>
    );
}

export default Category;