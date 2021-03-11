import { login, logout } from '../../actions/auth';


test('should test the login action',() => {
    const uid = 'TEST_FDA';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
});

test('should test the logout action', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' })
});