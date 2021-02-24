import React, { Component } from 'react'
import { apimovies } from './../ApiMovies';
import Film from './film/Film'
import SearchForm from './Form/SearchForm';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state={
            values:[],
            bool: true
        }
        
    }

    // ici je récupère chaque films grâce à une requete get
    componentDidMount(){
        apimovies.get('discover/movie')
            .then(resp=>{ //ici j'utilise le then pour avoir accès à la response avant d'executer le reste
                this.setState({
                    values:resp.data.results,
                bool:false})// je recupère le result dans la response et je la set dans mon state
            },error=>{
                console.log(error) // si j'ai une erreurs je fait un console.log de cette erreur
            })
    }

    removeFilmsStateFromFavoris=()=>{}

    searchFilm=(object)=>{
        apimovies.get('search/movie',
                    {
                        params:{
                            language:object.query,
                            query:object.title
                        }
                    }
                    )
                    .then(response=>{
                        this.setState({
                            values:response.data.results,
                            bool:false
                        })
                    },errors=>{
                        console.log(errors)
                    })
    }
    
    render() {
        if(this.state.bool){
           return (
            <div className="spinner-border text-primary mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
           )
                
        }
        return (
            <div className="container mt-5">
                <div className="row d-flex justify-content-around">
                    <div className="row">
                        <div className="col-12">
                            <SearchForm searchFilm={this.searchFilm}/>
                        </div>
                    </div>
                    {this.state.values.map((items)=>{
                            return(
                                <Film removeFilmsStateFromFavoris={this.removeFilmsStateFromFavoris} setstorage={()=>this.setstorage(items)} key={items.id} history={this.props.history} items={items}/>
                            )
                        })
                    }
                </div>
             </div>
        )
    }
}
