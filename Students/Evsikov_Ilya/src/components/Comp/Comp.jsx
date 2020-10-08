import './style.css';
import React from 'react';
import { Component } from 'react';
import InputComp from '../CompInputTest/CompInputTest.jsx';
import FieldComp from '../CompFieldTest/CompFieldTest.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { sendMessage } from '../../store/actions/messages-actions';

class MessageField extends Component {

    send = (text, sender = 'Me') => {
        this.props.sendMessage(text, sender);
    }

    render() {
        return (
            <div className="d-flex flex-column">
                <FieldComp messages = { this.props.messages } />
                <InputComp send = { this.send } />
            </div>
        )
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);

