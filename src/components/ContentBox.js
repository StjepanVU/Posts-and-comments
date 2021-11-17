import react from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

class ContentBox extends react.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            posts: [],
            comments: ""
            
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
            
        /* fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
            .then((response) => response.json())
            .then(data => {
                this.setState({
                    comments: data
                })
            }) */

        }
        
        fetchComments(postsId) {
            
            return <p>
                Comments:<br></br>
                {`https://jsonplaceholder.typicode.com/posts/${postsId}/comments`}
                </p>
                           
        }


 
   


    
 
    render() {
        
        const componentName = "Content box"
        console.log(`${this.props.message} ${componentName}`)
        return (
            <span className="content-span">
            {this.state.posts.map((data) => 
            <div key={data.id} className="card">  
            <h5 className="card-title">{data.title}</h5>
            <div className="card-body">
            <p className="card-text">{data.body}</p>
            <hr></hr>
             
            {/* <p key={data.id} className="comments-text">Comments:<br></br>
            </p> */}
            {this.fetchComments(data.id)}
            
            
            
            <a href="" className="btn btn-success content-box-button">Open</a>
            </div>
            </div>
            )}
            </span>
            
            
            
            
            
        )
    }
}

export default ContentBox


