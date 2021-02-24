import { Field, Form, Formik } from 'formik'
import React, { Component } from 'react'

export default class SearchForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             query:''
        }
    }

    searchFilm=(value)=>{
        this.props.searchFilm(value)
    }

   
    
    render() {
        return (
           
            <Formik 
            initialValues={this.state}
            onSubmit={values=>this.searchFilm(values)}
            
            >
                <Form className='mt-5'>
                    <div className="row">
                    <div className="form-group col-sm-12 col-md-12 col-lg-8 mb-2 mt-3">
                        <Field type="text" name='title' placeholder='Film name...' className='form-control border border-primary '/>
                    </div>
                    <div className="form-groupe col-sm-12 col-md-12 col-lg-2 mb-2 mt-3">
                        <Field as='select' name='query' as="select" className='form-control border border-primary text-primary'>
                            <option className='text-Center'>Select your language</option>
                            <option value='en-US'>Anglais</option>
                            <option value='fr'>Français</option>
                        </Field>
                    </div>
                    <div  className="col-sm-12 col-md-12 col-lg-2 mt-3">
                        <button className="btn btn-success col-12" type="submit">Submit</button>
                    </div>
                    </div>
                </Form>
            </Formik>
        )
    }
}
