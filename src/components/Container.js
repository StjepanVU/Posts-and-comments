import react from "react";
import ContentBox from "./ContentBox";

class Container extends react.Component {
    
    render() {
        const componentName = "Container"
        const message = "Hello from "
        
        console.log(`${this.props.message} ${componentName}`)
        return (
            <div className="shadow-lg p-3 mb-5 bg-body rounded container">
                <div className="col-md-10 content-container">
                    <ContentBox message={`${message}`}/>
                </div>    
            </div>
        )
    }
}

export default Container;