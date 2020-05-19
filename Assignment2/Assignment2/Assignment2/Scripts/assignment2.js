
const contactManagement = React.createElement(
    "section",
    {id: "contact-list" },
    React.createElement("h1", null, "Contacts"),
    React.createElement(
        "table",
        {className: "contacts-table" },
        React.createElement(
        "tbody",
        null,
        React.createElement(
            "tr",
            null,
            React.createElement("th", null, "Name"),
            React.createElement("th", null, "Email")
        ),
        React.createElement(
            "tr",
            null,
            React.createElement("td", null, "Shinto Thomas"),
            React.createElement("td", null, "sthomas@suyati.com")
        ),
        React.createElement(
            "tr",
            null,
            React.createElement("td", null, "Praphul"),
            React.createElement("td", null, "pnangeelil@suyati.com")
        ),
        React.createElement(
            "tr",
            null,
            React.createElement("td", null, "Shamnad V A"),
            React.createElement("td", null, "sabdul@suyati.com")
        )
        )
    )
    );

    ReactDOM.render(
    contactManagement,
    document.getElementById("react-container")
    );

//class Columns extends React.Component {
//    render() {
//        return (
//            <div>
//                <h2>React JS Workshop </h2>
//                <p> Assignment 2</p>
//            </div>

//            )
//    }
//}

//class Columns extends React.Component {
//    render() {
//        return (
//            <React.Fragment>
//                <h2>React JS Workshop </h2>
//                <p> Assignment 2</p>
//            </React.Fragment>

//        )
//    }
//}