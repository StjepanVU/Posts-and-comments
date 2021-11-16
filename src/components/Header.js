import react from "react";

class Header extends react.Component {
    render() {
        return (
            <header>
                <div class="row">
                    
                    <div class="col-md-6 offset-1 border header-div">
                        <span class="menu">Home</span>
                        <span class="menu">JSON</span>
                        <span class="menu">Contact</span>
                    </div>
                    
                    <div class="col-md-1 border bg-white offset-1 search-div">

                    </div>
                </div>
            </header>
        )
    }
}

export default Header