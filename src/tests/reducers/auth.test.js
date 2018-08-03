import authReducer from '../../reducers/auth'

test('should set uid fro login', () => {
    const action = {
        type: 'LOGIN',
        uid: '2421dfd'
    }
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid when logging out ', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: 'anything'}, action);
    expect(state).toEqual({});
});