import react from "react";


class ContentBox extends react.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            posts: [],
            comments:[]
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
        
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    comments: data
                    
                })
                
            } )
            

        }
        
    
    
    findComments(id) {
        var comments = this.state.comments
        var postComments = []
        var eMail = []
        comments.map((comments)=> {
            if(id === comments.postId) {
                postComments.push(comments.body)
                eMail.push(comments.email)
            }
        })

        return postComments.map((comment)=> 
            <div>
            <li>{eMail.shift()}:<br></br>{comment}</li>
            <hr></hr>
            </div>
            )
        
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

                <div className="comments-text">
                Comments:
                <br></br>
                <ul className="comments-list">
                {this.findComments(data.id)}
                </ul>
                {/* laudantium enim quasi est quidem magnam voluptate ipsam eos
                ntempora quo necessitatibus ndolor quam autem quasi
                nreiciendis et nam sapiente accusantium */} 
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




/* fetchCommentsRoute(id) {
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
    
    
    return comments.map((comm)=>{
        <li>{comm}</li>
    })
    
} */



 
