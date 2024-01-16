import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import config from './Chatbot/config';

const ChatbotComponent = () => {
    const chatbotStyle = {
        position: 'fixed',
        right: '0px',
        top: '20%',
        width: '310px',
        zIndex: 1000,
    };
    return (
        <div style={chatbotStyle}>
            <Chatbot
            config={config}
            headerText='Your production Chatbot'
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            />
      </div>
    );
};

export default ChatbotComponent;
