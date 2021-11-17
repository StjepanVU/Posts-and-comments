import react from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

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
            <span className="content-span">
            {this.state.posts.map((data) => 
            <div className="card">  
            <h5 className="card-title">{data.title}</h5>
            <div className="card-body">
            <p className="card-text">{data.body}</p>
            <hr></hr>
            <p className="comments-text">Comments: <br></br> est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et</p>
            <a href="" className="btn btn-success content-box-button">Open</a>
            </div>
            </div>
            )}
            </span>
            
            
            
            
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

/* onClick={() => {
    return (
        <Router>
            <Switch>
                <Route exact path="/contentbox" component={ContentBox}/>
            </Switch>
        </Router>
    )
}} */