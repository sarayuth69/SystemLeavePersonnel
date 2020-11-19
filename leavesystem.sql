/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 80017
Source Host           : localhost:3306
Source Database       : table_leavesystem

Target Server Type    : MYSQL
Target Server Version : 80017
File Encoding         : 65001

Date: 2020-11-19 16:46:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cencel_leave
-- ----------------------------
DROP TABLE IF EXISTS `cencel_leave`;
CREATE TABLE `cencel_leave` (
  `cancel_id` int(11) NOT NULL AUTO_INCREMENT,
  `cancel_data` varchar(255) DEFAULT NULL,
  `cencel_date_start` date DEFAULT NULL,
  `cencel_date_stop` date DEFAULT NULL,
  `cencel_total` double unsigned zerofill NOT NULL,
  `leave_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`cancel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cencel_leave
-- ----------------------------

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `Dept_ID` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'รหัสแผนก',
  `DeptName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '-' COMMENT 'ชื่อแผนก',
  `Sector_ID` varchar(100) NOT NULL COMMENT 'รหัสฝ่ายงาน',
  PRIMARY KEY (`Dept_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES ('1001', 'แผนกงานธุรการสำนัก', '301');
INSERT INTO `department` VALUES ('1002', 'แผนกงานห้องสมุด', '301');
INSERT INTO `department` VALUES ('1003', 'แผนกงานศุนย์การเรียนรู้ด้วยตนเอง', '302');
INSERT INTO `department` VALUES ('1004', 'แผนกงานวิศวกรรมเครือข่าย', '302');
INSERT INTO `department` VALUES ('1005', 'แผนกงานอีเลิร์นนิ่งและเทคโนโลยีการศึกษา', '303');

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `Emp_ID` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'รหัสบุคลากร',
  `Prefix` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'คำนำหน้า',
  `EmpName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'ชื่อบุคลากร',
  `EmpLastName` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'นามสกุล',
  `Sex` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'เพศ',
  `Birthday` date DEFAULT NULL COMMENT 'วันเกิด',
  `ID_card` int(100) NOT NULL COMMENT 'รหัสบัตรประชาชน',
  `Age` varchar(3) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'อายุ',
  `Address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'ที่อยู่',
  `Tel` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'เบอร์โทร',
  `Username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Username',
  `Password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Password',
  `Work_day` date DEFAULT NULL COMMENT 'วันทำงาน',
  `Duration_work` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'อายุงาน',
  `SendingLeaveStatus` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'สถานะการส่งใบลา',
  `Empstatus_ID` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'รหัสสถานะ',
  `Position_ID` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'รหัสตำแหน่ง',
  `Dept_ID` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'รหัสแผนก',
  `Sector_ID` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'รหัสฝ่านงาน',
  `LType_ID` int(10) NOT NULL,
  PRIMARY KEY (`Emp_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES ('1000.11.170', 'นางสาว', 'จิตติรัตน์', 'มาบจะบก', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5015', '1004', '', '0');
INSERT INTO `employee` VALUES ('1000.11.194', 'นางสาว', 'อุดมลักษณ์', 'พึ่งอารมณ์', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5015', '1004', '', '0');
INSERT INTO `employee` VALUES ('1000.14.172', 'นางสาว', 'กาญจนาภรณ์', 'เจนศิริวงษ์', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5015', '1005', '', '0');
INSERT INTO `employee` VALUES ('1000.14.178', 'นางสาว', 'นาตยา', 'ธารณะกลาง', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5015', '1001', '', '0');
INSERT INTO `employee` VALUES ('1000.2.184', 'นางสาว', 'อนัญญา', 'สีกระโทก', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', '0');
INSERT INTO `employee` VALUES ('1000.2.188', 'นางสาว', 'อัจฉรา', 'เทือกพุดซา', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '-', '', '0');
INSERT INTO `employee` VALUES ('1000.2.189', 'นาง', 'จุฑารัตน์', 'บุญคำ', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1006', '', '0');
INSERT INTO `employee` VALUES ('1000.2.190', 'นางสาว', 'พิมพ์ชนก', 'แยกโคกสูง', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', '0');
INSERT INTO `employee` VALUES ('1000.25.191', 'นาย', 'ศุภกร', 'จันทเสวต', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5018', '1002', '', '0');
INSERT INTO `employee` VALUES ('1000.27.186', 'นาย', 'วิโรจน์', 'ธรรมวัตร์', 'ชาย', '0000-00-00', '22222', '', '', '', 'level1/2', '123', '0000-00-00', '', '', '201', '5020', '1005', '302', '0');
INSERT INTO `employee` VALUES ('1000.27.195', 'นาย', 'ราเมศร์', 'ประเสริฐกลาง', 'ชาย', '0000-00-00', '0', '', '', '', 'level1', '123', '0000-00-00', '', '', '202', '5016', '1002', '302', '0');
INSERT INTO `employee` VALUES ('1000.3.164', 'นางสาว', 'พรทิพย์', 'บั้งจันอัด', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', '0');
INSERT INTO `employee` VALUES ('1000.3.177', 'นาย', 'ประภวิชญ์', 'บรรจงกุล', 'ชาย', '0000-00-00', '0', '', '', '', 'level1/1', '123', '0000-00-00', '', '', '202', '5022', '1002', '301', '0');
INSERT INTO `employee` VALUES ('1000.3.179', 'นาย', 'กฤษฎา', 'ยงย่วน', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', '0');
INSERT INTO `employee` VALUES ('1000.3.185', 'นางสาว', 'อาจารี', 'จรานุวัฒน์', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5020', '1005', '', '0');
INSERT INTO `employee` VALUES ('1000.3.96', 'นาย', 'มาโนช', 'อุทรส', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1001', '', '0');
INSERT INTO `employee` VALUES ('1000.34.166', 'นาย', 'วินิจ', 'การชงัด', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5017', '1002', '', '0');
INSERT INTO `employee` VALUES ('1000.34.167', 'นาย', 'ไพล', 'เพราะผักแว่น', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5017', '1002', '', '0');
INSERT INTO `employee` VALUES ('1000.8.163', 'นางสาว', 'ศิรินภา', 'แสงสุขสว่าง', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1001', '', '0');
INSERT INTO `employee` VALUES ('1000.8.171', 'นางสาว', 'กิติยา', 'นิวาศานนท์', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '203', '5014', '1002', '', '0');
INSERT INTO `employee` VALUES ('1000.8.173', 'นาย', 'เชิดชัย', 'คนรู้', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1004', '302', '0');
INSERT INTO `employee` VALUES ('1000.8.180', 'นางสาว', 'มยุรี', 'รุนสูงเนิน', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1006', '', '0');
INSERT INTO `employee` VALUES ('1000.8.181', 'นาย', 'จักรพงษ์', 'ทาวะรมย์', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1002', '', '0');
INSERT INTO `employee` VALUES ('1000.8.192', 'นางสาว', 'เมธวดี', 'กรองโพธิ์', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1005', '', '0');
INSERT INTO `employee` VALUES ('1000.8.193', 'นาย', 'พีระยุทธ', 'หมื่นบุญมี', 'ชาย', '0000-00-00', '0', '', '', '', 'level2', '123', '0000-00-00', '', '', '203', '5011', '1002', '301', '0');
INSERT INTO `employee` VALUES ('1000.87.174', 'นาย', 'มงคล', 'ทองคำ', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5016', '1001', '', '0');
INSERT INTO `employee` VALUES ('1000.87.175', 'นาย', 'พลากร', 'ชาญสูงเนิน', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5016', '1001', '', '0');
INSERT INTO `employee` VALUES ('242', 'ผศ.', 'พรภัสสร', 'อ่อนเกิด', 'หญิง', '0000-00-00', '0', '', '', '', 'level4', '123', '0000-00-00', '', '', '203', '5002', '-', '', '0');
INSERT INTO `employee` VALUES ('256', 'ผศ.', 'อภิชาต', 'ติรประเสริฐสิน', 'ชาย', '0000-00-00', '0', '', '', '', 'level5', '123', '0000-00-00', '', '', '203', '5001', '-', '', '0');
INSERT INTO `employee` VALUES ('5229007.02', 'นาย', 'สุเทพ', 'ยนต์พิมาย', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '201', '5004', '1001', '', '0');
INSERT INTO `employee` VALUES ('5329018.02', 'นางสาว', 'กัญญาภัทร', 'ชูพุทธพงษ์', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '201', '5019', '1001', '', '0');
INSERT INTO `employee` VALUES ('5329019.02', 'นาง', 'รติมา', 'ปลั่งกลาง', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '201', '5021', '1001', '', '0');
INSERT INTO `employee` VALUES ('5329020.02', 'นาง', 'ปวีณา', 'นาดี', 'หญิง', '0000-00-00', '0', '', '', '', 'admin', '123', '0000-00-00', '', '', '202', '5023', '1001', '301', '0');
INSERT INTO `employee` VALUES ('5329021.02', 'นาง', 'วันวิสาข์', 'ยนต์พิมาย', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', '0');
INSERT INTO `employee` VALUES ('5329022.02', 'นางสาว', 'สาวอุไร', 'แสงศิริ', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5007', '1001', '', '0');
INSERT INTO `employee` VALUES ('5329023.02', 'นาย', 'ชัยวัฒน์', 'แดงจันทึก', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5010', '1001', '301', '0');
INSERT INTO `employee` VALUES ('5329032.02', 'นาย', 'สายชล', 'สารนอก', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5019', '1001', '', '0');
INSERT INTO `employee` VALUES ('5329107', 'นางสาว', 'นรารักษ์', 'บุตรชา', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5003', '1001', '301', '0');
INSERT INTO `employee` VALUES ('5429016.02', 'นางสาว', 'ลำแพน', 'กลิ่นพยอม', 'หญิง', '0000-00-00', '0', '', '', '', 'level3', '123', '0000-00-00', '', '', '202', '5005', '1002', '301', '0');
INSERT INTO `employee` VALUES ('5429017.02', 'นาง', 'ณัฐชนันย์', 'ฉายะพงษ์', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5006', '1001', '', '0');
INSERT INTO `employee` VALUES ('5429018.02', 'นางสาว', 'อาภาพร', 'สุประดิษฐ์', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5019', '1001', '', '0');
INSERT INTO `employee` VALUES ('5429024.02', 'นาย', 'ธีรธรรม์', 'โรจจนรุ่งสถิตย์', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5012', '1001', '', '0');
INSERT INTO `employee` VALUES ('5429110', 'นางสาว', 'อรวรรณ', 'พรตะคุ', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5013', '1001', '', '0');
INSERT INTO `employee` VALUES ('5629020.02', 'นาง', 'สุรวดี', 'กอคูณกลาง', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', '0');
INSERT INTO `employee` VALUES ('5629021.02', 'นาง', 'รัชดาพร', 'บุญไมตรี', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5021', '1001', '', '0');
INSERT INTO `employee` VALUES ('5629022.02', 'นาย', 'รัญชน์', 'แถวโสภา', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5005', '1001', '', '0');
INSERT INTO `employee` VALUES ('5829006.02', 'นางสาว', 'วิลาวัณย์', 'แสนสุข', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5021', '1001', '', '0');
INSERT INTO `employee` VALUES ('5829011.02', 'นาย', 'ทิวธวัช', 'เมฆวิชัย', 'ชาย', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5019', '1001', '', '0');
INSERT INTO `employee` VALUES ('5829013.02', 'นางสาว', 'ทัศนีย์', 'เปรียบจันทึก', 'หญิง', '0000-00-00', '0', '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', '0');

-- ----------------------------
-- Table structure for employeestatus
-- ----------------------------
DROP TABLE IF EXISTS `employeestatus`;
CREATE TABLE `employeestatus` (
  `Empstatus_ID` varchar(10) NOT NULL COMMENT 'รหัสสถานะบุคลากร',
  `EmpstatusName` varchar(100) NOT NULL COMMENT 'สถานะบุคลากร',
  PRIMARY KEY (`Empstatus_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of employeestatus
-- ----------------------------
INSERT INTO `employeestatus` VALUES ('201', 'ลูกจ้างเงินรายได้');
INSERT INTO `employeestatus` VALUES ('202', 'พนักงานมหาวิทยาลัย');
INSERT INTO `employeestatus` VALUES ('203', 'ข้าราชการ');

-- ----------------------------
-- Table structure for leave
-- ----------------------------
DROP TABLE IF EXISTS `leave`;
CREATE TABLE `leave` (
  `Leave_ID` int(20) NOT NULL AUTO_INCREMENT COMMENT 'รหัสการลา',
  `Emp_ID` varchar(20) NOT NULL COMMENT 'รหัสพนักงาน',
  `Name_Leave` varchar(255) NOT NULL COMMENT 'เรื่องของการลา',
  `To_Person` varchar(255) NOT NULL COMMENT 'ส่งหา',
  `LeaveDateStart` date NOT NULL COMMENT 'วันเริ่มลา',
  `LeaveDateLast` date NOT NULL COMMENT 'วันสิ้นสุดการลา',
  `LeaveData` varchar(255) NOT NULL COMMENT 'ข้อมูลการลา',
  `ContactInformation` varchar(255) NOT NULL COMMENT 'ข้อมูลการติดต่อ',
  `employee` varchar(255) NOT NULL DEFAULT '-' COMMENT 'ผู้รับผิดชอบงานแทน',
  `LeaveTotal` double(10,0) NOT NULL COMMENT 'จำนวนการลา',
  `LeaveStatus_ID` int(10) NOT NULL COMMENT 'รหัสสถานะการลา',
  `LeaveStatus_Document` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'สถานะการส่งใบลาฉบับจริง',
  `Response_Time` datetime NOT NULL COMMENT 'เวลาที่ตอบรับ',
  `Person_Code_Allow` varchar(20) NOT NULL COMMENT 'รหัสผู้อนุญาต',
  `LType_ID` int(10) NOT NULL COMMENT 'รหัสประเภทการลา	',
  `file_names` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`Leave_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of leave
-- ----------------------------
INSERT INTO `leave` VALUES ('4', '1000.27.195', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2020-11-15', '2020-11-30', '', '', '', '2', '1', 'ส่งใบลาฉบับจริงแล้ว', '0000-00-00 00:00:00', '', '4007', '');

-- ----------------------------
-- Table structure for leavestatus
-- ----------------------------
DROP TABLE IF EXISTS `leavestatus`;
CREATE TABLE `leavestatus` (
  `LeaveStatus_ID` int(10) NOT NULL COMMENT 'รหัสสถานะการลา',
  `LeaveStatus_Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ชื่อสถานนะ',
  PRIMARY KEY (`LeaveStatus_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of leavestatus
-- ----------------------------
INSERT INTO `leavestatus` VALUES ('1', 'รออนุญาตจากหัวหน้าแผนก');
INSERT INTO `leavestatus` VALUES ('2', 'รออนุญาตจากหัวหน้างาน');
INSERT INTO `leavestatus` VALUES ('3', 'รออนุญาตจากรองหัวหน้าหน่วยงาน');
INSERT INTO `leavestatus` VALUES ('4', 'รออนุญาตจากหัวหน้าหน่วยงาน');
INSERT INTO `leavestatus` VALUES ('5', 'อนุญาต');
INSERT INTO `leavestatus` VALUES ('6', 'ไม่อนุญาต');
INSERT INTO `leavestatus` VALUES ('7', 'ยกเลิกการลา');

-- ----------------------------
-- Table structure for leavetype
-- ----------------------------
DROP TABLE IF EXISTS `leavetype`;
CREATE TABLE `leavetype` (
  `LType_ID` int(10) NOT NULL AUTO_INCREMENT COMMENT 'รหัสประเภทการลา',
  `LTypeName` varchar(100) NOT NULL COMMENT 'ชื่อประเภทการลา',
  `Number` int(10) DEFAULT NULL COMMENT 'จำนวนวันลา',
  `LType_limit` int(10) DEFAULT NULL,
  `AdvanceNotice` varchar(50) DEFAULT NULL COMMENT 'แจ้งล่วงหน้า',
  `LOrdinal` int(10) DEFAULT NULL COMMENT 'จำนวนครั้งที่ลา',
  `QuotaStatus` varchar(100) NOT NULL COMMENT 'สถานะสิทธิ์การลา',
  `leavetype_remark` varchar(255) NOT NULL COMMENT 'หมายเหตุ',
  `Empstatus_ID` varchar(10) NOT NULL COMMENT 'สถานะบุคลากร',
  PRIMARY KEY (`LType_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4027 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of leavetype
-- ----------------------------
INSERT INTO `leavetype` VALUES ('4001', 'ลาป่วย', '60', '10', 'ไม่ต้องแจ่งล่วงหน้า', '0', 'ลาได้', '', '203');
INSERT INTO `leavetype` VALUES ('4002', 'ลาป่วย', '60', '10', '12', '0', 'ลาได้', '', '202');
INSERT INTO `leavetype` VALUES ('4003', 'ลาป่วย', '15', '5', '0', '0', 'ลาได้', '-', '201');
INSERT INTO `leavetype` VALUES ('4004', 'ลากิจ', '30', '0', '5', '0', 'ลาได้', '', '203');
INSERT INTO `leavetype` VALUES ('4005', 'ลากิจ', '30', '50', '5', '0', 'ลาได้', '', '202');
INSERT INTO `leavetype` VALUES ('4007', 'ลาพักผ่อน', '10', '20', '7', '0', 'ลาได้', '', '202');
INSERT INTO `leavetype` VALUES ('4009', 'ลาพักผ่อน', '10', '0', '-', '0', 'ลาได้', '', '203');
INSERT INTO `leavetype` VALUES ('4010', 'ลาคลอด', '90', '0', '-', '0', 'ลาได้', '', '203');
INSERT INTO `leavetype` VALUES ('4011', 'ลาอุปสมบท', '120', '0', '-', '0', 'ลาได้', '', '203');
INSERT INTO `leavetype` VALUES ('4013', 'ลาคลอด', '90', '0', '-', '0', 'ลาได้', '', '202');
INSERT INTO `leavetype` VALUES ('4014', 'ลาอุปสมบท', '15', '100', '60', '0', 'ลาได้', '', '202');
INSERT INTO `leavetype` VALUES ('4015', 'ลาพักผ่อน', '10', '5', '0', '0', 'ลาได้', '-', '201');
INSERT INTO `leavetype` VALUES ('4024', 'asd', '0', '0', '', '0', '', '', '');
INSERT INTO `leavetype` VALUES ('4025', 'asd', '0', '0', '', '0', '', '', '');
INSERT INTO `leavetype` VALUES ('4026', 'asdsa', '0', '0', '', '0', '', '', '');

-- ----------------------------
-- Table structure for leave_limit
-- ----------------------------
DROP TABLE IF EXISTS `leave_limit`;
CREATE TABLE `leave_limit` (
  `limit_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name_limit` varchar(255) NOT NULL,
  `Date_start` date NOT NULL,
  `limit_date` varchar(255) NOT NULL,
  PRIMARY KEY (`limit_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of leave_limit
-- ----------------------------
INSERT INTO `leave_limit` VALUES ('27', '1', '2020-11-19', '1');
INSERT INTO `leave_limit` VALUES ('28', 'sd', '2020-11-19', '1');

-- ----------------------------
-- Table structure for officiate_day
-- ----------------------------
DROP TABLE IF EXISTS `officiate_day`;
CREATE TABLE `officiate_day` (
  `Day_Work` date NOT NULL COMMENT 'วันที่มาทำงาน',
  `Status_Work` varchar(100) NOT NULL COMMENT 'สถานนะ',
  `Emp_ID` varchar(20) NOT NULL COMMENT 'รหัสพนักงาน',
  `Data` varchar(255) NOT NULL COMMENT 'สาเหตุ',
  `Day_ID` int(20) NOT NULL AUTO_INCREMENT COMMENT 'รหัสวันมาทำงาน',
  PRIMARY KEY (`Day_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of officiate_day
-- ----------------------------
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'ไม่มาทำงาน', '1000.11.170', '', '101');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.11.194', '', '102');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.14.172', '', '103');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.14.178', '', '104');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.2.184', '', '105');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.2.188', '', '106');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.2.189', '', '107');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.2.190', '', '108');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.25.191', '', '109');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.27.186', '', '110');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.27.195', '', '111');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.3.164', '', '112');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.3.177', '', '113');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.3.179', '', '114');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.3.185', '', '115');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.3.96', '', '116');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.34.166', '', '117');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.34.167', '', '118');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.8.163', '', '119');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.8.171', '', '120');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.8.173', '', '121');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.8.180', '', '122');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.8.181', '', '123');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.8.192', '', '124');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.8.193', '', '125');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.87.174', '', '126');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '1000.87.175', '', '127');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '242', '', '128');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '256', '', '129');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '5229007.02', '', '130');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '5329018.02', '', '131');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '5329019.02', '', '132');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '5329020.02', '', '133');
INSERT INTO `officiate_day` VALUES ('2020-09-29', 'มาทำงาน', '5329021.02', '', '134');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5329022.02', '', '135');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5329023.02', '', '136');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5329032.02', '', '137');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5329107', '', '138');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5429012.02', '', '139');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5429016.02', '', '140');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5429017.02', '', '141');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5429018.02', '', '142');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5429024.02', '', '143');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5429110', '', '144');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5629020.02', '', '145');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5629021.02', '', '146');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5629022.02', '', '147');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5829006.02', '', '148');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5829011.02', '', '149');
INSERT INTO `officiate_day` VALUES ('2020-09-30', 'มาทำงาน', '5829013.02', '', '150');

