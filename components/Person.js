const Person = ({name, location, picture, email, login}) => (
    <div>
        <img src={picture.large} />
        <p>{name.first} {name.last} | @{login.username}</p>
        <p>{location.city} - {location.state}</p>
        <p>{email}</p>
    </div>
)

export default Person
