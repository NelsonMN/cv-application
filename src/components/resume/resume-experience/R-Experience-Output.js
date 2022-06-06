import React, { Component } from 'react';

class ResumeExperienceOutput extends Component {

    render () {
        
        const { state } = this.props;

        return (
            state.experience.map( (element) => {
                return (
                    <div key={element.id} id={element.id} className='experience'>
                        <div className='experience-title'>
                            <h4>{element.position}</h4>
                            <div>{element.started} - {element.ended}</div>
                        </div>
                        <div className='experience-info'>
                            <p><em>{element.company}</em></p>
                            <p>{element.city}</p>
                        </div>
                        <div>
                            <p className='description'>{element.description}</p>
                        </div>

                    </div>
                )
            } )

        )
    }
}

export default ResumeExperienceOutput