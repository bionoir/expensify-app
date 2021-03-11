import authReducer from '../../reducers/auth';

test('should store the user ID then login', () => {
    const action = { type: 'LOGIN', uid: 'Alpha'};
    const state = authReducer({},action);
    expect(state.uid).toEqual(action.uid);
});

test('should empty the user ID from the store', () => {
    const action = { type: 'LOGOUT' };
    const state = authReducer({ uid: 'anything '}, action);
    expect(state).toEqual({});
});