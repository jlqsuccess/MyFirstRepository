<?php
//1:设置响应头格式为json
header("Content-Type:application/json;charset=utf-8");
session_start();
@$code = $_SESSION["code"];  //图片中验证码
@$yzm = $_REQUEST["yzm"];    //用户输入验证
if($code != $yzm){
  die('{"code":-1,"msg":"验证码输入有误"}');
}
@$phone = $_REQUEST["uphone"];
@$upwd = $_REQUEST["upwd"];
require('init.php');
$sql =" INSERT INTO jrwb_user (`uid`, `phone`, `upwd`)VALUES(null, '$phone', '$upwd')";
//8:发送sql语句并且获取返回结果
$rs = mysqli_query($conn,$sql);
$count = mysqli_affected_rows($conn);
if($count>0){
  echo '{"code":1,"msg":"添加成功"}';
}else{
  echo '{"code":-1,"msg":"添加失败"}';
}