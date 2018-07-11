<?php
header("Content-Type:application/json;charset=utf-8");
@$phone = $_REQUEST["uphone"];
@$upwd = $_REQUEST["upwd"];
require('init.php');
$sql  = " SELECT uid FROM jrwb_user";
$sql .= " WHERE phone='$phone' AND upwd='$upwd'";
$result = mysqli_query($conn,$sql);
//8:发送sql语句并且获取返回结果
$row = mysqli_fetch_row($result);
//9:输出登录结果
if($row===null){
   echo '{"code":-1,"msg":"用户名或密码有误，请重试"}';
}else{
   echo '{"code":1,"msg":"登录成功"}';
}