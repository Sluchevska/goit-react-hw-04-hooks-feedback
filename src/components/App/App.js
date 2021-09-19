import React, { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import SectionTitle from '../SectionTitle/SectionTitle';
import Notification from '../Notification/Notification';
import { Container } from './App.styled';

export default function App() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = option => {
    setFeedbacks(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce(
      (acc, feedback) => acc + feedback,
      0,
    );
  };

  const countPositiveFeedbackPercentage = total => {
    total = countTotalFeedback();
    return Math.round((feedbacks.good * 100) / total);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total);
  const isSowStatistics = total > 0;
  return (
    <Container>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </SectionTitle>
      <SectionTitle title="Statistics">
        {isSowStatistics && (
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
        {!isSowStatistics && <Notification message="No feedback given" />}
      </SectionTitle>
    </Container>
  );
}
