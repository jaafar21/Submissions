import React from 'react';

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return (
            <header className="Header">
            <figure>
              <img src="/assets/youtube.png" alt=""/>
            </figure>

            <div className="navbar">
            <form class="navbar-form navbar-left" role="search">
              <input type="text" class="form-control" placeholder="Search"></input>
            
            <button type="submit" class="btn btn-default">Submit</button>
            
            </form>
            </div>

            <div className="Bell">
            <img src="/assets/Bell.png" alt=""/>
          </div>

          </header>
        );
    }
}

export default Header;