import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Error extends Component {
    render() {
        return (
            <div>
                <div className="mainbox">
                    <div className="err">4</div>
                    <i className="far fa-question-circle fa-spin"></i>
                    <div className="err2">4</div>
                    <div className="msg">La page que vous cherchez n'existe pas!!
                    <p>Cliquez sur <Link className='line' to="/">home</Link> pour retourner à la page d'accueil.</p></div>
                </div>
            </div>
        )
    }
}
