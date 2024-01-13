
import questions_coc from './questions_coc.json';
import questions_prr from './questions_prr.json';
import questions_atb from './questions_atb.json';
import questions_wam from './questions_wam.json';
import questions_wag from './questions_wag.json';
import questions_atbra from './questions_atbra.json';
import questions_atbhr from './questions_atbhr.json';
import questions_qee from './questions_qee.json';
import questions_eri from './questions_eri.json';

let globalState = { "activeQuestion": "1" };

let pastQuestions = [];

const subscribers = new Set();

export const question_data = [{"path" : "/automated_test_building_robot_requirements",
                                "title": "Automated Test Building - Robot Requirements",
                                "data" : questions_atb },
                                {"path" : "/automated_test_building_robot_risk_assessment", 
                                "title" : "Automated Test Building - Risk assessment",
                                "data" : questions_atbra},
                                {"path" : "/automated_test_building_robot_human_robot_interaction",
                                "title": "Automated Test Building - Human-Robot Interaction",
                                "data" : questions_atbhr},
                                {"path" : "/custom_order_completion",
                                "title": "Custom Order Completion",
                                "data" : questions_coc},
                                {"path" : "/worker_allocation_geom",
                                "title": "Worker allocation - geometry",
                                "data" : questions_wag},
                                {"path" : "/worker_allocation_machine",
                                "title": "Worker Allocation - machine",
                                "data" : questions_wam},
                                {"path" : "/quality_error_evaluation",
                                "title": "Quality error evaluation",
                                "data" : questions_qee},
                                {"path" : "/error_identification",
                                "title": "Error identification",
                                "data" : questions_eri},
                                {"path" : "/production_reschedule",
                                "title": "Production reschedule",
                                "data" : questions_prr},
                        ];

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
