import react from "react";

class Header extends react.Component {
    
    render() { 
        const componentName = "Header"
        console.log(`${this.props.message} ${componentName}`) 
        return (
            <header>
               
                <div className="row">
                    
                    <div className="col-md-6 offset-1 border header-div">
                        
                    
                    <p className="menu-item logo">
                    <a href="https://protostar.ai/" target="_blank">   
                    <img src="https://protostar.ai/wp-content/uploads/2019/10/aple.png" 
                    width="40" height="40"/>
                    </a>
                    </p>
                    
                    
                   
                    <p className="menu-item menu-text">
                    <a href="">Home
                    </a>
                    </p>
                    
                    
                    
                    <p className="menu-item menu-text">
                    <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSON
                    </a>
                    </p>
                    
                    
                   
                    <p className="menu-item menu-text">
                    <a href="https://linkedin.com/in/stjepan-miličić-348927220" target="_blank">Contact
                    </a>
                    </p>
                       
                    
                    </div>
                    
                    <div className="col-md-2 bg-white search-div">
                        {/* Search engine */}
                        
                        <input id="search" className="search-bar" type="text"></input><h5 className="search-text">search</h5>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header