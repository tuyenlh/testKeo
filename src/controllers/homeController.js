const getHomePage=(req,res)=>{
res.send('data tu homecontroller')
}
const getHomeabc=(req,res)=>{
    res.send('data tu homecontroller abc')
    }
    const getHometest=(req,res)=>{
        res.render('sample.ejs')
        }
module.exports={
    getHomePage,
    getHomeabc,
    getHometest
}