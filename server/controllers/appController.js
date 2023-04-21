const details = require("../models/Details");
const data = require("../data/data");


const dashboard = async(req,res)=>{
    try{
        var response; 
        if(req.headers.value === undefined){
            response = await details.find();
        }else{
            response = await details.find({[req.headers.key]:req.headers.value});
        }
        if(response){
            res.status(200).send({code:200,details:response});
        }else{
            console.log("Data not found");
            res.status(200).send({code:404,message:"data not fetched!"});
        }
    }catch(error){
        console.log(error.message);
    }
}



const insertData = async(req,res)=>{
    try{
        const response = await details.insertMany(data);
        if(response){
            res.status(200).send({message:"Data inserted successfully!",code:200});
        }else{
            res.status(200).send({message:"Data not inserted!",code:404});
        }
    }catch(error){
        console.log(error.message);
    }
}



module.exports = {
    dashboard,
    insertData,
};