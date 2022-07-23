import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import '@testing-library/jest-dom';
import Mission from '../Components/Mission';

const renderMissions = () => render(
  <Provider store={store}>
    <Mission />
  </Provider>,
);

describe('Missions table should exist', () => {
  test('Table headers should exist', () => {
    renderMissions();
    const missionHeader = screen.getByText('Mission');
    expect(missionHeader).toBeInTheDocument();

    const descriptionHeader = screen.getByText('Description');
    expect(descriptionHeader).toBeInTheDocument();

    const statusHeader = screen.getByText('Status');
    expect(statusHeader).toBeInTheDocument();
  });
});
