'use client';

import { useState, useEffect } from 'react';
import Question2 from './question-2';
import Question1 from './question-1'
import FormPage from '@/templates/select-lesson-form';
import { FormsStatesProvider, selectedLesson } from './form-state-provider';
import { question, MembershipStatus } from '@/server/cookies'
import '@/css/select-lesson.css';


export default function SelectPage() {
  const loggedIn = MembershipStatus.User.get("login") || MembershipStatus.Guest.get("login");
  const currentQuestion: number = question.get('question');
  
  
  const [ layoutUtilities, setLayoutUtilities] = useState({
    headerStyle: {
      name: "default-left",
      headerText: ""
    },
    footerStyle: {
      name: "prev-next",
      btnText: ""
    }
  })
  const [ TSXholder, setTSXHolder ] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if(TSXholder) return;
    if(!loggedIn) return;

    switch(currentQuestion)
    {
      case 1:
        setLayoutUtilities(prevState => ({
          ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            headerText: "Enter your name in English"
          }
        }));
        setTSXHolder(<Question1/>);
        break;
      case 2:
        setLayoutUtilities(prevState => ({
        ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            headerText: "Select the lesson you'd like to take"
          }
        }))
        setTSXHolder(<Question2/>);
        break;
      case 3:
        setLayoutUtilities(prevState => ({
          ...prevState,
            headerStyle: {
              ...prevState.headerStyle,
              headerText: `You selected ${selectedLesson}`
            }
          }))
        break;
    }
  }, [TSXholder])
  
  return (
    <FormsStatesProvider>
      <FormPage utilities={layoutUtilities}>
        {TSXholder}
      </FormPage>
    </FormsStatesProvider>
  );
};