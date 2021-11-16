import react from "react";
import ContentBox from "./ContentBox";

class Container extends react.Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-10 content-container">
                    <ContentBox/>
                </div>    
            </div>
        )
    }
}

export default Container;