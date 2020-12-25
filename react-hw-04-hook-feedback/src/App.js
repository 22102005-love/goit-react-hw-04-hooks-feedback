import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions.js';
import Statistics from './components/Statistics.js';
import Section from './components/Section.js';
import './App.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = ({ target }) => {
    // console.log(target);
    const { feedback } = target.dataset;
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositivPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const goodFeedback = good;
    return Math.round((goodFeedback * 100) / totalFeedback);
  };

  const data = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivPercentage = countPositivPercentage();
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={data}
          onLeaveFeedback={handleLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivPercentage}
        ></Statistics>
      </Section>
    </div>
  );
}
