import Person from './Person'

const PersonList = ({people, title}) => (
    <section id={title.toLowerCase().replace(/ /g, "-")}>
        <h1>{title}</h1>
        <div className="person">
            {people.map((person, index) =>
                <Person key={index} {...person} />
            )}
        </div>
    </section>
)

export default PersonList
