import React, { Component } from 'react';
import "../styles.css"
import { connect } from 'react-redux';
import { getNameUserSelector } from '../../selectors/user'
class Home extends Component {
    render() {
        const { name } = this.props;
        return (
            <div className="slide-container">
                <img src='https://www.pixel4k.com/wp-content/uploads/2018/11/man-tourist-backpack-mountains-travel-4k_1541115960.jpg' alt="" width="100%" />
                <div className="description">
                    <h1>New Places!</h1>
                    <h1>Let's enjoy and have fun!</h1>
                    <div className="content">
                        {name ?
                            (<div><p>Hello {name}</p></div>)
                            :
                            (<div><p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum dolor</p></div>

                            )
                        }


                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        name: getNameUserSelector(state)
    })
)(Home);