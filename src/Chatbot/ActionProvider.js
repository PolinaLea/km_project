/*ActionProvider.js*/

import React from 'react';
import OpenAI from "openai";
import { question_data } from '../global';

let openai = undefined;
try {
openai = new OpenAI({
 organization: 'org-abltum4c6Hu0jkVbmO1qgHFs',
 apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true
});
}
catch(err) {}


async function call_chatgpt(messages) {
  if(openai === undefined) { return { "message" : { "content" : "Need chatgpt api key to work!" } } }
  const completion = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-4-1106-preview",
  });

  return completion.choices[0];
}


const get_system_info = () => {
  let sys_info = `You are an assistant guiding a user through a business and production processes.
  The different processes together are given as json data, remember that the user does not see the json data, but has an interactive click-through version of it.
  Answer in a way the user understands. In the json data the goTo directives refer to which question is next if the respective answer is chosen.

  `;
  console.log("question_data =", question_data);
  for(const data of question_data) {
    sys_info += `Data for ` + data.title + ":\n"
    sys_info += JSON.stringify(data.data);
  }

  sys_info += "\nGive short and precise answers!";
  return { "role" : "system",
          "content": sys_info };
}


const ActionProvider = ({ createChatBotMessage, setState, state, children }) => {
  const handleUserMessage = (message) => {
    const messages = [...state.messages, { "type": "user",
                                          "message": message}];
    const chatgpt_messages = [get_system_info(), ...messages.map((T, number, array) => {
        return { "role": T.type === "bot" ? "assistant" : "user",
                 "content" : T.message }
    })];
    call_chatgpt(chatgpt_messages).then((data) => {
      const botMessage = createChatBotMessage(data.message.content);
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }))
    }).catch((error) => {
      console.error(error);
    });

  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleUserMessage },
        });
      })}
    </div>
  );
};

export default ActionProvider;