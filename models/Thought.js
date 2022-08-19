//NOTE: reaction schema will be a subdocument schema in the Thought model.

const {Schema, model } = require('mongoose');

//reaction schema here at some point
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
           
        },
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false
    }
);

//thought schema 
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
            // : timestamp 
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
            getters: true,
            virtuals: true,
        },
        id: false
    }

);






thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});



//initalizes our thought model
const Thought = model('Thought', thoughtSchema);
module.exports = Thought;





