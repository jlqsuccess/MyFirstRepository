SET NAMES UTF8;
drop database if exists jrwb;
create database jrwb charset=utf8;
use jrwb;
create table jrwb_user(
  uid int primary key auto_increment,
  phone  varchar(16) not null unique,
  upwd  varchar(32),
);
-- ----------------------------
-- Records of jrwb_user
-- ----------------------------
INSERT INTO `jrwb_user` VALUES ('1', '18999999999', '123456');
INSERT INTO `jrwb_user` VALUES ('2', '18988888888', '123456');
INSERT INTO `jrwb_user` VALUES ('3', '18977777777', '123456');
