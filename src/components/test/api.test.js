/**
 * @jest-environment jsdom
 */

import fetchMock from 'jest-fetch-mock';
import { createUser, fetchTrackers, createTracker } from '../../api';

describe('api', () => {
  fetchMock.enableMocks();
  beforeEach(() => {
    fetch.resetMocks();
  });

  const track = {
    id: 1,
    blood_pressure: 76,
    blood_glucose: 44,
    user: {
      id: 5,
      username: 'Ulysses Ritchie',
    },
  };

  describe('fetchTrackers', () => {
    it('should returned a defined response', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [track] }));
      const response = await fetchTrackers();
      expect(response).toBeDefined();
    });

    it('should NOT return a Null response', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [track] }));
      const response = await fetchTrackers();
      expect(response).not.toBeNull();
    });

    it('should return a response with a blood_pressure/tracker property', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [track] }));
      const response = await fetchTrackers();
      expect(track.blood_pressure).toEqual(76);
    });

    it('should return a response with a blood_glucose/tracker property', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [track] }));
      const response = await fetchTrackers();
      expect(track.blood_glucose).toEqual(44);
    });

    it('should return a response with a username/tracker property', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [track] }));
      const response = await fetchTrackers();
      expect(track.user.username).toEqual('Ulysses Ritchie');
    });

    it('should NOT return a response with a wrong blood_pressure/tracker property', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [track] }));
      const response = await fetchTrackers();
      expect(track.blood_pressure).not.toEqual(1000);
    });

    it('should NOT return a response with a wrong blood_glucose/tracker property', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [track] }));
      const response = await fetchTrackers();
      expect(track.blood_glucose).not.toEqual(1000);
    });

    it('should return a response with a blood_pressure/tracker type integer', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [track] }));
      const response = await fetchTrackers();
      expect(typeof track.blood_pressure).toEqual('number');
    });

    it('should return a response with a blood_pressure/tracker type integer', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [track] }));
      const response = await fetchTrackers();
      expect(typeof track.user.username).toEqual('string');
    });

    it('should NOT return a response with a name/user property that is another data type', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: [track] }));
      const response = await fetchTrackers();
      expect(typeof track.user.username).not.toEqual([]);
    });
  });
});
