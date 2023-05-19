import './index.css'

const ImageItems = props => {
  const {imageDetails, onThumbnailClick} = props
  const {thumbnailUrl, id} = imageDetails

  const onImageClick = () => {
    onThumbnailClick(id)
  }

  return (
    <li className="img-container">
      <button type="button" onClick={onImageClick} className="img-btn">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default ImageItems
