const validator = require('validator');
let {mongoose} = require("../../common/db/mongoose");
var uuidV1 = require('uuid/v1');

var UserSchema = new mongoose.Schema({

  userId: {
    type: String,
    require: true,
    default: uuidV1()
  },
  
userName: {
    type: String,
    require: true,
    default: 0
  },

  userEmail: {
    type: String,
    //required: true,
    trim: true,
    minlength: 1,
    //unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },

  
  userPassword: {
    type: String,
    require: true,
    default: 0
  },

  userRoleType: {
	  type: Number,
	  require: false,
	  default: 0
	  }
	  ,
  status: {
	  type: Number,
	  require: true,
	  default: 0
	  },
	  
	travelId: {
		type: Number,
		require: true,
		default: 0
		  },
		  
	lastLogout: {
		type: Date,
		require: false
			    
			},
	createdBy: {
		type: String,
		require: true
      },
  createdDate: {
		type: Date
		}

});


var UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {UserModel}
