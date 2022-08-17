//NOTE: reaction schema will be a subdocument schema in the Thought model.

const {Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: { type: String, required: true },
        createdAt: { type: Date  },
        username: 
      
    },

)





//initalizes our thought model
const Thought = model('thought', thoughtSchema);
module.exports = Thought;