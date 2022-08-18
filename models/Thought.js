//NOTE: reaction schema will be a subdocument schema in the Thought model.

const {Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: { 
            type: String, 
            required: true 
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            //the user that created this thought
            required: true,
        }
    },
    
)

//reaction schema here at some point




//initalizes our thought model
const Thought = model('thought', thoughtSchema);
module.exports = Thought;