import React, { Component } from 'react';

import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Notification } from './components/Notification/Notification';
import { Statistics } from './components/Statistics/Statistics';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>
        <Notification />
        <Section title="Statistics">
          <Statistics />
        </Section>
      </>
    );
  }
}

export default App;
