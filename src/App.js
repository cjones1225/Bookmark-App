import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav"
import config from "./config";
import AddBookmark from "./Components/AddBookmark/AddBookmark";
import BookmarkApp from "./Components/BookmarkApp/BookmarkApp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }

  componentDidMount() {
    const url = "https://thinkful-list-api.herokuapp.com/v3/bookmarks";
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  setShowAddForm(show) {
    this.setState({
      showAddForm: show
    });
  }

  addBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
      showAddForm: false
    });
  }

  render() {
    const page = this.state.showAddForm ? (
      <AddBookmark
        showForm={show => this.setShowAddForm(show)}
        handleAdd={bookmark => this.addBookmark(bookmark)}
      />
    ) : (
      <BookmarkApp
        bookmarks={this.state.bookmarks}
        showForm={show => this.setShowAddForm(show)}
      />
    );

    return <div className="App">{page}</div>;
  }
}

export default App;
