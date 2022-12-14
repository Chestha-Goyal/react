import React, { Component } from 'react'

// class based me props this.props krke ata hai
export class NewsItem extends Component {
    // constructor() {
    //    super(); 
    //    console.log("Hello I am a constructor")
    // }
    // constructor tabh run krta hai jab is class ka obj bnta hai
    render() {
        // destructing hota hai javascript me
        // this.props me se yeah dono pull krke till aur description 
        let {title, description, imageUrl, newsUrl} = this.props;
        return ( 
            <div className="my-3">
                <div className="card" style={{width: "18rem;"}}>
                    <img src={!imageUrl? "https://images.livemint.com/img/2022/09/27/600x338/Apple-iPhone13_1646912229120_1664274350899_1664274350899.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem