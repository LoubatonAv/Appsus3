export class AddNote extends React.Component {
  state = {
    email: {
      to: '',
      subject: '',
      body: '',
    },
  };

  switchInputType = () => {}
  // handleChange = ({ target }) => {
  //   const field = target.name;
  //   const value = target.value;
  //   this.setState((prevState) => ({
  //     review: { ...prevState.review, [field]: value },
  //   }));
  // };

  render() {
    console.log(this.state);
    return (
      <section className='note-add-screen flex space-between column'>
        <h1>Add A New Note</h1>
        <div className="">INPUT</div>
        <button className="btn primary-btn" onClick={this.props.toggleNoteModal}>
            <i className="fa fa-trash"></i></button>
        <div className="ui-buttons container">
          

          <button className="btn primary-btn" onClick={this.switchInputType}>
            <i className="fa fa-align-center"></i></button>

          <button className="btn primary-btn" onClick={this.props.toggleNoteModal}> <i className="fa fa-paint-brush"></i></button>

          <button className="btn primary-btn" onClick={this.props.toggleNoteModal}><i className="fa fa-map-pin"></i></button>

          <button className="btn primary-btn"><i className="fa fa-share-alt" onClick={this.props.toggleNoteModal}></i></button>
        </div>
      </section>
    );
  }
}

// <div className='review-modal'>
// <form onSubmit={this.onSaveReview} className='review-form'>
//   <label htmlFor='by-fullname'>Full name:</label>
//   <input
//     placeholder='Enter full name'
//     name='fullName'
//     type='text'
//     id='by-fullname'
//     value={fullName}
//     onChange={this.handleChange}
//     autoComplete='off'
//   />
//   <button>Add review</button>
// </form>
// </div>