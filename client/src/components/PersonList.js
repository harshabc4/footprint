// import React, { useEffect } from "react";
// import axios from "axios";

// export default function PersonList() {
//   const [state, setState] = React.useState({ persons: [] });

//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
//       const persons = res.data;
//       setState({ persons });
//     });
//   });

//   return (
//     <ul>
//       {state.persons.map((person) => (
//         <li key={person.id}>{person.name}</li>
//       ))}
//     </ul>
//   );
// }

import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
