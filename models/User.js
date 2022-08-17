const {Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: { type: String, unique: true, required: true },
        email: { type: String, unique: true, required: true },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user', 
            }
        ]
    },

)





//initializes our user model
const User = model('user', userSchema);

module.exports = User;