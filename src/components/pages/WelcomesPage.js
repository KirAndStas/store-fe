import React, { Component } from 'react';

import Styles from './WelcomesPageStyles.js';

export default class extends Component {
    state = {
        toZero: false,
        cont: false
    }

    componentDidMount() {
        setTimeout(() => this.setState({ toZero: true }), 500);
    }

    handleContinue = () => {
        this.setState({ cont: true });
    }

    render() {
        const { toZero, cont } = this.state;

        return (
            <div className={Styles.container}>
                <div className={Styles.inerContainer}>
                    <div
                        className = {`
                            ${Styles.left}
                            ${toZero ? Styles.leftZero : ''}
                            ${cont ? Styles.leftTop : ''}
                        `}
                    />
                    <div
                        className = {`
                            ${Styles.right}
                            ${toZero ? Styles.rightZero : ''}
                            ${cont ? Styles.rightBottom : ''}
                        `}
                    >
                        <div className={Styles.continue} onClick={this.handleContinue}>
                            Continue
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
