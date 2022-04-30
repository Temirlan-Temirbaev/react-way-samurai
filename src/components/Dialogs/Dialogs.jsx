import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { senMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = props.state.messages.map( (m, index) => <Message key={index} message={m.message}/> );
    let newMessageBody = props.state.newMessageBody;
    let onSendMessageClick = () => {
        props.dispatch(senMessageActionCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>
                    { messagesElements }
                </div>
                <div>
                    <div>
                        <textarea 
                            onChange={e => onNewMessageChange(e)}
                            value={newMessageBody} 
                            placeholder="Enter you're message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;