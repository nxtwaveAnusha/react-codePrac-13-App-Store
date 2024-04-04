import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {appName, imageUrl} = appItemDetails

  return (
    <li className="app-item-container">
      <img src={imageUrl} className="app-img" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
