import react from "react";
import ContentBox from "./ContentBox";

class Container extends react.Component {
    
    render() {
        const message = "Hello from "
        const contentBox = "Content box"
        console.log(this.props.name)
        return (
            <div className="shadow-lg p-3 mb-5 bg-body rounded container">
                <div className="col-md-10 content-container">
                    <ContentBox name={`${message} ${contentBox}`}/>
                </div>    
            </div>
        )
    }
}

export default Container;