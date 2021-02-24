import React, { Component } from 'react'
import Film from './film/Film'

export default class Favoris extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array:[],
            bool:true
        }
    }

    componentDidMount(){
        let array=JSON.parse(localStorage.getItem('films'))
        this.setState({array:array,bool:false})
    }

    removeFilmsStateFromFavoris=(newArray)=>{
      this.setState({array:newArray,bool:false})
    }

    render() {
            if(this.state.bool){
                return <h1>loading...</h1>
             }
             return (
                 <div className="container mt-5">
                     <div className="row d-flex justify-content-around">
                         {this.state.array.map((items)=>{
                                 return(
                                     <Film removeFilmsStateFromFavoris={this.removeFilmsStateFromFavoris} key={items.id} history={this.props.history} items={items}/>
                                 )
                             })
                         }
                     </div>
                  </div>
             )
    }
}
