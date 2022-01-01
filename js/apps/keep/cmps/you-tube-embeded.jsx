

export function YoutubeEmbed ({ embedId} ) {
// console.log(embedId);
const embedUrl = (embedId) => {
  return embedId.replace('https://www.youtube.com/watch?v=', '');
};

return <div className="video-responsive">
    <iframe
      width="260"
      height="200"
      src={`https://www.youtube.com/embed/${embedUrl(embedId)}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>

}
