var UserModel = require('../models/UserModel')
        , UserController;

UserController = {
getList: function(req, res, next) {
    UserModel.find(function(err,users){
        if(err) {
        next(err);    
        }
        return res.json({success: true, data: users});
    });
},
save: function(req, res, next) {
    UserModel.create(req.body,function(err,user){
        if(err) {
        next(err);    
        }
        return res.json({success: true, data: user});
    });
},
delete: function(req, res, next) {
    UserModel.remove({_id:req.params.id},function(err,object){
        if(err) {
        next(err);    
        }
        return res.json({success: true, data: 'User has been deleted successfully'});
    });
}
    
};

module.exports=UserController;
   