<?php
require("init.php");
@$pno = $_REQUEST["pno"];
@$pageSize = $_REQUEST["pageSize"];
//如二个参数进行判断，如果参数无效设置默认值   pno=1 pageSize=8
if(!$pno){
 $pno = 1;
}
if(!$pageSize){
 $pageSize = 6;
}
//创建sql语句查询总记录数
$sql = "SELECT count(lid) as c FROM jrwb_laptop";
$rs = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($rs);
$pageCount = ceil($row[0]/$pageSize);
//创建sql语句查询当前页内容
$offset = ($pno-1)*$pageSize;
$sql = " SELECT lid,jkll,xmqx,xmgm,hkfs,dbjg,ckjd FROM jrwb_laptop";
$sql.= " LIMIT $offset,$pageSize";
$rs = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($rs,MYSQLI_ASSOC);
//返回结果 json
$output = ["pno"=>$pno,"pageSize"=>$pageSize,
          "pageCount"=>$pageCount,"data"=>$rows];
echo json_encode($output);