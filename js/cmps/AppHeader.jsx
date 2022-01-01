const { NavLink, withRouter } = ReactRouterDOM;

class _AppHeader extends React.Component {
  render() {
    return (
      <header className='app-header'>
        <div className='header-logo'>
          <h1 onClick={() => this.props.history.push('/')}>Appsus</h1>
        </div>
        <nav className='main-nav'>
          <img src='assests/imgs/four-squares-10585 (1).png'></img>
          <NavLink exact to='/'>
            <div className='nav-btn-div home'>Home</div>
          </NavLink>
          <NavLink to='/about'>
            <div className='nav-btn-div'>About</div>
          </NavLink>
          <NavLink to='/book'>
            <div className='nav-btn-div'>Books</div>
          </NavLink>
          <NavLink to='/Email'>
            <div className='nav-btn-div'>Email</div>
          </NavLink>
          <NavLink to='/note'>
            <div className='nav-btn-div'>Note</div>
          </NavLink>
        </nav>
      </header>
    );
  }
}

export const AppHeader = withRouter(_AppHeader);
