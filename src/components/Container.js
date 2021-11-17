import react from "react";
import ContentBox from "./ContentBox";

class Container extends react.Component {
    render() {
        return (
            <div className="shadow-lg p-3 mb-5 bg-body rounded container">
                <div className="col-md-10 content-container">
                    <ContentBox/>
                </div>    
            </div>
        )
    }
}

export default Container;