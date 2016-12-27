import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/kanban">Kanban</Link></li>
          <li><Link to="/register">Signup</Link></li>
        </ul>
      </div>
    )
  }
})
