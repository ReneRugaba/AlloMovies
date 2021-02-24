import React, { Component } from 'react'
import { createBrowserHistory } from 'history';

export default class film extends Component {
   constructor(props) {
       super(props)
       this.state={
           bool:true,
           array:[]
       }
   }

   getFilmDetails(items){
        localStorage.setItem('filmDetails', JSON.stringify(items))
        this.props.history.push('/details-film')
   }

    setstorage=(items)=>{
        
        let array=JSON.parse(localStorage.getItem('films')) || []
        array.push(items)
        localStorage.setItem('films', JSON.stringify(array))
        this.setState({array:array,bool:false})
    }

    removeStorage(items){
        const array=JSON.parse(localStorage.getItem('films'))
        const newArray=array.filter(object=>object.id!==items.id)
        localStorage.setItem('films', JSON.stringify(newArray))
        this.setState({array:newArray,bool:false})
        this.props.removeFilmsStateFromFavoris(newArray)
    }

    componentDidMount(){
        let array=JSON.parse(localStorage.getItem('films')) || []
        this.setState({array:array,bool:false})
    }


    render() {
        const {items}=this.props
        const urlImage='https://image.tmdb.org/t/p/w500'+items.poster_path
        if(this.state.bool){
           
            return (
                <div className="spinner-border text-primary mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
               )
        }
        
        return (
            <div className="card col-sm-12 col-md-8 col-lg-2 m-1 d-block mt-5 shadow-lg p-3 mb-5 bg-body rounded cardFilm"  >
                <img src={urlImage} className="img-fluid" style={{cursor: 'pointer'}} onClick={()=>this.getFilmDetails(items)}></img>
                <div className="card-body col-12 text-center">
                    <h6>{items.title}</h6>
                    <p>Date de sortie: <span className="text-primary">{items.release_date}</span></p>
                    { this.state.array.find(object=>object.id===items.id)? 
                    <button className="btn btn-danger col-12" onClick={() =>this.removeStorage(items)}>Remove</button>:
                    <button className="btn btn-primary col-12" onClick={() =>this.setstorage(items)}>Add</button>
                    }   
                </div>
            </div>
        )
    }
}
