//NOTE: reaction schema will be a subdocument schema in the Thought model.

const {Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(), 
        },
        reactionBody: {
            type: String,
            required: true, 
            max: 280,
        },
        username: { 
            type: String, 
            required: true 
        },

        createdAt: {
            type: Date,
            default: Date.now,
            getter: true, 
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);


const thoughtSchema = new Schema(
    {
        thoughtText: { 
            type: String, 
            required: true, 
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // : timestamp,
        },
        //the user that created this thought
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }

);

//reaction schema here at some point




thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});



//initalizes our thought model
const Thought = model('Thought', thoughtSchema);
module.exports = Thought;





