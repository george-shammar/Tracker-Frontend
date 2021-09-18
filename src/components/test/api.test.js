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
            username: "Ulysses Ritchie"
        }            
    }

    describe('fetchTrackers', () => {
        it('should returned a defined response', async () => {
            fetch.mockResponseOnce(JSON.stringify({ result: [track] 
        }));
        const response = await fetchTrackers();
            expect(response).toBeDefined();
        });
    });

 })