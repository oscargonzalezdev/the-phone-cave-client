import { NavLink } from "react-router-dom";

export default function PhonesList(props) {
    const renderPhones = () => {
        const result = props.phones.map( (element, index) => {
            return (
                <div key={index} className="project-summary box">
                    <h1>{element.name}</h1>
                    <p>{element.manufacturer}</p>
                    <NavLink to={`/phones/:${element.id}`}>More details</NavLink>
                </div>
            )
        });
        return result;
    }

    return(
        <>
        <h1>List of Phones</h1>

        <section>
            { props.phones === null
               ? <p>loading...</p>
               : renderPhones()
           }
        </section>
        </>
    )
}