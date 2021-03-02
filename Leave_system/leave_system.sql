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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.cancel_leave: ~3 rows (approximately)
DELETE FROM `cancel_leave`;
/*!40000 ALTER TABLE `cancel_leave` DISABLE KEYS */;
INSERT INTO `cancel_leave` (`cancel_id`, `cancel_data`, `cancel_date_start`, `cancel_date_stop`, `cancel_total`, `cancel_status`, `leave_ID`) VALUES
	(16, '', '2021-02-10', '2021-02-11', 2, '10', 17);
INSERT INTO `cancel_leave` (`cancel_id`, `cancel_data`, `cancel_date_start`, `cancel_date_stop`, `cancel_total`, `cancel_status`, `leave_ID`) VALUES
	(17, 'ทดสอบระบบ', '2021-02-19', '2021-02-19', 1, '10', 24);
INSERT INTO `cancel_leave` (`cancel_id`, `cancel_data`, `cancel_date_start`, `cancel_date_stop`, `cancel_total`, `cancel_status`, `leave_ID`) VALUES
	(18, 'ทดสอบ', '2021-03-11', '2021-03-12', 2, '10', 31);
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

-- Dumping data for table leave_system.employee: ~19 rows (approximately)
DELETE FROM `employee`;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('ananya.si', 'นางสาว', 'อนัญญา', 'สีกระโทก', '', '1309900759252', 'Nakhon Ratchasima', '', '', '', '2018-08-06', '', 'Y', '201', '5022', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('annop.mu', 'นาย', 'อรรณพ', 'เหมือนจิต', '', '1101800983198', 'Nakhon Ratchasima', '', '', '', '2021-02-03', '', 'W', '', '', '', NULL, '');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('apichat', 'นาย', 'อภิชาต', 'ติรประเสริฐสิน', '', '3309901338702', 'Nakhon Ratchasima', '', '', '', '2021-01-26', '', 'Y', '203', '5001', '1006', '304', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('dulyakit.ph', 'นาย', 'ดุลยกิจ', 'พรมชาติ', '', '1339900608149', 'Nakhon Ratchasima', '', '', '', '2021-02-15', '', 'W', '', '', '', NULL, '');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('dulyapol.bu', 'นาย', 'ประภวิชญ์', 'บรรจงกุล', '', '1100500141379', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5022', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('gasam.pa', 'นาย', 'เกษม', 'พาพุทธ', 'ชาย', '1390400035231', 'Nakhon Ratchasima', '', '', '', '2021-09-29', '4เดือน', 'Y', '203', '5016', '1007', '305', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('kanjanaporn.jn', 'นางสาว', 'กาญจนาภรณ์', 'เจนศิริวงษ์', '', '1200900169636', 'Nakhon Ratchasima', '', '', '', '2021-01-15', '', 'Y', '202', '5015', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('kittipong.pl', 'นาย', 'กิตติพงษ์', 'ปลิงกระโทก', '', '1309901292161', 'Nakhon Ratchasima', '', '', '', '2021-01-06', '', 'Y', '202', '5001', '1006', '304', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('komittibate.ma', 'นาย', 'คมอิทธิเบศ', 'แมบจันทึก', '', '1309901100556', 'Nakhon Ratchasima', '', '', '', '2021-02-05', '', 'W', '', '', '', NULL, '');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('lampan.ki', 'นางสาว', 'ลำแพน', 'กลิ่นพยอม', '', '5570400049186', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5009', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('nuttacit.ph', 'นาย', 'ณัฐสิทธิ์', 'ผัดตุ่น', '', '1630200064072', 'Nakhon Ratchasima', '', '', '', '2006-02-05', '', 'Y', '202', '5024', '1007', '305', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('phitchayakorn.sr', 'นาย', 'พิชญากร', 'ศรีเนาวรัตน์', '', '1309900951358', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '203', '5025', '1007', '305', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('pornpassorn.on', 'นาง', 'พรภัสสร', 'อ่อนเกิด', '', '3309901094854', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '203', '5002', '1006', '301', 'A');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('sarayuth.kr', 'นาย', 'ศรายุทธ', 'ไกรษร', '', '1309901383809', 'Nakhon Ratchasima', '', '', '', '2021-01-28', '', 'Y', '203', '5026', '1006', '305', 'A');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('surawadee.ko', 'นาง', 'สุรวดี', 'กอคูณกลาง', '', '1309900249637', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5022', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('tassanee', 'นางสาว', 'ทัศนีย์', 'เปรียบจันทึก', '', '3300800364564', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5022', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('urai', 'นางสาว', 'อุไร', 'แสงศิริ', '', '3300100663038', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5007', '1001', '301', 'U');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `privilege`) VALUES
	('veenuntiya.sa', 'นางสาว', 'วีร์นันทิยา', 'ทรัพย์มาก', '', '1300900170331', 'Nakhon Ratchasima', '', '', '', '2005-02-16', '', 'Y', '202', '5016', '1007', '305', 'U');
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
  `Leave_ID` int(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'รหัสการลา',
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
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leave: ~21 rows (approximately)
DELETE FROM `leave`;
/*!40000 ALTER TABLE `leave` DISABLE KEYS */;
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(59, 'gasam.pa', 'การลากิจส่วนตัว', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-01', 'เต็มวัน', '2021-03-01', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 1, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:17:55', 30, 4004, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(60, 'gasam.pa', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-16', 'เต็มวัน', '2021-02-16', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', '', 1, 1, 1, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:18:23', 30, 4001, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(61, 'gasam.pa', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-09', 'เต็มวัน', '2021-03-09', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 1, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:18:54', 30, 4009, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(62, 'gasam.pa', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-10', 'เต็มวัน', '2021-03-10', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 1, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:19:15', 30, 4009, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(63, 'gasam.pa', 'การลากิจส่วนตัว', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-11', 'เต็มวัน', '2021-03-11', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', '', 1, 1, 1, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:19:45', 30, 4004, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(64, 'gasam.pa', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-09', 'เต็มวัน', '2021-02-10', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 2, 1, 1, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:20:08', 30, 4001, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(65, 'nuttacit.ph', 'การลากิจ', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-01', 'เต็มวัน', '2021-03-01', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 2, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:21:42', 30, 4005, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(66, 'nuttacit.ph', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-02', 'เต็มวัน', '2021-03-03', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 2, 1, 2, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:22:10', 30, 4007, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(67, 'nuttacit.ph', 'การลากิจ', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-04', 'เต็มวัน', '2021-03-04', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 2, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:22:34', 30, 4005, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(68, 'nuttacit.ph', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-09', 'เต็มวัน', '2021-03-11', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 3, 1, 2, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:22:57', 30, 4007, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(69, 'nuttacit.ph', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-16', 'เต็มวัน', '2021-02-16', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', '', 1, 1, 2, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:23:51', 30, 4002, '../upload/16137590313945.jpg');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(70, 'nuttacit.ph', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-02', 'เต็มวัน', '2021-02-02', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 2, 'ส่งใบลาฉบับจริงแล้ว', '2021-02-20 01:24:28', 30, 4002, '../upload/1613759068081f15203f7395915e417c731419af3a-1400.jpg');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(71, 'phitchayakorn.sr', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-16', '', '2021-02-16', '', 'ทดสอบ', 'ทดสอบ', '', 1, 1, 3, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:26:13', 30, 4001, '../upload/16137591737cee53fed69ee5d732e75d8039e6f7d5-1400.jpg');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(72, 'phitchayakorn.sr', 'การลากิจส่วนตัว', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-23', 'เต็มวัน', '2021-03-23', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 3, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:26:59', 30, 4004, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(73, 'phitchayakorn.sr', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-09', 'เต็มวัน', '2021-02-09', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 3, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:27:19', 30, 4009, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(74, 'phitchayakorn.sr', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-02', 'เต็มวัน', '2021-03-03', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 2, 1, 3, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:27:38', 30, 4009, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(75, 'phitchayakorn.sr', 'การลากิจส่วนตัว', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-11', 'เต็มวัน', '2021-03-11', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', '', 1, 1, 3, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:28:07', 30, 4004, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(76, 'phitchayakorn.sr', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-25', '', '2021-03-25', '', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 3, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:29:05', 30, 4009, '../upload/16137593452-3.jpg');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(77, 'sarayuth.kr', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-16', 'เต็มวัน', '2021-02-16', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 5, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:30:27', 30, 4001, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(78, 'sarayuth.kr', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-09', 'เต็มวัน', '2021-02-09', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 4, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:30:54', 30, 4001, '../upload/16137594541_bxEkHw1xewxOFjmGunb-Cw.png');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(79, 'sarayuth.kr', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-10', 'เต็มวัน', '2021-02-10', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 4, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:31:26', 30, 4001, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(80, 'sarayuth.kr', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-01', 'เต็มวัน', '2021-03-01', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 5, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:31:55', 30, 4009, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(81, 'sarayuth.kr', 'การลากิจส่วนตัว', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-02', 'เต็มวัน', '2021-03-02', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 5, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:32:12', 30, 4004, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(82, 'sarayuth.kr', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-03', 'เต็มวัน', '2021-03-03', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 4, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:32:45', 30, 4009, '../upload/16137595651_bxEkHw1xewxOFjmGunb-Cw.png');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(83, 'sarayuth.kr', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-04', 'เต็มวัน', '2021-03-04', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 4, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:33:10', 30, 4009, '../upload/16137595902.png');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(84, 'gasam.pa', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-29', 'เต็มวัน', '2021-03-29', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 1, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:48:41', 30, 4009, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(85, 'gasam.pa', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-01', 'เต็มวัน', '2021-02-01', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', '', 1, 1, 1, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:49:03', 30, 4001, '../upload/16137605432-3.jpg');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(86, 'nuttacit.ph', 'การลากิจ', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-11', 'เต็มวัน', '2021-03-11', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', 'ทดสอบ', 1, 1, 2, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:49:53', 30, 4005, '../upload/16137605933.png');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(87, 'nuttacit.ph', 'การลากิจ', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-09', 'เต็มวัน', '2021-03-10', 'เต็มวัน', 'ทดสอบ', 'ทดสอบ', '', 2, 1, 2, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:50:21', 30, 4005, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(88, 'phitchayakorn.sr', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-03-02', 'เต็มวัน', '2021-03-02', 'เต็มวัน', 'item.Role', 'item.Role', 'item.Role', 1, 1, 3, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 01:53:27', 30, 4001, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(89, 'phitchayakorn.sr', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-02', 'เต็มวัน', '2021-02-02', 'เต็มวัน', 'item.Role', 'item.Role', 'item.Role', 1, 1, 3, 'ส่งใบลาฉบับจริงแล้ว', '2021-02-20 01:55:32', 30, 4001, '');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(90, 'gasam.pa', 'การลาป่วย', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2021-02-04', 'เต็มวัน', '2021-02-04', 'เต็มวัน', '', '', '', 1, 1, 1, 'ยังไม่ส่งใบลาฉบับจริง', '2021-02-20 02:13:36', 30, 4001, '');
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
) ENGINE=InnoDB AUTO_INCREMENT=40038 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leavetype: ~17 rows (approximately)
DELETE FROM `leavetype`;
/*!40000 ALTER TABLE `leavetype` DISABLE KEYS */;
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4001, 'ลาป่วย', 60, 10, 'ไม่ต้องแจ่งล่วงหน้า', 10, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4002, 'ลาป่วย', 60, 10, '-', 8, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4003, 'ลาป่วย', 15, 5, '0', 8, 'ลาได้', '-', '201');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4004, 'ลากิจส่วนตัว', 30, 0, '5', 8, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4005, 'ลากิจ', 30, 50, '5', 8, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4007, 'ลาพักผ่อน', 10, 20, '7', 8, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4009, 'ลาพักผ่อน', 10, 0, '-', 8, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4010, 'ลาคลอดบุตร', 90, 0, '-', 0, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4011, 'ลาอุปสมบท', 120, 0, '-', 0, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4013, 'ลาคลอดบุตร', 90, 0, '-', 0, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4015, 'ลาพักผ่อน', 10, 5, '0', 0, 'ลาได้', '-', '201');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4029, 'ลาไปปฏิบัติงานในองค์การระหว่างประเทศ', 100, 10, '5', 0, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4030, 'ลาไปช่วยเหลือภรรยาที่คลอดบุตร', 90, 90, '5', 0, 'ลาไม่ได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4031, 'ลาอุปสมบทหรือการลาไปประกอบพิธีฮัจย์', 90, 90, '5', 0, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4032, 'ลาเขารับการตรวจเลือกหรือเข้ารับการเตียมพล', 180, 0, '5', 0, 'ลาไม่ได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4033, 'ลาไปศึกษา ฝึกอบรม ปฏิบัติการวิจัย หรือดูงาน', 180, 0, '5', 0, 'ลาไม่ได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4034, 'ลาไปปฏิบัติงานในองค์การระหว่างประเทศ', 100, 0, '-', 0, 'ลาไม่ได้', '-', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(40037, 'ลากิจ', 0, 0, '5', 0, 'ลาได้', '', '201');
/*!40000 ALTER TABLE `leavetype` ENABLE KEYS */;

-- Dumping structure for table leave_system.leave_limit
CREATE TABLE IF NOT EXISTS `leave_limit` (
  `limit_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name_limit` varchar(255) DEFAULT NULL,
  `Date_start` date DEFAULT NULL,
  `Date_stop` date DEFAULT NULL,
  PRIMARY KEY (`limit_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leave_limit: ~0 rows (approximately)
DELETE FROM `leave_limit`;
/*!40000 ALTER TABLE `leave_limit` DISABLE KEYS */;
INSERT INTO `leave_limit` (`limit_ID`, `Name_limit`, `Date_start`, `Date_stop`) VALUES
	(30, ' รอบที่ 1/2564', '2021-10-01', '2022-03-31');
INSERT INTO `leave_limit` (`limit_ID`, `Name_limit`, `Date_start`, `Date_stop`) VALUES
	(33, ' รอบที่ 2/2564', '2022-04-01', '2022-09-30');
/*!40000 ALTER TABLE `leave_limit` ENABLE KEYS */;

-- Dumping structure for table leave_system.leave_vacation
CREATE TABLE IF NOT EXISTS `leave_vacation` (
  `vacation_ID` int(11) NOT NULL AUTO_INCREMENT,
  `vacation_number` int(11) DEFAULT NULL,
  `vacation_status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`vacation_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leave_vacation: ~0 rows (approximately)
DELETE FROM `leave_vacation`;
/*!40000 ALTER TABLE `leave_vacation` DISABLE KEYS */;
/*!40000 ALTER TABLE `leave_vacation` ENABLE KEYS */;

-- Dumping structure for table leave_system.officiate_day
CREATE TABLE IF NOT EXISTS `officiate_day` (
  `Day_Work` date DEFAULT NULL COMMENT 'วันที่มาทำงาน',
  `Status_Work` varchar(100) DEFAULT NULL COMMENT 'สถานนะ',
  `Emp_ID` varchar(20) DEFAULT NULL COMMENT 'รหัสพนักงาน',
  `Data` varchar(255) DEFAULT NULL COMMENT 'สาเหตุ',
  `Day_ID` int(20) NOT NULL AUTO_INCREMENT COMMENT 'รหัสวันมาทำงาน',
  `message` int(2) DEFAULT NULL COMMENT 'การแจ้งเตือน',
  PRIMARY KEY (`Day_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.officiate_day: ~0 rows (approximately)
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
/*!40000 ALTER TABLE `officiate_day` ENABLE KEYS */;

-- Dumping structure for table leave_system.position
CREATE TABLE IF NOT EXISTS `position` (
  `Position_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'รหัสตำแหน่ง',
  `PositionName` varchar(255) DEFAULT NULL COMMENT 'ชื่อตำแหน่ง',
  `Role` varchar(1) DEFAULT NULL COMMENT 'สิทธิการข้าใช้',
  PRIMARY KEY (`Position_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5027 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.position: ~25 rows (approximately)
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

-- Dumping structure for table leave_system.upload
CREATE TABLE IF NOT EXISTS `upload` (
  `file_ID` int(11) NOT NULL AUTO_INCREMENT,
  `file_data` varchar(255) DEFAULT NULL,
  `file_names` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`file_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1220 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.upload: ~0 rows (approximately)
DELETE FROM `upload`;
/*!40000 ALTER TABLE `upload` DISABLE KEYS */;
/*!40000 ALTER TABLE `upload` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
