import React from 'react'
import {Link} from 'react-router'
var Twit = require('twit');
var config = require('../../config');
var T = new Twit(config);

var Index = React.createClass({
  getInitialState:function(){
    return {
      distance: '5',
      userName: '',
      followers: [],
      nextPage: '',
      previousPage: '',
      page: -1
    }
  },
  componentWillMount() {
    if (this.state.nextPage == 0){
      console.log('end!!!!!!!!!')
    }
  },
  handleUsername(e) {
    var usernme = e.target.value;
    this.setState({
      userName: usernme
    });
  },
  handleDistance (e) {
    var distance = e.target.value;
    this.setState({
      distance: distance
    });
  },
  next() {
    $.ajax({
      url: 'https://adam-ali.github.io/Twitter-Followers-Location/api',//'http://localhost:3000/api',
      data: {
        usrName: this.state.userName,
        page: this.state.nextPage
      },
      type: 'GET',
      dataType: 'json',
      success:  (data) => {
        console.log(data);
        this.setState({
          followers: data.followers,
          nextPage: data.next_page,
          previousPage: data.previous_page
        });
      },
    });
  },
  previous() {
    $.ajax({
      url: 'https://adam-ali.github.io/Twitter-Followers-Location/api',//'http://localhost:3000/api',
      data: {
        usrName: this.state.userName,
        page: this.state.previous_page
      },
      type: 'GET',
      dataType: 'json',
      success:  (data) => {
        console.log(data);
        this.setState({
          followers: data.followers,
          nextPage: data.next_page,
          previousPage: data.previous_page
        });
      },
    });
  },
  signIn() {
    $.ajax({
      url: 'https://adam-ali.github.io/Twitter-Followers-Location/api',//'http://localhost:3000/api',
      data: {
        usrName: this.state.userName,
        page: this.state.page
      },
      type: 'GET',
      dataType: 'json',
      success:  (data) => {
        console.log(data);
        this.setState({
          followers: data.followers,
          nextPage: data.next_page,
          previousPage: data.previous_page
        });
      },
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
                <button className="button is-success" onClick={this.signIn}>Find </button>
                <button className="button blue" onClick={this.submit}>Show state</button>
              </div>
            </div>
            <ul>
            { this.state.followers.map((follower,index) =>{
              return (
                <li className="followers" key={index}>
                  <div className="box">
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img src={follower.pic} alt="Image" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>{follower.name}</strong> <small>{'@' + follower.userName}</small>
                            <br/>
                            {'Location: ' + follower.location}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </li>
              )
            })}
            </ul>

            <nav className="pagination">
              <a className="pagination-previous" onClick={this.previous}>Previous</a>
              <a className="pagination-next" onClick={this.next}>Next page</a>
            </nav>

          </div>
        </div>
      </div>
    )
  }
});

module.exports = Index;