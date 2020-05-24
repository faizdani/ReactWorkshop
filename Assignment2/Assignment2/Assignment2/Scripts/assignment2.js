//
const data = [
    {
        name: "Shinto Thomas",
        email: "sthomas@suyati.com",
    },
    {
        name: "Praphul",
        email: "pnangeelil@suyati.com",
    },
    {
        name: "Shamnad V A",
        email: "sabdul@suyati.com",
    },
];

const style = {
    "borderSpacing": "5px"
}

const ContactList = (props) => {

    const contact = props.contact;

    return <table style={style}>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {contact.map((contact, i) => {
                return <tr key={i}>
                    <td> {contact.name}</td>
                    <td>{contact.email}</td>
                </tr>
            })}
        </tbody>
    </table>
};


const contactM = <section id="contact-list">
    <h1>Contacts</h1>
    <ContactList contact={data}></ContactList>
</section>

const props = {
    contact: data,

}

// const contactManagement = React.createElement(
//   "section",
//   { id: "contact-list" },
//   React.createElement("h1", null, "Contacts"),
//   React.createElement(ContactList, { contacts: data }, null)
// );

ReactDOM.render(contactM, document.getElementById("react-container"));

//React Fragment Example
function FragmentExample() {
    return (
        <React.Fragment>
            <h2>React JS Workshop </h2>
            <p> Assignment 2</p>
        </React.Fragment>

    )
}

//const fragmentElement = <section id="assignmentHeading">
//    <FragmentExample />
//    <section />

const fragmentElement = <FragmentExample/>;

ReactDOM.render(fragmentElement, document.getElementById("react-fragment"));

//pure react js example
//const contactManagement = React.createElement(
//    "section",
//    {id: "contact-list" },
//    React.createElement("h1", null, "Contacts"),
//    React.createElement(
//        "table",
//        {className: "contacts-table" },
//        React.createElement(
//        "tbody",
//        null,
//        React.createElement(
//            "tr",
//            null,
//            React.createElement("th", null, "Name"),
//            React.createElement("th", null, "Email")
//        ),
//        React.createElement(
//            "tr",
//            null,
//            React.createElement("td", null, "Shinto Thomas"),
//            React.createElement("td", null, "sthomas@suyati.com")
//        ),
//        React.createElement(
//            "tr",
//            null,
//            React.createElement("td", null, "Praphul"),
//            React.createElement("td", null, "pnangeelil@suyati.com")
//        ),
//        React.createElement(
//            "tr",
//            null,
//            React.createElement("td", null, "Shamnad V A"),
//            React.createElement("td", null, "sabdul@suyati.com")
//        )
//        )
//    )
//    );

//    ReactDOM.render(
//    contactManagement,
//    document.getElementById("react-container")
//    );
        