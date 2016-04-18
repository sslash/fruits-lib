import {Record} from 'immutable';

const UserRecord = Record({
    id: '',
    username: '',
    mail: '',
    description: '',
    image: '',
    profile: null,
    location: {}
});


export default class User extends UserRecord {
    static mapper (data) {
        return new User(data);
    }

    getProfilePhoto () {
        return this.get('profile') ?
            this.getIn(['profile', 'picture']) :
            this.get('image');
    }
}


export default User;
