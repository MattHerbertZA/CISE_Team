import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class CreateArticle extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      isbn: "",
      author: "",
      se_practice: "",
      claim: "",
      evidence_level: "",
      published_date: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      se_practice: this.state.se_practice,
      claim: this.state.claim,
      evidence_level: this.evidence_level,
      published_date: this.state.published_date,
    };

    axios
      .post("http://localhost:8082/api/articles", data)
      .then((res) => {
        this.setState({
          title: "",
          isbn: "",
          author: "",
          se_practice: "",
          claim: "",
          evidence_level: "",
          published_date: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateArticle!");
      });
      alert("Article Submitted! Thank you for your help in growing SEEDs!");
  };

  render() {
    return (
      <div className="CreateArticle">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Request Article</h1>
              <p className="lead text-center">Request new article</p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Title of the Article"
                    name="title"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="ISBN"
                    name="isbn"
                    className="form-control"
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    className="form-control"
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="month"
                    name="published_date"
                    className="form-control"
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="SE Practice"
                    name="se_practice"
                    className="form-control"
                    value={this.state.se_practice}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Claim of this Article"
                    name="claim"
                    className="form-control"
                    value={this.state.claim}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  onSubmit={this.onSubmit} 
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateArticle;
