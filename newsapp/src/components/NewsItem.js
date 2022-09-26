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
        let {title, description, imageurl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem;"}}>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsdetail" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem