import react from "react";

class ContentBox extends react.Component {
    render() {
        return (
        <div className="card">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEXJ/sbBPDujAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" 
        className="card-img-top" alt="..."
        width="50px" height="50px"/>

        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-success content-box-button">Open</a>
        </div>
        </div>
        )
    }
}

export default ContentBox