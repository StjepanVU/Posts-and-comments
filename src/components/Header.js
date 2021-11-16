import react from "react";

class Header extends react.Component {
    render() {
        return (
            <header>
                <div className="row">
                    
                    <div className="col-md-6 offset-1 border header-div">
                        {/* <span className="menu logo"><img src="https://protostar.ai/wp-content/uploads/2019/10/aple.png"/></span> */}
                        <span className="menu"><p>Home</p></span>
                        <span className="menu"><p>JSON</p></span>
                        <span className="menu"><p>Contact</p></span>
                    </div>
                    
                    <div className="col-md-1 border bg-white search-div">

                    </div>
                </div>
            </header>
        )
    }
}

export default Header