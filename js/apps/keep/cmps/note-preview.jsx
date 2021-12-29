const { Link, Route } = ReactRouterDOM;

export function NotePreview({ note }) {
  // let title = note.title;
  // console.log('title:', title);
  // title = title.charAt(0).toUpperCase() + note.title.slice(1);

  switch (note.type) {
    case 'note-txt':
      return (
        <article className={`note-preview card`}>
          <h4>Note-Type: {note.info.txt}</h4>
          {note.isPinned && <h1>PINNED </h1>}
        </article>
      );

    case 'note-img':
      console.log(note.info.url);
      return (
        <article className={`note-preview card`}>
          <h4>{note.title} </h4>
          <img src={note.info.url} alt='img' />

          {/* <h4>Note-Type: {note.type}</h4> */}
        </article>
      );
    case 'note-todos':
      return (
        <article className={`note-preview card`}>
          {/* <img src={note.thumbnail} alt="img" /> */}
          {/* <h4>Title: {note.title.charAt(0).toUpperCase() + note.title.slice(1)} </h4> */}
          <h4>Note-Type: {note.type}</h4>
        </article>
      );
    default:
      return null;
  }
}
