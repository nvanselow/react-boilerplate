import React, { Component, PropTypes } from 'react';

class Input extends Component {
    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        label: PropTypes.string,
        isRequired: PropTypes.bool,
        onChange: PropTypes.func,
    };

    onChange = (event) => {
        if (this.props.onChange) {
            return this.props.onChange(event.target.value);
        }

        return null;
    };

    render() {
        return (
          <div className="input">
            <label htmlFor={this.props.id}>
              {this.props.isRequired && '*'} {this.props.label}
            </label>
            <input id={this.props.id} value={this.props.value} />
          </div>
        );
    }
}

export default Input;
