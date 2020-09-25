import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card"
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";

class Home extends Component {
  state = {
    results: [],
    filteredUsers: []
  };

  componentDidMount() {
    this.loadEmployees();
  };

  loadEmployees = () => {
    API.getEmployees()
      .then(res =>
        {this.setState ({
          results: res.data.results,
          filteredUsers: res.data.results
        });
      console.log(res.data.results)
      })
      .catch(err => console.log(err));
  };

  handleOnChange = (event) => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.results.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
      
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
    console.log(filteredList)
  };

  render() {
    if(!this.state.results) {
      return <div />
    }
    return (
      <div className="container">
          <h1 className="text-center">Search Employees</h1>
          <SearchForm 
            handleOnChange={this.handleOnChange}
            results={this.state.results}
          />
          <div className="row">
            {this.state.results.map(employee => (
              <Card 
              name={employee.name.first + " " + employee.name.last}
              email={employee.email}
              phone={employee.phone}
            />
            ))}
          </div>
      </div>
    ); 
  }
}

export default Home;