import React, { Component } from 'react'

export default class detailsfilm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            item:{
                bool:true
            }
        }
    }

    componentDidMount(){
        this.setState({item:JSON.parse(localStorage.getItem('filmDetails')),bool:false})
    }
    render() {
        if(this.state.bool){
            return (
             <div className="spinner-border text-primary mt-5" role="status">
             <span className="visually-hidden">Loading...</span>
             </div>
            )
                 
         }
        const urlImage='https://image.tmdb.org/t/p/w500'+this.state.item.poster_path
        
        return (
            <div className="container p-5">
                <div className="col-12 mt-5">
                <div className="card col-sm-12 col-md-12 col-lg-8 mx-auto d-block mt-5 shadow-lg p-3 mb-5 bg-body rounded"> 
                    <img className="img-fluid mx-auto d-block mt-4" src={urlImage}/>
                    <div className="body-card">
                        <h1 className="text-center">{this.state.item.title}</h1>
                        <h3 className="text-center">Date de sortie: <span className="text-primary">{this.state.item.release_date}</span></h3>
                        <h3 className="text-center">Déscriptif du film:</h3>
                        <p className="text-center">
                            {this.state.item.overview}
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
