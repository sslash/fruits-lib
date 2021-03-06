import {Record} from 'immutable';

const UserRecord = Record({
    id: '',
    username: '',
    mail: '',
    description: '',
    image: '',
    profile: null,
    location: null,
    facebook: null,
    instagram_profile_url: null,
    backgroundImage: null,
    url: ''
});


class User extends UserRecord {
    static mapper (data) {
        return new User(data);
    }

    getProfilePhoto () {
        return this.get('profile') ?
            this.get('profile').picture :
            this.get('image');
    }
}


export default User;
