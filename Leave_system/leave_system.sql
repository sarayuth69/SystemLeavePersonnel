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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.cancel_leave: ~2 rows (approximately)
DELETE FROM `cancel_leave`;
/*!40000 ALTER TABLE `cancel_leave` DISABLE KEYS */;
/*!40000 ALTER TABLE `cancel_leave` ENABLE KEYS */;

-- Dumping structure for table leave_system.department
CREATE TABLE IF NOT EXISTS `department` (
  `Dept_ID` varchar(255) NOT NULL COMMENT 'รหัสแผนก',
  `DeptName` varchar(255) DEFAULT '-' COMMENT 'ชื่อแผนก',
  PRIMARY KEY (`Dept_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.department: ~5 rows (approximately)
DELETE FROM `department`;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	('1001', 'แผนกงานธุรการสำนัก');
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	('1002', 'แผนกงานห้องสมุด');
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	('1003', 'แผนกงานศุนย์การเรียนรู้ด้วยตนเอง');
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	('1004', 'แผนกงานวิศวกรรมเครือข่าย');
INSERT INTO `department` (`Dept_ID`, `DeptName`) VALUES
	('1005', 'แผนกงานอีเลิร์นนิ่งและเทคโนโลยีการศึกษา');
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
  PRIMARY KEY (`Emp_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.employee: ~3 rows (approximately)
DELETE FROM `employee`;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`) VALUES
	('ananya.si', 'นางสาว', 'อนัญญา', 'สีกระโทก', '', '1309900759252', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5022', '1001', '301');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`) VALUES
	('dulyapol.bu', 'นาย', 'ประภวิชญ์', 'บรรจงกุล', '', '1100500141379', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5022', '1001', '301');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`) VALUES
	('kittipong.pl', 'นาย', 'กิตติพงษ์', 'ปลิงกระโทก', '', '1309901292161', 'Nakhon Ratchasima', '', '', '', '2021-01-06', '', 'Y', '202', '5022', '1001', '301');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`) VALUES
	('lampan.ki', 'นางสาว', 'ลำแพน', 'กลิ่นพยอม', '', '5570400049186', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5009', '1001', '301');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`) VALUES
	('phitchayakorn.sr', 'นาย', 'พิชญากร', 'ศรีเนาวรัตน์', '', '1309900951358', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '203', '5022', '1001', '302');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`) VALUES
	('pornpassorn.on', 'นาง', 'พรภัสสร', 'อ่อนเกิด', '', '3309901094854', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '203', '5002', 'null', '301');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`) VALUES
	('sarayuth.kr', 'นาย', 'ศรายุทธ', 'ไกรษร', '', '1309901383809', 'Nakhon Ratchasima', '', '', '', '2020-12-29', '', 'Y', '203', '5001', '1004', '302');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`) VALUES
	('surawadee.ko', 'นาง', 'สุรวดี', 'กอคูณกลาง', '', '1309900249637', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5022', '1001', '301');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`) VALUES
	('tassanee', 'นางสาว', 'ทัศนีย์', 'เปรียบจันทึก', '', '3300800364564', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5022', '1001', '301');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`) VALUES
	('urai', 'นางสาว', 'อุไร', 'แสงศิริ', '', '3300100663038', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5007', '1001', '301');
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `ID_card`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `status_data`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`) VALUES
	('wanwisa', 'นาง', 'วันวิสาข์', 'ยนต์พิมาย', '', '3309901609374', 'Nakhon Ratchasima', '', '', '', '2021-01-04', '', 'Y', '202', '5004', 'null', '301');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;

-- Dumping structure for table leave_system.employeestatus
CREATE TABLE IF NOT EXISTS `employeestatus` (
  `Empstatus_ID` varchar(10) NOT NULL COMMENT 'รหัสสถานะบุคลากร',
  `EmpstatusName` varchar(100) DEFAULT NULL COMMENT 'สถานะบุคลากร',
  PRIMARY KEY (`Empstatus_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.employeestatus: ~3 rows (approximately)
DELETE FROM `employeestatus`;
/*!40000 ALTER TABLE `employeestatus` DISABLE KEYS */;
INSERT INTO `employeestatus` (`Empstatus_ID`, `EmpstatusName`) VALUES
	('201', 'ลูกจ้างเงินรายได้');
INSERT INTO `employeestatus` (`Empstatus_ID`, `EmpstatusName`) VALUES
	('202', 'พนักงานมหาวิทยาลัย');
INSERT INTO `employeestatus` (`Empstatus_ID`, `EmpstatusName`) VALUES
	('203', 'ข้าราชการ');
/*!40000 ALTER TABLE `employeestatus` ENABLE KEYS */;

-- Dumping structure for table leave_system.holiday
CREATE TABLE IF NOT EXISTS `holiday` (
  `holiday_ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `holiday_date` date DEFAULT NULL,
  `holiday_data` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`holiday_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.holiday: ~46 rows (approximately)
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leave: ~6 rows (approximately)
DELETE FROM `leave`;
/*!40000 ALTER TABLE `leave` DISABLE KEYS */;
/*!40000 ALTER TABLE `leave` ENABLE KEYS */;

-- Dumping structure for table leave_system.leavestatus
CREATE TABLE IF NOT EXISTS `leavestatus` (
  `LeaveStatus_ID` int(10) NOT NULL COMMENT 'รหัสสถานะการลา',
  `LeaveStatus_Name` varchar(255) DEFAULT NULL COMMENT 'ชื่อสถานนะ',
  PRIMARY KEY (`LeaveStatus_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leavestatus: ~10 rows (approximately)
DELETE FROM `leavestatus`;
/*!40000 ALTER TABLE `leavestatus` DISABLE KEYS */;
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(1, 'รอหัวหน้าแผนกอนุญาต');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(2, 'รอหัวหน้างานอนุญาต');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(3, 'รอรองหัวหน้าหน่วยงานอนุญาต');
INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
	(4, 'รอจากหัวหน้าหน่วยงานอนุญาต');
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
) ENGINE=InnoDB AUTO_INCREMENT=4034 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leavetype: ~16 rows (approximately)
DELETE FROM `leavetype`;
/*!40000 ALTER TABLE `leavetype` DISABLE KEYS */;
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4001, 'ลาป่วย', 60, 10, 'ไม่ต้องแจ่งล่วงหน้า', 0, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4002, 'ลาป่วย', 60, 10, '-', 0, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4003, 'ลาป่วย', 15, 5, '0', 0, 'ลาได้', '-', '201');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4004, 'ลากิจส่วนตัว', 30, 0, '5', 0, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4005, 'ลากิจ', 30, 50, '5', 0, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4007, 'ลาพักผ่อน', 10, 20, '7', 0, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4009, 'ลาพักผ่อน', 10, 0, '-', 0, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4010, 'ลาคลอดบุตร', 90, 0, '-', 0, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4011, 'ลาอุปสมบท', 120, 0, '-', 0, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4013, 'ลาคลอด', 90, 0, '-', 0, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4015, 'ลาพักผ่อน', 10, 5, '0', 0, 'ลาได้', '-', '201');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4029, 'ลาไปต่างประเทศ', 100, 10, '5', 0, 'ลาได้', '', '202');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4030, 'ลาไปช่วยเหลือภรรยาที่คลอดบุตร', 90, 90, '5', 0, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4031, 'ลาอุปสมบทหรือการลาไปประกอบพิธีฮัจย์', 90, 90, '5', 0, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4032, 'ลาเขารับการตรวจเลือกหรือเข้ารับการเตียมพล', 180, 0, '5', 0, 'ลาได้', '', '203');
INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `LType_limit`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
	(4033, 'ลาไปศึกษา ฝึกอบรม ปฏิบัติการวิจัย หรือดูงาน', 180, 0, '5', 0, 'ลาได้', '', '203');
/*!40000 ALTER TABLE `leavetype` ENABLE KEYS */;

-- Dumping structure for table leave_system.leave_limit
CREATE TABLE IF NOT EXISTS `leave_limit` (
  `limit_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name_limit` varchar(255) DEFAULT NULL,
  `Date_start` date DEFAULT NULL,
  `limit_date` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`limit_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leave_limit: ~2 rows (approximately)
DELETE FROM `leave_limit`;
/*!40000 ALTER TABLE `leave_limit` DISABLE KEYS */;
INSERT INTO `leave_limit` (`limit_ID`, `Name_limit`, `Date_start`, `limit_date`) VALUES
	(27, 'รอบที่ 1/2564', '2021-01-01', '6');
INSERT INTO `leave_limit` (`limit_ID`, `Name_limit`, `Date_start`, `limit_date`) VALUES
	(28, 'รอบที่ 2/2564', '2021-06-02', '6');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.officiate_day: ~198 rows (approximately)
DELETE FROM `officiate_day`;
/*!40000 ALTER TABLE `officiate_day` DISABLE KEYS */;
/*!40000 ALTER TABLE `officiate_day` ENABLE KEYS */;

-- Dumping structure for table leave_system.position
CREATE TABLE IF NOT EXISTS `position` (
  `Position_ID` varchar(10) NOT NULL COMMENT 'รหัสตำแหน่ง',
  `PositionName` varchar(255) DEFAULT NULL COMMENT 'ชื่อตำแหน่ง',
  `Role` varchar(1) DEFAULT NULL COMMENT 'สิทธิการข้าใช้',
  PRIMARY KEY (`Position_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.position: ~22 rows (approximately)
DELETE FROM `position`;
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5001', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '5');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5002', 'รองผู้อำนวยการฝ่ายบริหารงานทั่วไป', '4');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5003', 'รองผู้อำนวยการฝ่ายวิทยบริการ', '4');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5004', 'หัวหน้าสำนักงานผู้อำนวยการ', '3');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5005', 'หัวหน้างานเทคโนโลยีสารสนเทศ', '3');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5006', 'หัวหน้างานวิทยบริการ', '3');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5007', 'หัวหน้างานบริหารงานทั่วไป', '3');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5008', 'หัวหน้าแผนกงานห้องสมุด', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5009', 'หัวหน้าแผนกงานธุรการสำนักงาน', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5010', 'หัวหน้าแผนกงานวิศวกรรมเครือข่าย', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5011', 'หัวหน้าแผนกอีเลิร์นนิ่งและเทคโนโลยีสารสนเทศ', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5012', 'หัวหน้าแผนกระบบสารสนเทศเพื่อการบริหาร', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5013', 'หัวหน้าแผนกศูนย์การเรียนรู้ด้วยตนเอง', '2');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5014', 'นักวิชาการคอมพิวเตอร์', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5015', 'ผู้ปฏิบัติงานบริหาร', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5016', 'วิศวกร', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5017', 'นักเอกสารสนเทศ', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5018', 'เจ้าหน้าที่ห้องสมุด', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5019', 'นักวิชาการศึกษา', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5020', 'นักวิชาการโสตทัศนศึกษา', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5021', 'บรรณารักษ์', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5022', 'เจ้าหน้าที่บริหารงานทั่วไป', '1');
INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
	('5023', 'ผู้ดูแลระบบ', '6');
/*!40000 ALTER TABLE `position` ENABLE KEYS */;

-- Dumping structure for table leave_system.sector
CREATE TABLE IF NOT EXISTS `sector` (
  `Sector_ID` varchar(10) NOT NULL COMMENT 'รหัสฝ่ายงาน',
  `SectorName` varchar(255) DEFAULT NULL COMMENT 'ชื่อฝ่ายงาน',
  PRIMARY KEY (`Sector_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.sector: ~3 rows (approximately)
DELETE FROM `sector`;
/*!40000 ALTER TABLE `sector` DISABLE KEYS */;
INSERT INTO `sector` (`Sector_ID`, `SectorName`) VALUES
	('301', 'งานบริหารงานทั่วไป');
INSERT INTO `sector` (`Sector_ID`, `SectorName`) VALUES
	('302', 'งานวิทยบริการ');
INSERT INTO `sector` (`Sector_ID`, `SectorName`) VALUES
	('303', 'งานเทคโนโลยีสารสนเทศ');
/*!40000 ALTER TABLE `sector` ENABLE KEYS */;

-- Dumping structure for table leave_system.upload
CREATE TABLE IF NOT EXISTS `upload` (
  `file_ID` int(11) NOT NULL AUTO_INCREMENT,
  `file_data` varchar(255) DEFAULT NULL,
  `file_names` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`file_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1220 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.upload: ~13 rows (approximately)
DELETE FROM `upload`;
/*!40000 ALTER TABLE `upload` DISABLE KEYS */;
/*!40000 ALTER TABLE `upload` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
