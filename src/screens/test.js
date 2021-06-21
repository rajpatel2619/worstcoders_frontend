import React from 'react';

import axios from 'axios';

export default class CodechefContests extends React.Component {
  state = {
    codechef_contests: []
  }

  componentDidMount() {
    axios.get(`/codechef`)
      .then(res => {
        const codechef_contests = res.data;
        this.setState({ codechef_contests });
      })
  }

  render() {
    return (
      <ul>
        { this.state.codechef_contests.map(el => <li>{el.name}</li>)}
      </ul>
    )
  }
}