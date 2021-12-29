export class SendMail extends React.Component {
  state = {
    email: {
      to: '',
      subject: '',
      body: '',
    },
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({
      review: { ...prevState.review, [field]: value },
    }));
  };

  render() {
    console.log(this.state);
    return (
      <section className='review-add'>
        <div className='review-modal'>
          <form>
            <input></input>
            <button>Click</button>
          </form>
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
