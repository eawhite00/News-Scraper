var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var noteSchema = new Schema({

  Article: {
    type: Schema.Types.ObjectId,
    ref: "Article",
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  noteText: {
      type: String,
      required: true
  }
});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;
