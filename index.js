const express = require('express');
const app = express();// xây nhà
const port = process.env.PORT || 5000; // Khai báo cổng vào
app.listen(port,function () {  // hoàn thành xây nhà
    console.log('Server is runing...');
});
app.use(express.static('public')); // các file css,img... phải đặt trong thư mục public
//tạo routing ( thuê 1 nhân viên)
app.get("/",function (req,res){
    res.sendFile(__dirname+'/public/projects.html');
})
// thêm 01 nhân viên nữa
app.get('/bongda',function (req,res) {
    res.send('trangbongda');
})
// trang quan ao
app.get('/quanao',function (req,res){
    res.sendFile(__dirname+'/public/quanao.html');
})