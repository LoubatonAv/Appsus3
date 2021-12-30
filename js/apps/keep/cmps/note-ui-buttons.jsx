

const { Link, Route } = ReactRouterDOM



export function NoteUIButtons({ ...props }) {
  // console.log('props: ', props)
  // console.log('note.id: ', note.id)
  // console.log('remove note: ', onRemoveNote)

  return <div className="ui-buttons container">
    <button className="btn primary-btn" onClick={() => props.onRemoveNote(props.note.id)}>
      <i className="fa fa-trash"></i></button>
    <button className="btn primary-btn">
      <i className="fa fa-align-center"></i></button>
    <button className="btn primary-btn"> <i className="fa fa-paint-brush"></i></button>
    <button className="btn primary-btn"><i className="fa fa-map-pin"></i></button>
    <button className="btn primary-btn"><i className="fa fa-share-alt"></i></button>
  </div>

}
