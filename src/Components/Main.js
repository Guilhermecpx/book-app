import React from 'react';
import './Main.css'

class Main extends React.Component {

    render() {

        const items = this.props.response.items || []

        return (
            <section className="results">
                {items.map(item => {
                    return (
                        <li>
                            <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="Book"/>
                            <h2>{item.volumeInfo.authors}</h2>
                            <a href={item.volumeInfo.previewLink}>{item.volumeInfo.title}</a>
                            <p>{`$${item.saleInfo.listPrice?.amount}`}</p>
                        </li>
                    )
                })}
            </section>
        )
    }
}

export default Main;