
let globalState = { "activeQuestion": "1" };

let pastQuestions = [];

const subscribers = new Set();

export const subscribe = (callback) => {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
};

export const setActiveQuestion = (newQuestion, reset=false, setPast=true) => {
    if(setPast) {
        if (reset) {
            pastQuestions = [];
        }
        else {
            pastQuestions.push(globalState.activeQuestion);
        }
    }
    globalState.activeQuestion = newQuestion;
  subscribers.forEach((callback) => callback(newQuestion));
};

export const setPreviousQuestion = () => {
    if (pastQuestions.length > 0) {
        setActiveQuestion(pastQuestions.pop(), false, false);
    }
};

export const havePreviousQuestion = () => {
    return pastQuestions.length > 0;
};

export const getActiveQuestion = () => globalState.activeQuestion;
