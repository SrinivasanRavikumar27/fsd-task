const urlModel = require('../models/urlModel.js');
const clicksModel = require('../models/clicksModel.js');
const formattedDateTime = require('../utils/dateAndTime.js');
const {Info,Error} = require('../utils/logger.js');
const { set } = require('mongoose');

const urlController = {

    // get all url 
    getAllUrl : async (request,response) => {
try {

    const userid = request.userId;
    
    const urls = await urlModel.find({userid : userid},{urlid : 1,url : 1,shortUrl : 1,clicks : 1});

    if(urls){
        response.status(200).json({message : 'datas fetched sucessfully',data : urls});
    }else{
        response.status(401).json({message: "No data found"});
    }

} catch (error) {
    response.status(500).json({message: error});
}
    },

    // ------------------------------------------------------------------------------------------

    // create url
    createUrl : async (request,response) => {
        try {
            
            const userid = request.userId;

            const {url,shortUrl} = request.body;

            const urlCount = await urlModel.find().countDocuments();

            let urlId = '';

            if(urlCount < 10){
                urlId = 'Url00' + urlCount;
            }else if(urlCount < 100){
                urlId = 'Url0' + urlCount;
            }else{
                urlId = 'Url' + urlCount;
            }

            const existingUrl = await urlModel.findOne({url : url , userid : userid},{url : 1});

            const existingShortUrl = await urlModel.findOne({shortUrl : shortUrl,userid : userid},{shortUrl : 1});

            if(existingUrl){
                response.status(401).json({message:"URL already exists."});
            }else if(existingShortUrl){
                response.status(401).json({message:"Short URL already exists."});
            }else{
                const urlObject = new urlModel({
                    urlid : urlId,
                    url : url,
                    shortUrl : shortUrl,
                    userid : userid,
                    createdAt : formattedDateTime
                });
                
                const savedUrl = await urlObject.save();
    
                if(savedUrl){
                    response.status(200).json({message : 'url created sucessfully.'});
                }
            }

        } catch (error) {
            response.status(500).json({message: error});
        }
    },

     // ------------------------------------------------------------------------------------------

    //   Get the original URL from Short Url and redirect to that page
    getShortUrl : async (request ,response) => {
try {
    
    const {shortUrl} = request.params;

    const url = await urlModel.findOne({shortUrl : shortUrl});

    if(url){

        const clicksObject = new clicksModel({
            urlid : url.urlid,
            userid : url.userid,
            clicks : 1,
            date : formattedDateTime
        });

        const checkUrl = await clicksModel.findOne({urlid : url.urlid});

        const savedClicks = null;

        if(checkUrl != null && checkUrl){
            savedClicks = await clicksModel.findOneAndUpdate(
                {urlid : url.urlid},
                { $inc: { clicks: 1 } },
                { new: true } 
            );
        }else{
            savedClicks  = await clicksObject.save();
        }

        if(savedClicks != null && savedClicks){
            const increaseClicks = await urlModel.findOneAndUpdate(
                { url: url.url }, // Find the document by the URL
                { $inc: { clicks: 1 } }, // Increment the clicks field by 1
                { new: true } // Return the updated document
            );
    
          if(increaseClicks){
            response.status(200).json({url : url});
          }

        }else{
            response.status(401).json({message:"Error in saving Clicks"});
        }       
       
    }else {
        response.status(401).json({ message: 'URL not found for the given short URL' });
    }

} catch (error) {
    response.status(500).json({message: error});
}
    },

    // ------------------------------------------------------------------------------------------

    dayWise : async (request,response) => {
        try {

const options = { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

const startDate = new Date().setHours(0, 0, 0, 0).toLocaleString('en-US', options);
const endDate = new Date(new Date().setHours(24, 0, 0, 0)).toLocaleString('en-US', options);

console.log(startDate, endDate);
            
            const clicks = await clicksModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: startDate,
                            $lt: endDate
                        }
                    }
                },
                {
                    $group: {
                        _id: { $dateToString: { format: '%m/%d/%Y', date: '$createdAt' } },
                        totalClicks: { $sum: '$clicks' }
                    }
                }
            ]);



        } catch (error) {
            response.status(500).json({message: error});
        }
    },

    // ------------------------------------------------------------------------------------------

    monthWise : async (request,response) => {
        try {
            
        } catch (error) {
            response.status(500).json({message: error});
        }
    }

     // ------------------------------------------------------------------------------------------

};

module.exports = urlController;