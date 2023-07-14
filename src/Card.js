function Card(props) {


    return (<div id={props.CardIdName} className="card" key={props.keyval}>
        <img
            src={props.CardImageSrc}
            className="card-img-top" alt=""></img>
        <div className="card-body">
            <h5 className="card-title">{props.CardTitle}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                the
                card's
                content.</p>
        </div>
        <div className={"btdiv"}>
            <button onClick={props.updateProduct} className="btn btn-primary">Update</button>
            <button onClick={props.Del} className="btn btn-danger">Delete</button>
        </div>

    </div>)

}

export default Card