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
    /* Ovdje nisam uspio omoguciti da ispisuje komentare u Content Box, iako mi u konzoli dobro ispisuje generirani array komentara za svaki post,
    nisam skuzio gdje radim gresku, dodao sam dummy tekst u Comment konejner da ne bude prazno, search box i route-ove nisam stigao implementirati do zadanog roka*/
    
    fetchCommentsRoute(id) {
        var comments = []
        var comment = ""
        
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(response => response.json())
                .then(data => {
                    comment = data.map(comment=>comment.body)
                    for(var i=0; i < comment.length; i++ ){
                        comments.push(comment[i])
                    }
                    // console.log(comments)
                }
                )
        
        
        console.log(`${id}:`)
        
        console.log(comments)
         
        return (
            comments.map((comm)=>
                 
                    <li>{comm}</li>
                )
            )
        
     }     

           


    
    
    render() {
        var comment = []
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

                <div className="comments-text">
                Comments: <br></br>
                {data.id}
                <ul>{this.fetchCommentsRoute(data.id)}</ul>
                
                </div>
                
                
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



/* fetchComments(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
       .then(response => response.json())
       .then(result => console.log(result))
 } */



 
