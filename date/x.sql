SET NAMES UTF8;
drop database if exists jrwb;
create database jrwb charset=utf8;
use jrwb;
create table jrwb_user(
  uid int primary key auto_increment,
  phone  varchar(16) not null unique,
  upwd  varchar(32)
);
-- ----------------------------
-- Records of jrwb_user
-- ----------------------------
INSERT INTO `jrwb_user` VALUES ('1', '18999999999', '123456');
INSERT INTO `jrwb_user` VALUES ('2', '18988888888', '123456');
INSERT INTO `jrwb_user` VALUES ('3', '18977777777', '123456');

DROP TABLE IF EXISTS `jrwb_laptop`;
CREATE TABLE `jrwb_laptop` (
  `lid` int(11) NOT NULL auto_increment,
  `jkll` int(11) default NULL,
  `xmqx` int(11) default NULL,
  `xmgm` int(11) default NULL,
  `hkfs` varchar(32) default NULL,
  `dbjg` varchar(64) default NULL,
  `ckjd` int(11) default NULL,
  PRIMARY KEY  (`lid`)
);

-- ----------------------------
-- Records of jrwb_laptop
-- ----------------------------
INSERT INTO `jrwb_laptop` VALUES ('1', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('2', '8.5','180','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('3', '9.5','90','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('4', '8.5','60','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('5', '9.5','90','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('6', '8.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('7', '9.5','90','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('8', '8.5','90','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('9', '9.5','90','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('10', '8.5','90','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('11', '9.5','180','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('12', '8.5','90','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('13', '9.5','180','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('14', '8.5','60','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('15', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('16', '8.5','90','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('17', '9.5','180','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('18', '9.5','90','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('19', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('20', '9.5','180','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('21', '9.5','90','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('22', '9.5','180','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('23', '9.5','60','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('24', '9.5','90','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('25', '9.5','180','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('26', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('27', '9.5','180','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('28', '9.5','60','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('29', '9.5','180','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('30', '9.5','60','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('31', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('32', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('33', '9.5','90','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('34', '9.5','90','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('35', '9.5','180','15','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('36', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('37', '9.5','60','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('38', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('39', '9.5','90','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('40', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('41', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('42', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('43', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('44', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('45', '9.5','90','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('46', '9.5','90','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('47', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('48', '9.5','60','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('49', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');
INSERT INTO `jrwb_laptop` VALUES ('50', '9.5','180','20','按月付息到期还本','北京中保国信融资担保...','100');


