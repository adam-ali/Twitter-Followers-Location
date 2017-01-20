import React from 'react'
import {Link} from 'react-router'

var Index = React.createClass({
  getInitialState:function(){
    return {
      distance: '5',
      userName: ''
    }
  },
  handleUsername(e) {
    var usernme = e.target.value;
    this.setState({
      userName: '@' + usernme
    });
  },
  handleDistance (e) {
    var distance = e.target.value;
    this.setState({
      distance: distance
    });
  },
  submit() {

    console.log(this.state)
  },
  render: function () {
    return (
      <div>
        <div className="container has-text-centered blue data">
          <h1 className="title">
            Home page
          </h1>
          <h1 className="subtitle">
            Find locations of your closest followers
          </h1>

          <div className="box">

            <div className="columns">
              <div className="column is-two-thirds">
                <label className="label">Twitter Username</label>
              </div>
              <div className="column">
                <label className="label">Follower Distance</label>
              </div>
              <div className="column">
              </div>
            </div>

            <div className="columns">
              <div className="column is-two-thirds">
                <p className="control has-addons">
                  <button className="button blue" disabled>@</button>
                  <input className="input is-expanded" type="text" placeholder="input twitter handle" onChange={this.handleUsername} />
                </p>
              </div>
              <div className="column">
                  <span className="select">
                    <select onChange={this.handleDistance}>
                      <option value='5'>5 Miles</option>
                      <option value='10'>10 Miles</option>
                      <option value='20'>20 Miles</option>
                    </select>
                  </span>
              </div>
              <div className="column">
                <button className="button blue" onClick={this.submit}>Find</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
});

module.exports = Index;