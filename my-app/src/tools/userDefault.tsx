import { ISingleUser } from "../entities/user";

const defaultUser: ISingleUser[] = [
	{
		id: 0,
		name: '',
		email: '',
		adress: {
			street: '',
			suite: '',
			city: '',
			zipcode: '',
			geo: {
				lat: '',
				lng: '',
			},
		},
		phone: '',
		website: '',
		company: {
			name: '',
			catchPhrase: '',
			bs: '',
		},
	},
];

export default defaultUser;