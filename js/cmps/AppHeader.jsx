const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {

    render() {
        return (
            <header className="app-header" >
                <div className="header-logo">
                    <h1 onClick={() => this.props.history.push('/')}>Books R Us</h1>
                </div>
                <nav className="main-nav">
                    <NavLink exact to="/">
                        <div className="nav-btn-div home">
                            Home
                        </div>
                    </NavLink>
                    <NavLink to="/about">
                        <div className="nav-btn-div">
                            About
                        </div>
                    </NavLink>
                    <NavLink to="/book">
                        <div className="nav-btn-div">
                            Our Books
                        </div>
                    </NavLink>
                    <NavLink to="/book">
                        <div className="nav-btn-div">
                            Email
                        </div>
                    </NavLink>
                    <NavLink to="/note">
                        <div className="nav-btn-div">
                            Note
                        </div>
                    </NavLink>
                </nav>
            </header>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)