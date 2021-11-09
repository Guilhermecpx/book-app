import React from 'react'
import './App.css'
import Main from './Components/Main'

class App extends React.Component {
  state = {
    response: {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value
    const print = e.target.printType.value
    const book = e.target.bookType.value

    const apiKey = `AIzaSyCa17vNeskm0h1Vo3FJ_1NTAA2MmM2R6iM`;
    const url = `https://www.googleapis.com/books/v1/volumes`;

    const query = `${url}?q=${search}&filter=${book}&printType=${print}&key=${apiKey}`;
    const options = {
        method: `GET`
    }

    fetch(query, options)
    .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong')
        }
        return res;
    })
    .then(res => res.json())
    .then(resJson => {
        console.log(resJson);
        this.setState({
            response: resJson
        })
    })
}

  render() {

    return (
      <div className="container">
                <header>
                    <h1>Search Books</h1>
                </header>
                <form className="form" onSubmit={this.handleSubmit}>
                    <section className="searchBar">
                        <label>Search:</label>
                        <input name="search" placeholder="Brothers Grimm"></input>
                        <button>Search</button>
                    </section>
                    <section className="filters">
                        <label>Print Type:</label>
                        <select className="printType" name="printType">
                            <option>All</option>
                            <option>Books</option>
                            <option>Magazines</option>
                        </select>
                        <label>Book Type:</label>
                        <select className="bookType" name="bookType">
                            <option>Full</option>
                            <option>Paid-ebooks</option>
                            <option>Ebooks</option>
                        </select>
                    </section>
                    <section>
                        <Main response={this.state.response}/>
                    </section>
                </form>
            </div>
    )
  }
}
export default App;