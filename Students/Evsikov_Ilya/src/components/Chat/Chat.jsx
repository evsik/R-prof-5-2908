import './style.css';
import React, {Component, Fragment} from 'react';

import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Item from '../ChatListItem/ChatListItem.jsx';
import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';

import List from '@material-ui/core/List/List';

export default class Chat extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <div className="ChatList d-flex flex-column">
                    <List>
                        <Link to='/chat/1'>
                            <Item name="Chat 1"/>
                        </Link>
                        <Link to='/chat/2'>
                            <Item name="Chat 2"/>
                        </Link>
                    </List>
                    <div>
                        <ChatsDialog/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
    