import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Message from '../Message/Message.jsx';
import './Messages.css';


export const MessageListComponent = (props) => {
  const { chatStyle } = props;

  const messages = props.messages.map(
    (message, index) => <Message key={index} author={message.author} content={message.content} />,
  );

  return (
    <div className={`Messages_${chatStyle}`}>
      <div className={`Messages-wrapper_${chatStyle}`}>
        <ul className={`Messages-list_${chatStyle}`}>
          {messages}
        </ul>
      </div>
    </div>
  );
        // <Notification />
        // <Status socket={socket} />
};

MessageListComponent.propTypes = {
  // socket: PropTypes.node,
  chatStyle: PropTypes.string,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

const mapStateToProps = state => ({
  messages: state.chat.messages,
  chatStyle: state.ui.chatStyle,
});

const mapDispatchToProps = () => ({ });

const Messages = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageListComponent);

export default Messages;
