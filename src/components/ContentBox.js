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
                // console.log(data)
            } )
            

        }
        
    // https://jsonplaceholder.typicode.com/posts/1/comments

    fetchComments(userId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
           .then(response => response.json())
           .then(result => console.log(result))
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
            <p className="comments-text">
            Comments: <br></br>    
            {this.fetchComments(data.id)}
            {data.id}
            </p>
            
            
            <a href="" className="btn btn-success content-box-button">Open</a>
            </div>
            </div>
            )}
            </span>
            
            
            
            
            
        )
    }
}

export default ContentBox




/* fetchComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`) 
            .then(response => response.json())
            .then(data=> {
                var comments = []
                for(var i = 0; i < data.length; i++) {
                    comments.push(data[i].body)
                    console.log(` Name: ${data[i].name}`)
                    console.log(`Comments: ${comments}`)
                }
                return comments
                    
                    
                })  
                        
} */