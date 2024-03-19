const mongoose = require('mongoose');

const clicksSchema = new mongoose.Schema({
    urlid : {type : String,required : true},
    userid : {type : String,required : true},
    clicks : {type : Number, default : 0},
    date : {type : Date,required : true}
});

const  ClicksModel= mongoose.model("Clicks",clicksSchema,'clicks');

module.exports = ClicksModel;