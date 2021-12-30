export class MailFilter extends React.Component {
  state = {
    filterBy: {
      isRead: false,
    },
  };

  render() {
    const { isRead } = this.state.filterBy;
    return (
      <form className='car-filter' onSubmit={this.onSubmitFilter}>
        <label htmlFor='by-read'>Read/Unread:</label>
        <input type='text' id='by-read' value={isRead} />
      </form>
    );
  }
}
