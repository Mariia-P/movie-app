import { authenticateUser } from './authAction';
import * as types from '../types';

it('should authenticate user', ()=>{
const result = authenticateUser('FAKE_ID_TOKEN', 'FAKE_LOCAL_ID');

expect(result).toEqual({
    type: types.AUTHENTICATE_USER,
    payload: {
        idToken: 'FAKE_ID_TOKEN',
        localId: 'FAKE_LOCAL_ID'
    }
});

})