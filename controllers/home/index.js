/**
 * Created by zxf on 2017/9/8.
 */
module.exports={
   index:function (req,res,next) {
     var username=req.session.user;
    res.render('home',{username:username})
   }
}