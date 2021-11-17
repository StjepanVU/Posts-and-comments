import react from "react";

class ContentBox extends react.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            posts: [],
        }
            
    } 

    componentDidMount() {
        
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data
                })
            } )
    }

 
    render() {
        return (
            <div>
            {this.state.posts.map((data) => 
            <div className="card">  
            <h5 className="card-title">{data.title}</h5>
            <div className="card-body">
            <p className="card-text">{data.body}</p>
            <a href="#" className="btn btn-success content-box-button">Open</a>
            </div>
            
            </div>
            )}
            </div>
            
            
            
            
        )
    }
}

export default ContentBox


/* {this.state.posts.map((data) => 
    <h5 className="card-title">{data.title}</h5>
    )} */


/*<div className="card"> 
    <h5 className="card-title">{data.title}</h5>
    <div className="card-body">
    <p className="card-text">{data.body}</p>
    <a href="#" className="btn btn-success content-box-button">Open</a>
    </div>
</div> */