import react from "react";

class Header extends react.Component {
    render() {
        return (
            <header>
                <div className="row">
                    
                    <div className="col-md-6 offset-1 border header-div">
                        
                        <p className="menu-item logo"><img src="https://protostar.ai/wp-content/uploads/2019/10/aple.png" 
                        width="40" height="40"/>
                        </p>
                        <p className="menu-item menu-text">Home</p>
                        <p className="menu-item menu-text">JSON</p>
                        <p className="menu-item menu-text">Contact</p>
                        
                    </div>
                    
                    <div className="col-md-1 border bg-white search-div">

                    </div>
                </div>
            </header>
        )
    }
}

export default Header