import './index.css'

const PlanetItem = props => {
  const {itemsList} = props
  const {name, imageUrl, description} = itemsList

  return (
    <div className="list-cont">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="heading1">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItem
