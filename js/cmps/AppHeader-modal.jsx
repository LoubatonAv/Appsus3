const { NavLink, withRouter } = ReactRouterDOM;

export class _AppHeaderModal extends React.Component {

  // function = console.log('executiing')

  render() {
    return (
      <div className='app-header-matrix'>
        <div className='nav-btn-div-exit clean-link' onClick={() => this.props.toggleHeaderModal()}><i className="fa fa-times"></i></div>
        <NavLink exact to='/'>
          <div className='nav-btn-div home clean-link'><i className="fa fa-home"></i></div>
        </NavLink>
        <NavLink to='/about'>
          <div className='nav-btn-div clean-link'><i className="fa fa-address-card"></i></div>
        </NavLink>
        <NavLink to='/book'>
          <div className='nav-btn-div clean-link'><i className="fa fa-book"></i></div>
        </NavLink>
        <NavLink to='/Email'>
          <div className='nav-btn-div clean-link'><i className="fa fa-envelope"></i></div>
        </NavLink>
        <NavLink to='/note'>
          <div className='nav-btn-div clean-link'><i className="fa fa-sticky-note"></i></div>
        </NavLink>
        
      </div>

    );
  }
}

// export const _AppHeaderModal = withRouter(_AppHeaderModal);
