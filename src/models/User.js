import {Record} from 'immutable';

const UserRecord = Record({
    id: '',
    username: '',
    mail: '',
    description: '',
    image: ''
});


export default class User extends UserRecord {
    static mapper (data) {
        console.log(`SAP! data`,    data);
        return new User(data);
    }
}


export default User;
