import react from "react";
import ContentBox from "./ContentBox";

class Container extends react.Component {
    
    render() {
        console.log("Hello from " + this.props.name)
        return (
            <div className="shadow-lg p-3 mb-5 bg-body rounded container">
                <div className="col-md-10 content-container">
                    <ContentBox name="Content box"/>
                </div>    
            </div>
        )
    }
}

export default Container;