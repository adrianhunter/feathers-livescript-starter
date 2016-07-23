# user-model.js - A mongoose model
#
# See http://mongoosejs.com/docs/models.html
# for more of what you can do here.
mongoose = require('mongoose')
Schema = mongoose.Schema
userSchema = new Schema do
	facebookId: type: String
	facebook: type: Schema.Types.Mixed
	googleId: type: String
	google: type: Schema.Types.Mixed
	email:
		type: String
		required: true
		unique: true
	password:
		type: String
		required: true
	createdAt:
		type: Date
		'default': Date.now
	updatedAt:
		type: Date
		'default': Date.now




userModel = mongoose.model 'user', userSchema
module.exports = userModel
