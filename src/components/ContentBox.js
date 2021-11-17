import react from "react";

class ContentBox extends react.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            post: "",
            title: ""
        }
            
    } 

    componentDidMount() {
        
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    post: data.body,
                    title: data.title
                })
            } )
    }

 
    render() {
        return (

        <div className="card">
        <h5 className="card-title">{this.state.title}</h5>
        {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEXJ/sbBPDujAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" 
        className="card-img-top" alt="..."
        width="50px" height="50px"/> */} 
        <div className="card-body">
        <p className="card-text">{this.state.post}</p>
        <a href="#" className="btn btn-success content-box-button">Open</a>
        </div>
        </div>
        
        )
    }
}

export default ContentBox




 /*    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts/") 
               .then(response => response.json())
               .then(data => {
                   this.setState({
                       userId = data.userId,
                       id = data.id,
                       title = data.title,
                       body = data.body
                   })
               })
           
           response.map(data => <ComponentBox 
            key= {data.id} 
            userId = {data.userId}
            title = {data.title}
            body = {data.body} />
               
           )
       } */



/*        this.setState({
        userId: data.userId,
        id: data.id,
        title: data.title,
        body: data.body

    }) */