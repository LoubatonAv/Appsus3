import { _AppHeaderModal } from '../cmps/AppHeader-modal.jsx'

const { NavLink, withRouter } = ReactRouterDOM;

class _AppHeader extends React.Component {

  state = {
    isShowHeaderModal: false,
  }


  toggleHeaderModal = () => {
    // console.log('excepturi');
    this.setState((prevState) => ({
      ...prevState, isShowHeaderModal: !this.state.isShowHeaderModal,
    }));
  };

  render() {
    // console.log('sdf: ', this.state.isShowHeaderModal);
    return (
      <header className='app-header'>
        <div className='header-logo'>
          <h1 onClick={() => this.props.history.push('/')}>Appsus</h1>
        </div>
        <div className='app-header-matrix-button' onClick={this.toggleHeaderModal}><i className="fa fa-th"></i></div>
        {this.state.isShowHeaderModal && <_AppHeaderModal toggleHeaderModal={this.toggleHeaderModal} />}
      </header>
    );
  }
}

export const AppHeader = withRouter(_AppHeader);
