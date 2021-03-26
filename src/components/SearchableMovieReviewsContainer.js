import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here


class SearchableMovieReviewsContainer extends Component {

    constructor(props) {
        super()
        
        this.state = {
            reviews: [],
            searchTerm: ''

        }
    }

    // componentDidMount() {
    //     console.log
    //     fetch(`${URL}`+`&query=${this.state.searchTerm}`)
    //     .then(resp => resp.json())
    //     .then(json => {
    //         console.log(json)
    //     })
    // }

    handleOnChange = (e) => this.setState({searchTerm: e.currentTarget.value})

    handleSearchSubmit = (event) => {


        event.preventDefault()
        console.log(this.state.searchTerm)

        fetch(`${URL}`+`&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(json => {
            return this.setState({reviews: json.results})
        })


        return this.setState({searchTerm: event.currentTarget.children[0].value})
        console.log(this.state.searchTerm)
        
        debugger

    }




    render() {
        return <div className="searchable-movie-reviews">
            <h2>{this.state.searchTerm}
            
            
            </h2>
            <form onSubmit={this.handleSearchSubmit}>
                <input name="searchTerm"></input>
                <input type="submit" value="submit"></input>

            </form>
            <MovieReviews reviews={this.state.reviews}/>
        </div>
    }

}

export default SearchableMovieReviewsContainer