const Person = ({name, location, picture, email, login}) => (
  <div className="person">
    <div className="image">
      <img src={picture.large} />
    </div>
    <div className="info">
      <p>{name.first} {name.last} | @{login.username}</p>
      <p>{location.city} - {location.state}</p>
      <p>{email}</p>
    </div>
  </div>
)

export default Person
