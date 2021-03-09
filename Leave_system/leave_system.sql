-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.11-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for leave_system
CREATE DATABASE IF NOT EXISTS `leave_system` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `leave_system`;

-- Dumping structure for table leave_system.cancel_leave
CREATE TABLE IF NOT EXISTS `cancel_leave` (
  `cancel_id` int(11) NOT NULL AUTO_INCREMENT,
  `cancel_data` varchar(255) DEFAULT NULL,
  `cancel_date_start` date DEFAULT NULL,
  `cancel_date_stop` date DEFAULT NULL,
  `cancel_total` float unsigned DEFAULT NULL,
  `cancel_status` varchar(255) DEFAULT NULL,
  `leave_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`cancel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.cancel_leave: ~0 rows (approximately)
DELETE FROM `cancel_leave`;
/*!40000 ALTER TABLE `cancel_leave` DISABLE KEYS */;
INSERT INTO `cancel_leave` (`cancel_id`, `cancel_data`, `cancel_date_start`, `cancel_date_stop`, `cancel_total`, `cancel_status`, `leave_ID`) VALUES
	(21, '', '2021-03-15', '2021-03-16', 2, '8', 263905);
/*!40000 ALTER TABLE `cancel_leave` ENABLE KEYS */;

-- Dumping structure for table leave_system.department
CREATE TABLE IF NOT EXISTS `department` (
  `Dept_ID` int(10) NOT NULL AUTO_INCREMENT COMMENT 'รหัสแผนก',
  `DeptName` varchar(255) DEFAULT '-' COMMENT 'ชื่อแผนก',
  PRIMARY KEY (`Dept_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1010 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.department: ~8 rows (approximately)
DELETE FROM `department`;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	(1001, 'แผนกงานธุรการสำนัก');
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	(1002, 'แผนกงานห้องสมุด');
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	(1003, 'แผนกงานศูนย์การเรียนรู้ด้วยตนเอง');
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	(1004, 'แผนกงานวิศวกรรมเครือข่าย');
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	(1005, 'แผนกงานอีเลิร์นนิ่งและเทคโนโลยีการศึกษา');
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	(1006, 'ไม่มีสังกัดแผนกงาน');
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	(1007, 'แผนกงานวิศวกรรมเครือข่าย');
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	(1009, 'แผนกงานระบบสารสนเทศเพื่อการบริหาร');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;

-- Dumping structure for table leave_system.employee
CREATE TABLE IF NOT EXISTS `employee` (
  `Emp_ID` varchar(200) NOT NULL COMMENT 'รหัสบุคลากร',
  `Prefix` varchar(60) DEFAULT NULL COMMENT 'คำนำหน้า',
  `EmpName` varchar(255) DEFAULT NULL COMMENT 'ชื่อบุคลากร',
  `EmpLastName` varchar(150) DEFAULT NULL COMMENT 'นามสกุล',
  `Sex` varchar(100) DEFAULT NULL COMMENT 'เพศ',
  `ID_card` varchar(50) DEFAULT NULL COMMENT 'รหัสบัตรประชาชน',
  `Address` varchar(255) DEFAULT NULL COMMENT 'ที่อยู่',
  `Tel` varchar(20) DEFAULT NULL COMMENT 'เบอร์โทร',
  `Username` varchar(50) DEFAULT NULL COMMENT 'Username',
  `Password` varchar(50) DEFAULT NULL COMMENT 'Password',
  `Work_day` date DEFAULT NULL COMMENT 'วันทำงาน',
  `Duration_work` varchar(20) DEFAULT NULL COMMENT 'อายุงาน',
  `status_data` varchar(20) DEFAULT NULL COMMENT 'สถานะของข้อมูล',
  `Empstatus_ID` varchar(20) DEFAULT NULL COMMENT 'รหัสสถานะ',
  `Position_ID` varchar(20) DEFAULT NULL COMMENT 'รหัสตำแหน่ง',
  `Dept_ID` varchar(20) DEFAULT NULL COMMENT 'รหัสแผนก',
  `Sector_ID` varchar(20) DEFAULT NULL COMMENT 'รหัสฝ่านงาน',
  `privilege` varchar(50) DEFAULT NULL COMMENT 'กำหนดว่าใครเป็น User,Addmin',
  PRIMARY KEY (`Emp_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.employee: ~18 rows (approximately)
DELETE FROM `employee`;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('ananya.si', 'นางสาว', 'อนัญญา', 'สีกระโทก', 'ชาย', '1309900759252', 'Nakhon Ratchasima', '', '', '', '2018-08-06', '', 'Y', '201', '5022', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('annop.mu', 'นาย', 'อรรณพ', 'เหมือนจิต', '', '1101800983198', 'Nakhon Ratchasima', '', '', '', '2021-02-03', '', 'W', 'null', 'null', 'null', 'null', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('apichat', 'นาย', 'อภิชาต', 'ติรประเสริฐสิน', '', '3309901338702', 'Nakhon Ratchasima', '', '', '', '2021-01-26', '', 'Y', '203', '5001', '1006', '304', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('dulyakit.ph', 'นาย', 'ดุลยกิจ', 'พรมชาติ', '', '1339900608149', 'Nakhon Ratchasima', '', '', '', '2021-02-15', '', 'W', '', '', '', NULL, '');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('dulyapol.bu', 'นาย', 'ประภวิชญ์', 'บรรจงกุล', '', '1100500141379', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '201', '5022', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('gasam.pa', 'นาย', 'เกษม', 'พาพุทธ', 'ชาย', '1390400035231', 'Nakhon Ratchasima', '', '', '', '2021-01-28', '4เดือน', 'Y', '201', '5016', '1007', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('kanjanaporn.jn', 'นางสาว', 'กาญจนาภรณ์', 'เจนศิริวงษ์', '', '1200900169636', 'Nakhon Ratchasima', '', '', '', '2021-01-15', '', 'Y', '201', '5015', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('kittipong.pl', 'นาย', 'กิตติพงษ์', 'ปลิงกระโทก', '', '1309901292161', 'Nakhon Ratchasima', '', '', '', '2021-01-06', '', 'Y', '202', '5001', '1006', '304', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('komittibate.ma', 'นาย', 'คมอิทธิเบศ', 'แมบจันทึก', '', '1309901100556', 'Nakhon Ratchasima', '', '', '', '2021-02-05', '', 'W', '', '', '', NULL, '');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('lampan.ki', 'นางสาว', 'ลำแพน', 'กลิ่นพยอม', '', '5570400049186', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5009', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('nuttacit.ph', 'นาย', 'ณัฐสิทธิ์', 'ผัดตุ่น', '', '1630200064072', 'Nakhon Ratchasima', '', '', '', '2006-02-05', '', 'Y', '202', '5024', '1007', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('phitchayakorn.sr', 'นาย', 'พิชญากร', 'ศรีเนาวรัตน์', '', '1309900951358', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '203', '5025', '1007', '305', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('pornpassorn.on', 'นาง', 'พรภัสสร', 'อ่อนเกิด', '', '3309901094854', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '203', '5002', '1006', '301', 'A');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('sarayuth.kr', 'นาย', 'ศรายุทธ', 'ไกรษร', '', '1309901383809', 'Nakhon Ratchasima', '', '', '', '2010-10-01', '10ปี', 'Y', '203', '5002', '1006', '301', 'A');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('surawadee.ko', 'นาง', 'สุรวดี', 'กอคูณกลาง', '', '1309900249637', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5022', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('tassanee', 'นางสาว', 'ทัศนีย์', 'เปรียบจันทึก', '', '3300800364564', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5022', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('urai', 'นางสาว', 'อุไร', 'แสงศิริ', '', '3300100663038', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5007', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('veenuntiya.sa', 'นางสาว', 'วีร์นันทิยา', 'ทรัพย์มาก', 'หญิง', '1300900170331', 'Nakhon Ratchasima', '', '', '', '2020-01-14', '1ปี', 'Y', '202', '5026', '1007', '305', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('wanwisa', 'นาง', 'วันวิสาข์', 'ยนต์พิมาย', 'หญิง', '3309901609374', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5004', '1006', '301', 'U');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;

-- Dumping structure for table leave_system.employeestatus
CREATE TABLE IF NOT EXISTS `employeestatus` (
  `Empstatus_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'รหัสสถานะบุคลากร',
  `EmpstatusName` varchar(100) DEFAULT NULL COMMENT 'สถานะบุคลากร',
  PRIMARY KEY (`Empstatus_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=205 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.employeestatus: ~3 rows (approximately)
DELETE FROM `employeestatus`;
/*!40000 ALTER TABLE `employeestatus` DISABLE KEYS */;
INSERT INTO `employeestatus` (`Empstatus_ID`, `EmpstatusName`) VALUES
	(201, 'ลูกจ้างเงินรายได้');
INSERT INTO `employeestatus` (`Empstatus_ID`, `EmpstatusName`) VALUES
	(202, 'พนักงานมหาวิทยาลัย');
INSERT INTO `employeestatus` (`Empstatus_ID`, `EmpstatusName`) VALUES
	(203, 'ข้าราชการ');
/*!40000 ALTER TABLE `employeestatus` ENABLE KEYS */;

-- Dumping structure for table leave_system.file_upload
CREATE TABLE IF NOT EXISTS `file_upload` (
  `file_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Leave_ID` int(11) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`file_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=194 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.file_upload: ~6 rows (approximately)
DELETE FROM `file_upload`;
/*!40000 ALTER TABLE `file_upload` DISABLE KEYS */;
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(176, 15415, '../upload/16149608213.png');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(177, 15415, '../upload/16149608224.png');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(178, 15415, '../upload/16149608225.png');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(179, 745505, '../upload/16149608831111191414264850_120209161626200.jpg');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(180, 745505, '../upload/1614960884bootstrap1.png');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(181, 745505, '../upload/1614960886BwssIAuCMAEXvUi.png');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(182, 139450, '../upload/16151207412-3.jpg');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(183, 139450, '../upload/16151207415.png');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(184, 139450, '../upload/1615120741978-616-538-305-9_custom_.jpg');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(185, 186007, '../upload/16151280031_bxEkHw1xewxOFjmGunb-Cw.png');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(186, 186007, '../upload/16151280032.png');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(187, 671427, '../upload/16151280402-3.jpg');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(188, 948139, '../upload/16151280755.png');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(189, 948139, '../upload/1615128075978-616-538-305-9_custom_.jpg');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(190, 486339, '../upload/1615128118122797774.jpg');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(191, 191734, '../upload/16151790281_bxEkHw1xewxOFjmGunb-Cw.png');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(192, 191734, '../upload/16151790282.png');
INSERT INTO `file_upload` (`file_ID`, `Leave_ID`, `file_name`) VALUES
	(193, 703802, '../upload/16151790645.png');
/*!40000 ALTER TABLE `file_upload` ENABLE KEYS */;

-- Dumping structure for table leave_system.holiday
CREATE TABLE IF NOT EXISTS `holiday` (
  `holiday_ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `holiday_date` date DEFAULT NULL,
  `holiday_data` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`holiday_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.holiday: ~49 rows (approximately)
DELETE FROM `holiday`;
/*!40000 ALTER TABLE `holiday` DISABLE KEYS */;
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(1, '2021-01-01', 'วันขึ้นปีใหม่');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(2, '2021-02-26', 'วันมาฆบูชา');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(3, '2021-04-06', 'วันจักรี');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(4, '2021-04-13', 'วันสงกรานต์');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(5, '2021-04-14', 'วันสงกรานต์');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(6, '2021-04-15', 'วันสงกรานต์');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(7, '2021-05-11', 'วันพืชมงคล');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(8, '2020-05-26', 'วันวิสาขบูชา');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(9, '2020-07-24', 'วันอาสาฬหบูชา');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(11, '2020-07-25', 'วันเข้าพรรษา');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(12, '2020-07-26', 'วันหยุดชดเชยวันเข้าพรรษา');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(13, '2020-07-26', 'วันหยุดชดเชยวันอาสาฬหบูชา');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(14, '2020-07-28', 'วันเกิดของพระบาทสมเด็จพระเจ้าอยู่หัว');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(15, '2020-08-12', 'วันแม่แห่งชาติ');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(16, '2020-10-23', 'วันปิยมหาราช');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(17, '2020-10-25', 'วันหยุดชดเชยวันปิยมหาราช');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(18, '2020-12-03', 'วันคล้ายวันพระราชสมภพ รัชกาลที่ 9');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(19, '2020-12-08', 'วันหยุดชดเชยวันคล้ายวันพระราชสมภพ รัชกาลที่ 9');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(20, '2020-12-10', 'วันรัฐธรรมนูญ');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(21, '2020-12-31', 'วันส่งท้ายปีเก่า');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(22, '2022-01-01', 'วันขึ้นปีใหม่');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(23, '2022-02-26', 'วันมาฆบูชา');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(24, '2020-12-31', 'วันสิ้นปี');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(28, '2022-04-13', 'วันสงกรานต์');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(29, '2022-04-14', 'วันสงกรานต์');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(30, '2022-04-15', 'วันสงกรานต์');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(31, '2022-05-11', 'วันพืชมงคล');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(32, '2022-05-26', 'วันวิสาขบูชา');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(33, '2022-07-24', 'วันอาสาฬหบูชา');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(34, '2022-07-25', 'วันเข้าพรรษา');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(35, '2022-07-26', 'วันหยุดชดเชยวันเข้าพรรษา');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(36, '2022-07-26', 'วันหยุดชดเชยวันอาสาฬหบูชา');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(37, '2022-07-28', 'วันเกิดของพระบาทสมเด็จพระเจ้าอยู่หัว');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(38, '2022-08-12', 'วันแม่แห่งชาติ');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(39, '2022-10-23', 'วันปิยมหาราช');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(40, '2022-10-25', 'วันหยุดชดเชยวันปิยมหาราช');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(41, '2022-12-05', 'วันคล้ายวันพระราชสมภพ รัชกาลที่ 9');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(42, '2022-12-06', 'วันหยุดชดเชยวันคล้ายวันพระราชสมภพ รัชกาลที่ 9');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(43, '2022-12-10', 'วันรัฐธรรมนูญ');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(44, '2022-12-31', 'วันส่งท้ายปีเก่า');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(45, '2020-12-16', 'หยุดงานเพื่อเช็คหวย');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(46, '2020-12-22', 'วันอะไรก็ได้1');
INSERT INTO `holiday` (`holiday_ID`, `holiday_date`, `holiday_data`) VALUES
	(49, '2020-04-15', 'วันสงกรานต์');
/*!40000 ALTER TABLE `holiday` ENABLE KEYS */;

-- Dumping structure for table leave_system.leave
CREATE TABLE IF NOT EXISTS `leave` (
  `Leave_ID` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'รหัสการลา',
  `Emp_ID` varchar(255) DEFAULT NULL COMMENT 'รหัสพนักงาน',
  `Name_Leave` varchar(255) DEFAULT NULL COMMENT 'เรื่องของการลา',
  `To_Person` varchar(255) DEFAULT NULL COMMENT 'ส่งหา',
  `LeaveDateStart` date NOT NULL COMMENT 'วันเริ่มลา',
  `Leave_characteristics_dateStart` varchar(255) DEFAULT NULL COMMENT 'ลักษณะการลางานวันเริ่มลา',
  `LeaveDateLast` date NOT NULL COMMENT 'วันสิ้นสุดการลา',
  `Leave_characteristics_dateLast` varchar(255) DEFAULT NULL COMMENT 'ลักษณะการลางานวันสิ้นสุด',
  `LeaveData` varchar(255) DEFAULT NULL COMMENT 'ข้อมูลการลา',
  `ContactInformation` varchar(255) DEFAULT NULL COMMENT 'ข้อมูลการติดต่อ',
  `employee` varchar(255) DEFAULT '-' COMMENT 'ผู้รับผิดชอบงานแทน',
  `LeaveTotal` float DEFAULT NULL COMMENT 'จำนวนการลา',
  `number_leave` int(11) DEFAULT NULL COMMENT 'ครั้ง',
  `LeaveStatus_ID` int(10) DEFAULT NULL COMMENT 'รหัสสถานะการลา',
  `LeaveStatus_Document` varchar(255) DEFAULT NULL COMMENT 'สถานะการส่งใบลาฉบับจริง',
  `Response_Time` datetime NOT NULL COMMENT 'เวลาส่งข้อมูล',
  `limit_ID` int(11) DEFAULT NULL COMMENT 'รหัสรอบการประเมิน',
  `LType_ID` int(10) DEFAULT NULL COMMENT 'รหัสประเภทการลา	',
  `file_names` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Leave_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=946749 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leave: ~6 rows (approximately)
DELETE FROM `leave`;
/*!40000 ALTER TABLE `leave` DISABLE KEYS */;
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(11814, 'gasam.pa', 'การลากิจ/หักเงินเดือน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-23', 'เต็มวัน', '2021-03-25', 'เต็มวัน', '', '', '', 3, 1, 1, 'ยังไม่ส่งใบลาฉบับจริง', '2021-03-08 12:04:20', 30, 4037, NULL);
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(191734, 'gasam.pa', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-16', 'เต็มวัน', '2021-02-17', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', '', 2, 1, 1, 'ยังไม่ส่งใบลาฉบับจริง', '2021-03-08 11:50:28', 30, 4038, NULL);
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(414750, 'nuttacit.ph', 'การลากิจ', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-16', 'ครึ่งวันเช้า', '2021-03-16', 'ครึ่งวันเช้า', '', '', '', 0.5, 1, 2, 'ยังไม่ส่งใบลาฉบับจริง', '2021-03-08 12:05:25', 30, 4005, NULL);
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(453395, 'gasam.pa', 'การลากิจ/หักเงินเดือน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-23', 'เต็มวัน', '2021-03-24', 'เต็มวัน', 'ทดสอบ', '', '', 2, 1, 5, 'ส่งใบลาฉบับจริงแล้ว', '2021-03-08 11:51:39', 30, 4037, NULL);
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(703802, 'nuttacit.ph', 'การลากิจ', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-15', 'เต็มวัน', '2021-03-16', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', '', 2, 1, 2, 'ยังไม่ส่งใบลาฉบับจริง', '2021-03-08 11:51:04', 30, 4005, NULL);
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(779346, 'gasam.pa', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-04', 'เต็มวัน', '2021-03-05', 'เต็มวัน', '', '', '', 2, 1, 5, 'ยังไม่ส่งใบลาฉบับจริง', '2021-03-09 15:55:23', 30, 4038, NULL);
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(803189, 'nuttacit.ph', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-03', 'เต็มวัน', '2021-03-04', 'เต็มวัน', '', '', '', 2, 1, 2, 'ยังไม่ส่งใบลาฉบับจริง', '2021-03-08 12:02:28', 30, 4002, NULL);
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(841004, 'nuttacit.ph', 'การลากิจ', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-24', 'เต็มวัน', '2021-03-24', 'เต็มวัน', '', '', '', 1, 1, 2, 'ยังไม่ส่งใบลาฉบับจริง', '2021-03-08 12:00:22', 30, 4005, NULL);
/*!40000 ALTER TABLE `leave` ENABLE KEYS */;

-- Dumping structure for table leave_system.leavestatus
CREATE TABLE IF NOT EXISTS `leavestatus` (
  `LeaveStatus_ID` int(10) NOT NULL COMMENT 'รหัสสถานะการลา',
  `LeaveStatus_Name` varchar(255) DEFAULT NULL COMMENT 'ชื่อสถานนะ',
  PRIMARY KEY (`LeaveStatus_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leavestatus: ~8 rows (approximately)
DELETE FROM `leavestatus`;
/*!40000 ALTER TABLE `leavestatus` DISABLE KEYS */;
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(1, 'รอหัวหน้าแผนกอนุญาต');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(2, 'รอหัวหน้างานอนุญาต');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(3, 'รอรองหัวหน้าหน่วยงานอนุญาต');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(4, 'รอหัวหน้าหน่วยงานอนุญาต');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(5, 'อนุญาต');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(6, 'ไม่อนุญาต');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(7, 'ยกเลิกการลา');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(8, 'อนุญาตให้ยกเลิกการลา');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(9, 'ไม่อนุญาตให้ยกเลิกการลา');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(10, 'รออนุญาตให้ยกเลิกการลา');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(11, 'บันทึกข้อมูล');
/*!40000 ALTER TABLE `leavestatus` ENABLE KEYS */;

-- Dumping structure for table leave_system.leavetype
CREATE TABLE IF NOT EXISTS `leavetype` (
  `LType_ID` int(10) NOT NULL AUTO_INCREMENT COMMENT 'รหัสประเภทการลา',
  `LTypeName` varchar(100) DEFAULT NULL COMMENT 'ชื่อประเภทการลา',
  `Number` int(10) DEFAULT NULL COMMENT 'จำนวนวันลา',
  `LType_limit` int(10) DEFAULT NULL,
  `AdvanceNotice` varchar(50) DEFAULT NULL COMMENT 'แจ้งล่วงหน้า',
  `LOrdinal` int(10) DEFAULT NULL COMMENT 'จำนวนครั้งที่ลา',
  `QuotaStatus` varchar(100) DEFAULT NULL COMMENT 'สถานะสิทธิ์การลา',
  `leavetype_remark` varchar(255) DEFAULT NULL COMMENT 'หมายเหตุ',
  `Empstatus_ID` varchar(10) DEFAULT NULL COMMENT 'สถานะบุคลากร',
  PRIMARY KEY (`LType_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=40041 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leavetype: ~21 rows (approximately)
DELETE FROM `leavetype`;
/*!40000 ALTER TABLE `leavetype` DISABLE KEYS */;
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4001, 'ลาป่วย', 60, 10, 'ไม่ต้องแจ่งล่วงหน้า', 8, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4002, 'ลาป่วย', 23, 0, '-', 9, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4003, 'ลาป่วย', 15, 5, '0', 8, 'ลาได้', 'อายุงานมากว่า 6 เดือน', '201');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4004, 'ลากิจส่วนตัว', 30, 0, '5', 10, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4005, 'ลากิจ', 30, 50, '5', 8, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4007, 'ลาพักผ่อน', 10, 20, '7', 8, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4009, 'ลาพักผ่อน', 10, 0, '-', 8, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4010, 'ลาคลอดบุตร', 90, 0, '-', 2, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4011, 'ลาอุปสมบท', 120, 0, '-', 0, 'ลาไม่ได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4013, 'ลาคลอดบุตร', 90, 0, '-', 2, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4015, 'ลาพักผ่อน', 10, 5, '0', 0, 'ลาไม่ได้', '-', '201');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4029, 'ลาไปปฏิบัติงานในองค์การระหว่างประเทศ', 100, 10, '5', 0, 'ลาไม่ได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4030, 'ลาไปช่วยเหลือภรรยาที่คลอดบุตร', 90, 90, '5', 0, 'ลาไม่ได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4031, 'ลาอุปสมบทหรือการลาไปประกอบพิธีฮัจย์', 90, 90, '5', 0, 'ลาไม่ได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4032, 'ลาเขารับการตรวจเลือกหรือเข้ารับการเตียมพล', 180, 0, '5', 0, 'ลาไม่ได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4033, 'ลาไปศึกษา ฝึกอบรม ปฏิบัติการวิจัย หรือดูงาน', 180, 0, '5', 0, 'ลาไม่ได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4034, 'ลาไปปฏิบัติงานในองค์การระหว่างประเทศ', 100, 0, '-', 0, 'ลาไม่ได้', '-', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4037, 'ลากิจ', 0, 0, '5', 0, 'ลาได้', '', '201');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4038, 'ลาป่วย', 8, 0, '-', 8, 'ลาได้', 'อายุงานไม่ถึง 6 เดือน', '201');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4039, 'ลาคลอดบุตร', 45, 0, '0', 2, 'ลาได้', 'อายุงานน้อยกว่า 7 เดือน', '201');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4040, 'ลาคลอดบุตร', 90, 0, '0', 2, 'ลาได้', 'อายุงานมากว่า 7 เดือน', '201');
/*!40000 ALTER TABLE `leavetype` ENABLE KEYS */;

-- Dumping structure for table leave_system.leave_limit
CREATE TABLE IF NOT EXISTS `leave_limit` (
  `limit_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name_limit` varchar(255) DEFAULT NULL,
  `Date_start` date DEFAULT NULL,
  `Date_stop` date DEFAULT NULL,
  `date_limit` int(10) DEFAULT NULL,
  PRIMARY KEY (`limit_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leave_limit: ~6 rows (approximately)
DELETE FROM `leave_limit`;
/*!40000 ALTER TABLE `leave_limit` DISABLE KEYS */;
INSERT INTO `leave_limit` (`limit_ID`, `Name_limit`, `Date_start`, `Date_stop`, `date_limit`) VALUES
	(30, 'รอบที่ 1/2564', '2021-10-01', '2022-03-31', 0);
INSERT INTO `leave_limit` (`limit_ID`, `Name_limit`, `Date_start`, `Date_stop`, `date_limit`) VALUES
	(31, 'รอบที่ 2/2564', '2022-04-01', '2022-09-30', 1);
INSERT INTO `leave_limit` (`limit_ID`, `Name_limit`, `Date_start`, `Date_stop`, `date_limit`) VALUES
	(32, 'รอบที่ 1/2565', '2022-10-01', '2023-03-31', 0);
INSERT INTO `leave_limit` (`limit_ID`, `Name_limit`, `Date_start`, `Date_stop`, `date_limit`) VALUES
	(33, 'รอบที่ 2/2565', '2023-04-01', '2023-09-30', 1);
INSERT INTO `leave_limit` (`limit_ID`, `Name_limit`, `Date_start`, `Date_stop`, `date_limit`) VALUES
	(34, 'รอบที่ 1/2566', '2023-10-01', '2024-03-31', 0);
INSERT INTO `leave_limit` (`limit_ID`, `Name_limit`, `Date_start`, `Date_stop`, `date_limit`) VALUES
	(35, 'รอบที่ 2/2566', '2024-04-01', '2024-09-30', 1);
/*!40000 ALTER TABLE `leave_limit` ENABLE KEYS */;

-- Dumping structure for table leave_system.officiate_day
CREATE TABLE IF NOT EXISTS `officiate_day` (
  `Day_Work` date DEFAULT NULL COMMENT 'วันที่มาทำงาน',
  `Status_Work` varchar(100) DEFAULT NULL COMMENT 'สถานนะ',
  `Emp_ID` varchar(20) DEFAULT NULL COMMENT 'รหัสพนักงาน',
  `Data` varchar(255) DEFAULT NULL COMMENT 'สาเหตุ',
  `Day_ID` int(20) NOT NULL AUTO_INCREMENT COMMENT 'รหัสวันมาทำงาน',
  `message` int(2) DEFAULT NULL COMMENT 'การแจ้งเตือน',
  PRIMARY KEY (`Day_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=192 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.officiate_day: ~128 rows (approximately)
DELETE FROM `officiate_day`;
/*!40000 ALTER TABLE `officiate_day` DISABLE KEYS */;
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'ananya.si', '', 1, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'apichat', '', 2, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'dulyapol.bu', '', 3, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'ไม่มาทำงาน', 'gasam.pa', 'ลาป่วย', 4, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'kanjanaporn.jn', '', 5, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'kittipong.pl', '', 6, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'lampan.ki', '', 7, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'nuttacit.ph', '', 8, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'phitchayakorn.sr', '', 9, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'pornpassorn.on', '', 10, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'surawadee.ko', '', 11, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'sarayuth.kr', '', 12, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'tassanee', '', 13, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'urai', '', 14, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'veenuntiya.sa', '', 15, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-01', 'มาทำงาน', 'wanwisa', '', 16, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'apichat', '', 17, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'dulyapol.bu', '', 18, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'gasam.pa', '', 19, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'ananya.si', '', 20, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'kanjanaporn.jn', '', 21, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'kittipong.pl', '', 22, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'lampan.ki', '', 23, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'nuttacit.ph', '', 24, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'phitchayakorn.sr', '', 25, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'sarayuth.kr', '', 26, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'pornpassorn.on', '', 27, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'surawadee.ko', '', 28, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'urai', '', 29, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'tassanee', '', 30, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'veenuntiya.sa', '', 31, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-23', 'มาทำงาน', 'wanwisa', '', 32, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'ananya.si', '', 33, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'apichat', '', 34, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'kanjanaporn.jn', '', 35, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'gasam.pa', '', 36, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'dulyapol.bu', '', 37, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'kittipong.pl', '', 38, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'nuttacit.ph', '', 39, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'lampan.ki', '', 40, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'phitchayakorn.sr', '', 41, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'pornpassorn.on', '', 42, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'sarayuth.kr', '', 43, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'surawadee.ko', '', 44, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'urai', '', 45, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'tassanee', '', 46, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'veenuntiya.sa', '', 47, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-22', 'มาทำงาน', 'wanwisa', '', 48, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'ไม่มาทำงาน', 'ananya.si', '', 49, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'apichat', '', 50, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'dulyapol.bu', '', 51, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'kanjanaporn.jn', '', 52, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'gasam.pa', '', 53, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'kittipong.pl', '', 54, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'lampan.ki', '', 55, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'nuttacit.ph', '', 56, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'phitchayakorn.sr', '', 57, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'sarayuth.kr', '', 58, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'pornpassorn.on', '', 59, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'tassanee', '', 60, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'urai', '', 61, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'surawadee.ko', '', 62, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'veenuntiya.sa', '', 63, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-19', 'มาทำงาน', 'wanwisa', '', 64, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'ananya.si', '', 65, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'ไม่มาทำงาน', 'dulyapol.bu', '', 66, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'gasam.pa', '', 67, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'apichat', '', 68, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'kanjanaporn.jn', '', 69, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'kittipong.pl', '', 70, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'lampan.ki', '', 71, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'phitchayakorn.sr', '', 72, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'nuttacit.ph', '', 73, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'pornpassorn.on', '', 74, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'surawadee.ko', '', 75, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'sarayuth.kr', '', 76, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'tassanee', '', 77, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'veenuntiya.sa', '', 78, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'wanwisa', '', 79, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-18', 'มาทำงาน', 'urai', '', 80, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'ananya.si', '', 81, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'apichat', '', 82, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'dulyapol.bu', '', 83, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'gasam.pa', '', 84, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'kanjanaporn.jn', '', 85, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'lampan.ki', '', 86, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'kittipong.pl', '', 87, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'sarayuth.kr', '', 88, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'nuttacit.ph', '', 89, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'phitchayakorn.sr', '', 90, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'pornpassorn.on', '', 91, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'surawadee.ko', '', 92, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'tassanee', '', 93, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'urai', '', 94, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'มาทำงาน', 'veenuntiya.sa', '', 95, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-17', 'ไม่มาทำงาน', 'wanwisa', '', 96, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'ananya.si', '', 113, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'apichat', '', 114, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'dulyapol.bu', '', 115, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'gasam.pa', '', 116, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'kanjanaporn.jn', '', 117, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'kittipong.pl', '', 118, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'lampan.ki', '', 119, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'nuttacit.ph', '', 120, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'phitchayakorn.sr', '', 121, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'pornpassorn.on', '', 122, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'surawadee.ko', '', 123, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'ไม่มาทำงาน', 'sarayuth.kr', 'ลาป่วย', 124, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'tassanee', '', 125, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'urai', '', 126, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'veenuntiya.sa', '', 127, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-02-16', 'มาทำงาน', 'wanwisa', '', 128, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'ananya.si', '', 129, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'apichat', '', 130, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'dulyapol.bu', '', 131, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'kanjanaporn.jn', '', 132, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'gasam.pa', 'ทดสอบ', 133, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'kittipong.pl', '', 134, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'lampan.ki', '', 135, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'ไม่มาทำงาน', 'nuttacit.ph', '', 136, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'phitchayakorn.sr', '', 137, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'pornpassorn.on', '', 138, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'sarayuth.kr', '', 139, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'surawadee.ko', '', 140, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'tassanee', '', 141, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'urai', '', 142, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'veenuntiya.sa', '', 143, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-02', 'มาทำงาน', 'wanwisa', '', 144, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'ananya.si', '', 145, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'apichat', '', 146, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'dulyapol.bu', '', 147, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'kanjanaporn.jn', '', 148, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'มาทำงาน', 'gasam.pa', 'ทดสอบ', 149, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'kittipong.pl', '', 150, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'lampan.ki', '', 151, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'nuttacit.ph', '', 152, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'phitchayakorn.sr', '', 153, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'pornpassorn.on', '', 154, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'sarayuth.kr', '', 155, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'tassanee', '', 156, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'surawadee.ko', '', 157, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'urai', '', 158, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'veenuntiya.sa', '', 159, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-09', 'ไม่มาทำงาน', 'wanwisa', '', 160, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'ananya.si', '', 161, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'apichat', '', 162, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'gasam.pa', '', 163, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'kanjanaporn.jn', '', 164, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'kittipong.pl', '', 165, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'lampan.ki', '', 166, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'nuttacit.ph', '', 167, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'phitchayakorn.sr', '', 168, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'pornpassorn.on', '', 169, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'sarayuth.kr', '', 170, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'surawadee.ko', '', 171, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'tassanee', '', 172, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'urai', '', 173, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'veenuntiya.sa', '', 174, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-01', 'มาทำงาน', 'wanwisa', '', 175, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'ananya.si', '', 176, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'apichat', '', 177, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'dulyapol.bu', '', 178, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'gasam.pa', 'ติดธุระ', 179, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'kanjanaporn.jn', '', 180, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'kittipong.pl', '', 181, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'lampan.ki', '', 182, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'nuttacit.ph', '', 183, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'phitchayakorn.sr', '', 184, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'pornpassorn.on', '', 185, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'surawadee.ko', '', 186, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'tassanee', '', 187, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'veenuntiya.sa', '', 188, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'urai', '', 189, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'sarayuth.kr', '', 190, 0);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2021-03-03', 'ไม่มาทำงาน', 'wanwisa', '', 191, 0);
/*!40000 ALTER TABLE `officiate_day` ENABLE KEYS */;

-- Dumping structure for table leave_system.position
CREATE TABLE IF NOT EXISTS `position` (
  `Position_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'รหัสตำแหน่ง',
  `PositionName` varchar(255) DEFAULT NULL COMMENT 'ชื่อตำแหน่ง',
  `Role` varchar(1) DEFAULT NULL COMMENT 'สิทธิการข้าใช้',
  PRIMARY KEY (`Position_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5027 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.position: ~23 rows (approximately)
DELETE FROM `position`;
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5001, 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '5');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5002, 'รองผู้อำนวยการฝ่ายบริหารงานทั่วไป', '4');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5003, 'รองผู้อำนวยการฝ่ายวิทยบริการ', '4');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5004, 'หัวหน้าสำนักงานผู้อำนวยการ', '3');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5005, 'หัวหน้างานเทคโนโลยีสารสนเทศ', '3');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5006, 'หัวหน้างานวิทยบริการ', '3');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5007, 'หัวหน้างานบริหารงานทั่วไป', '3');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5008, 'หัวหน้าแผนกงานห้องสมุด', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5009, 'หัวหน้าแผนกงานธุรการสำนักงาน', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5010, 'หัวหน้าแผนกงานวิศวกรรมเครือข่าย', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5011, 'หัวหน้าแผนกอีเลิร์นนิ่งและเทคโนโลยีสารสนเทศ', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5012, 'หัวหน้าแผนกระบบสารสนเทศเพื่อการบริหาร', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5013, 'หัวหน้าแผนกศูนย์การเรียนรู้ด้วยตนเอง', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5014, 'นักวิชาการคอมพิวเตอร์', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5015, 'ผู้ปฏิบัติงานบริหาร', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5016, 'วิศวกร', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5017, 'นักเอกสารสนเทศ', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5018, 'เจ้าหน้าที่ห้องสมุด', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5019, 'นักวิชาการศึกษา', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5020, 'นักวิชาการโสตทัศนศึกษา', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5021, 'บรรณารักษ์', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5022, 'เจ้าหน้าที่บริหารงานทั่วไป', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5024, 'หัวหน้าแผนก IT', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5025, 'หัวหน้างาน IT', '3');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	(5026, 'รองผู้อำนวยการฝ่าย IT', '4');
/*!40000 ALTER TABLE `position` ENABLE KEYS */;

-- Dumping structure for table leave_system.sector
CREATE TABLE IF NOT EXISTS `sector` (
  `Sector_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'รหัสฝ่ายงาน',
  `SectorName` varchar(255) DEFAULT NULL COMMENT 'ชื่อฝ่ายงาน',
  PRIMARY KEY (`Sector_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=307 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.sector: ~5 rows (approximately)
DELETE FROM `sector`;
/*!40000 ALTER TABLE `sector` DISABLE KEYS */;
INSERT INTO `sector` (`Sector_ID`, `SectorName`) VALUES
	(301, 'งานบริหารงานทั่วไป');
INSERT INTO `sector` (`Sector_ID`, `SectorName`) VALUES
	(302, 'งานวิทยบริการ');
INSERT INTO `sector` (`Sector_ID`, `SectorName`) VALUES
	(303, 'งานเทคโนโลยีสารสนเทศ');
INSERT INTO `sector` (`Sector_ID`, `SectorName`) VALUES
	(304, 'ไม่มีฝ่ายงาน');
INSERT INTO `sector` (`Sector_ID`, `SectorName`) VALUES
	(305, 'ฝ่าย IT');
/*!40000 ALTER TABLE `sector` ENABLE KEYS */;

-- Dumping structure for table leave_system.vacation
CREATE TABLE IF NOT EXISTS `vacation` (
  `vacation_ID` int(11) NOT NULL AUTO_INCREMENT,
  `vacation_Emp_ID` varchar(50) DEFAULT NULL,
  `vacation_limit_ID` varchar(50) DEFAULT NULL,
  `vacation_amount` varchar(50) DEFAULT NULL,
  `vacation_number` varchar(50) DEFAULT NULL,
  `vacation_date_add` date DEFAULT NULL,
  `vacation_remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`vacation_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.vacation: ~1 rows (approximately)
DELETE FROM `vacation`;
/*!40000 ALTER TABLE `vacation` DISABLE KEYS */;
INSERT INTO `vacation` (`vacation_ID`, `vacation_Emp_ID`, `vacation_limit_ID`, `vacation_amount`, `vacation_number`, `vacation_date_add`, `vacation_remark`) VALUES
	(127, 'gasam.pa', '31', '5', '10', '2021-02-27', NULL);
/*!40000 ALTER TABLE `vacation` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
