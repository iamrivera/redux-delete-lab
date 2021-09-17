import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.bands.map((band) => <Band key={band.id} band={band} delete={this.props.delete} />)}
                </ol>
            </div>
        )
    }
}

export default Bands;