-- ----------------------------
-- Table structure for position
-- ----------------------------
DROP TABLE IF EXISTS `position`;
CREATE TABLE `position` (
  `Position_ID` varchar(10) NOT NULL COMMENT 'รหัสตำแหน่ง',
  `PositionName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ชื่อตำแหน่ง',
  `Role` varchar(1) NOT NULL COMMENT 'สิทธิการข้าใช้',
  PRIMARY KEY (`Position_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of position
-- ----------------------------
INSERT INTO `position` VALUES ('5001', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '5');
INSERT INTO `position` VALUES ('5002', 'รองผู้อำนวยการฝ่ายบริหารงานทั่วไป', '4');
INSERT INTO `position` VALUES ('5003', 'รองผู้อำนวยการฝ่ายวิทยบริการ', '4');
INSERT INTO `position` VALUES ('5004', 'หัวหน้าสำนักงานผู้อำนวยการ', '3');
INSERT INTO `position` VALUES ('5005', 'หัวหน้างานเทคโนโลยีสารสนเทศ', '3');
INSERT INTO `position` VALUES ('5006', 'หัวหน้างานวิทยบริการ', '3');
INSERT INTO `position` VALUES ('5007', 'หัวหน้าบริหารงานทั่วไป', '3');
INSERT INTO `position` VALUES ('5008', 'หัวหน้าแผนกงานห้องสมุด', '2');
INSERT INTO `position` VALUES ('5009', 'หัวหน้าแผนกงานธุรการสำนักงาน', '2');
INSERT INTO `position` VALUES ('5010', 'หัวหน้าแผนกงานวิศวกรรมเครือข่าย', '2');
INSERT INTO `position` VALUES ('5011', 'หัวหน้าแผนกอีเลิร์นนิ่งและเทคโนโลยีสารสนเทศ', '2');
INSERT INTO `position` VALUES ('5012', 'หัวหน้าแผนกระบบสารสนเทศเพื่อการบริหาร', '2');
INSERT INTO `position` VALUES ('5013', 'หัวหน้าแผนกศูนย์การเรียนรู้ด้วยตนเอง', '2');
INSERT INTO `position` VALUES ('5014', 'นักวิชาการคอมพิวเตอร์', '1');
INSERT INTO `position` VALUES ('5015', 'ผู้ปฏิบัติงานบริหาร', '1');
INSERT INTO `position` VALUES ('5016', 'วิศวกร', '1');
INSERT INTO `position` VALUES ('5017', 'นักเอกสารสนเทศ', '1');
INSERT INTO `position` VALUES ('5018', 'เจ้าหน้าที่ห้องสมุด', '1');
INSERT INTO `position` VALUES ('5019', 'นักวิชาการศึกษา', '1');
INSERT INTO `position` VALUES ('5020', 'นักวิชาการโสตทัศนศึกษา', '1');
INSERT INTO `position` VALUES ('5021', 'บรรณารักษ์', '1');
INSERT INTO `position` VALUES ('5022', 'เจ้าหน้าที่บริหารงานทั่วไป', '1');
INSERT INTO `position` VALUES ('5023', 'ผู้ดูแลระบบ', '6');

-- ----------------------------
-- Table structure for sector
-- ----------------------------
DROP TABLE IF EXISTS `sector`;
CREATE TABLE `sector` (
  `Sector_ID` varchar(10) NOT NULL COMMENT 'รหัสฝ่ายงาน',
  `SectorName` varchar(255) NOT NULL COMMENT 'ชื่อฝ่ายงาน',
  PRIMARY KEY (`Sector_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sector
-- ----------------------------
INSERT INTO `sector` VALUES ('301', 'งานบริหารงานทั่วไป');
INSERT INTO `sector` VALUES ('302', 'งานวิทยบริการ');
INSERT INTO `sector` VALUES ('303', 'งานเทคโนโลยีสารสนเทศ');

-- ----------------------------
-- Table structure for upload
-- ----------------------------
DROP TABLE IF EXISTS `upload`;
CREATE TABLE `upload` (
  `file_ID` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) NOT NULL,
  PRIMARY KEY (`file_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of upload
-- ----------------------------
INSERT INTO `upload` VALUES ('52', '936378.jpg');
INSERT INTO `upload` VALUES ('53', '');
INSERT INTO `upload` VALUES ('54', '11a84648cae4450cce70b10800680f96.jpeg');
INSERT INTO `upload` VALUES ('55', '');
INSERT INTO `upload` VALUES ('56', '37983.jpg');
INSERT INTO `upload` VALUES ('57', '');
INSERT INTO `upload` VALUES ('58', '37983.jpg');
INSERT INTO `upload` VALUES ('59', '');
INSERT INTO `upload` VALUES ('60', '37982.jpg');
INSERT INTO `upload` VALUES ('61', '');
INSERT INTO `upload` VALUES ('62', '37983.jpg');
INSERT INTO `upload` VALUES ('63', '');
INSERT INTO `upload` VALUES ('64', '37983.jpg');
INSERT INTO `upload` VALUES ('65', '');
INSERT INTO `upload` VALUES ('66', '37982.jpg');
INSERT INTO `upload` VALUES ('67', '');
INSERT INTO `upload` VALUES ('68', 'thumb-1920-943514.jpg');
INSERT INTO `upload` VALUES ('69', '');
INSERT INTO `upload` VALUES ('70', 'thumb-1920-943514.jpg');
INSERT INTO `upload` VALUES ('71', '');
INSERT INTO `upload` VALUES ('72', 'thumb-1920-943514.jpg');
