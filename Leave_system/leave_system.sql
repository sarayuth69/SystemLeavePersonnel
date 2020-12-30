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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.cancel_leave: ~2 rows (approximately)
DELETE FROM `cancel_leave`;
/*!40000 ALTER TABLE `cancel_leave` DISABLE KEYS */;
INSERT INTO `cancel_leave` (`cancel_id`, `cancel_data`, `cancel_date_start`, `cancel_date_stop`, `cancel_total`, `cancel_status`, `leave_ID`) VALUES
	(4, 'ไม่ไปละ', '2020-12-28', '2021-01-02', 4, '8', 4);
INSERT INTO `cancel_leave` (`cancel_id`, `cancel_data`, `cancel_date_start`, `cancel_date_stop`, `cancel_total`, `cancel_status`, `leave_ID`) VALUES
	(5, '', '2020-12-21', '2020-12-22', 1, '8', 5);
/*!40000 ALTER TABLE `cancel_leave` ENABLE KEYS */;

-- Dumping structure for table leave_system.department
CREATE TABLE IF NOT EXISTS `department` (
  `Dept_ID` varchar(255) NOT NULL COMMENT 'รหัสแผนก',
  `DeptName` varchar(255) DEFAULT '-' COMMENT 'ชื่อแผนก',
  `Sector_ID` varchar(100) DEFAULT NULL COMMENT 'รหัสฝ่ายงาน',
  PRIMARY KEY (`Dept_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.department: ~10 rows (approximately)
DELETE FROM `department`;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` (`Dept_ID`, `DeptName`, `Sector_ID`) VALUES
	('1001', 'แผนกงานธุรการสำนัก', '301');
INSERT INTO `department` (`Dept_ID`, `DeptName`, `Sector_ID`) VALUES
	('1002', 'แผนกงานห้องสมุด', '301');
INSERT INTO `department` (`Dept_ID`, `DeptName`, `Sector_ID`) VALUES
	('1003', 'แผนกงานศุนย์การเรียนรู้ด้วยตนเอง', '302');
INSERT INTO `department` (`Dept_ID`, `DeptName`, `Sector_ID`) VALUES
	('1004', 'แผนกงานวิศวกรรมเครือข่าย', '302');
INSERT INTO `department` (`Dept_ID`, `DeptName`, `Sector_ID`) VALUES
	('1005', 'แผนกงานอีเลิร์นนิ่งและเทคโนโลยีการศึกษา', '303');
INSERT INTO `department` (`Dept_ID`, `DeptName`, `Sector_ID`) VALUES
	('1212', '11', 'undefined');
INSERT INTO `department` (`Dept_ID`, `DeptName`, `Sector_ID`) VALUES
	('222', '22', 'undefined');
INSERT INTO `department` (`Dept_ID`, `DeptName`, `Sector_ID`) VALUES
	('4545', '4545', 'undefined');
INSERT INTO `department` (`Dept_ID`, `DeptName`, `Sector_ID`) VALUES
	('45454', '4545', 'undefined');
INSERT INTO `department` (`Dept_ID`, `DeptName`, `Sector_ID`) VALUES
	('545', '454', 'undefined');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;

-- Dumping structure for table leave_system.employee
CREATE TABLE IF NOT EXISTS `employee` (
  `Emp_ID` varchar(200) NOT NULL COMMENT 'รหัสบุคลากร',
  `Prefix` varchar(60) DEFAULT NULL COMMENT 'คำนำหน้า',
  `EmpName` varchar(255) DEFAULT NULL COMMENT 'ชื่อบุคลากร',
  `EmpLastName` varchar(150) DEFAULT NULL COMMENT 'นามสกุล',
  `Sex` varchar(100) DEFAULT NULL COMMENT 'เพศ',
  `Birthday` date DEFAULT NULL COMMENT 'วันเกิด',
  `ID_card` int(100) DEFAULT NULL COMMENT 'รหัสบัตรประชาชน',
  `Age` varchar(3) DEFAULT NULL COMMENT 'อายุ',
  `Address` varchar(255) DEFAULT NULL COMMENT 'ที่อยู่',
  `Tel` varchar(20) DEFAULT NULL COMMENT 'เบอร์โทร',
  `Username` varchar(50) DEFAULT NULL COMMENT 'Username',
  `Password` varchar(50) DEFAULT NULL COMMENT 'Password',
  `Work_day` date DEFAULT NULL COMMENT 'วันทำงาน',
  `Duration_work` varchar(20) DEFAULT NULL COMMENT 'อายุงาน',
  `SendingLeaveStatus` varchar(200) DEFAULT NULL COMMENT 'สถานะการส่งใบลา',
  `Empstatus_ID` varchar(20) DEFAULT NULL COMMENT 'รหัสสถานะ',
  `Position_ID` varchar(20) DEFAULT NULL COMMENT 'รหัสตำแหน่ง',
  `Dept_ID` varchar(20) DEFAULT NULL COMMENT 'รหัสแผนก',
  `Sector_ID` varchar(20) DEFAULT NULL COMMENT 'รหัสฝ่านงาน',
  `LType_ID` int(10) DEFAULT NULL,
  PRIMARY KEY (`Emp_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.employee: ~49 rows (approximately)
DELETE FROM `employee`;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.11.170', 'นางสาว', 'จิตติรัตน์', 'มาบจะบก', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5015', '1004', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.11.194', 'นางสาว', 'อุดมลักษณ์', 'พึ่งอารมณ์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5015', '1004', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.14.172', 'นางสาว', 'กาญจนาภรณ์', 'เจนศิริวงษ์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5015', '1005', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.14.178', 'นางสาว', 'นาตยา', 'ธารณะกลาง', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5015', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.2.184', 'นางสาว', 'อนัญญา', 'สีกระโทก', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.2.188', 'นางสาว', 'อัจฉรา', 'เทือกพุดซา', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '-', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.2.189', 'นาง', 'จุฑารัตน์', 'บุญคำ', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1006', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.2.190', 'นางสาว', 'พิมพ์ชนก', 'แยกโคกสูง', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.25.191', 'นาย', 'ศุภกร', 'จันทเสวต', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5018', '1002', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.27.186', 'นาย', 'วิโรจน์', 'ธรรมวัตร์', 'ชาย', '0000-00-00', 22222, '', '', '', 'level1/2', '123', '0000-00-00', '', '', '201', '5020', '1005', '302', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.27.195', 'นาย', 'ราเมศร์', 'ประเสริฐกลาง', 'ชาย', '0000-00-00', 0, '', '', '', 'level1', '123', '0000-00-00', '', '', '203', '5016', '1002', '302', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.3.164', 'นางสาว', 'พรทิพย์', 'บั้งจันอัด', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.3.177', 'นาย', 'ประภวิชญ์', 'บรรจงกุล', 'ชาย', '0000-00-00', 0, '', '', '', 'level1/1', '123', '0000-00-00', '', '', '202', '5022', '1002', '301', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.3.179', 'นาย', 'กฤษฎา', 'ยงย่วน', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.3.185', 'นางสาว', 'อาจารี', 'จรานุวัฒน์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5020', '1005', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.3.96', 'นาย', 'มาโนช', 'อุทรส', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.34.166', 'นาย', 'วินิจ', 'การชงัด', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5017', '1002', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.34.167', 'นาย', 'ไพล', 'เพราะผักแว่น', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5017', '1002', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.8.163', 'นางสาว', 'ศิรินภา', 'แสงสุขสว่าง', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.8.171', 'นางสาว', 'กิติยา', 'นิวาศานนท์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '203', '5014', '1002', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.8.173', 'นาย', 'เชิดชัย', 'คนรู้', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1004', '302', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.8.180', 'นางสาว', 'มยุรี', 'รุนสูงเนิน', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1006', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.8.181', 'นาย', 'จักรพงษ์', 'ทาวะรมย์', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1002', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.8.192', 'นางสาว', 'เมธวดี', 'กรองโพธิ์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1005', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.8.193', 'นาย', 'พีระยุทธ', 'หมื่นบุญมี', 'ชาย', '0000-00-00', 0, '', '', '', 'level2', '123', '0000-00-00', '', '', '203', '5011', '1002', '301', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.87.174', 'นาย', 'มงคล', 'ทองคำ', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5016', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('1000.87.175', 'นาย', 'พลากร', 'ชาญสูงเนิน', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5016', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('242', 'ผศ.', 'พรภัสสร', 'อ่อนเกิด', 'หญิง', '0000-00-00', 0, '', '', '', 'level4', '123', '0000-00-00', '', '', '203', '5002', '-', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('256', 'ผศ.', 'อภิชาต', 'ติรประเสริฐสิน', 'ชาย', '0000-00-00', 0, '', '', '', 'level5', '123', '0000-00-00', '', '', '203', '5001', '-', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5229007.02', 'นาย', 'สุเทพ', 'ยนต์พิมาย', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '201', '5004', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5329018.02', 'นางสาว', 'กัญญาภัทร', 'ชูพุทธพงษ์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '201', '5019', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5329019.02', 'นาง', 'รติมา', 'ปลั่งกลาง', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '201', '5021', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5329020.02', 'นาง', 'ปวีณา', 'นาดี', 'หญิง', '0000-00-00', 0, '', '', '', 'admin', '123', '0000-00-00', '', '', '202', '5023', '1001', '301', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5329021.02', 'นาง', 'วันวิสาข์', 'ยนต์พิมาย', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5329022.02', 'นางสาว', 'สาวอุไร', 'แสงศิริ', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5007', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5329023.02', 'นาย', 'ชัยวัฒน์', 'แดงจันทึก', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5010', '1001', '301', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5329032.02', 'นาย', 'สายชล', 'สารนอก', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5019', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5329107', 'นางสาว', 'นรารักษ์', 'บุตรชา', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5003', '1001', '301', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5429016.02', 'นางสาว', 'ลำแพน', 'กลิ่นพยอม', 'หญิง', '0000-00-00', 0, '', '', '', 'level3', '123', '0000-00-00', '', '', '202', '5005', '1002', '301', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5429017.02', 'นาง', 'ณัฐชนันย์', 'ฉายะพงษ์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5006', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5429018.02', 'นางสาว', 'อาภาพร', 'สุประดิษฐ์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5019', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5429024.02', 'นาย', 'ธีรธรรม์', 'โรจจนรุ่งสถิตย์', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5012', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5429110', 'นางสาว', 'อรวรรณ', 'พรตะคุ', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5013', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5629020.02', 'นาง', 'สุรวดี', 'กอคูณกลาง', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5629021.02', 'นาง', 'รัชดาพร', 'บุญไมตรี', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5021', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5629022.02', 'นาย', 'รัญชน์', 'แถวโสภา', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5005', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5829006.02', 'นางสาว', 'วิลาวัณย์', 'แสนสุข', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5021', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5829011.02', 'นาย', 'ทิวธวัช', 'เมฆวิชัย', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5019', '1001', '', 0);
INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
	('5829013.02', 'นางสาว', 'ทัศนีย์', 'เปรียบจันทึก', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0);
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
  `Emp_ID` varchar(20) DEFAULT NULL COMMENT 'รหัสพนักงาน',
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leave: ~3 rows (approximately)
DELETE FROM `leave`;
/*!40000 ALTER TABLE `leave` DISABLE KEYS */;
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(24, '1000.27.195', 'การลากิจส่วนตัว', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2020-12-01', 'เต็มวัน', '2020-12-02', 'เต็มวัน', 'ฟหกฟห', 'กฟหกฟหก', '', 2, 1, 1, 'ส่งใบลาฉบับจริงแล้ว', '2020-12-28 22:05:00', 27, 4004, '../upload/160916790036505.jpg');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(25, '1000.27.195', 'การลาคลอดบุตร', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2020-12-07', 'เต็มวัน', '2020-12-09', 'เต็มวัน', 'dsf', 'sdfsdf', '', 2, 1, 1, 'ส่งใบลาฉบับจริงแล้ว', '2020-12-28 22:07:49', 28, 4010, '36507.jpg');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(27, '1000.27.195', 'การลากิจส่วนตัว', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2020-12-08', 'เต็มวัน', '2020-12-09', 'เต็มวัน', 'sdf', 'sdfsdf', '', 1, 1, 1, 'ส่งใบลาฉบับจริงแล้ว', '2020-12-28 22:14:44', 28, 4004, '37983.jpg');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(28, '1000.27.195', 'การลาเขารับการตรวจเลือกหรือเข้ารับการเตียมพล', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2020-12-07', 'เต็มวัน', '2020-12-09', 'เต็มวัน', 'dasd', 'asdasd', '', 2, 1, 1, 'ส่งใบลาฉบับจริงแล้ว', '2020-12-28 22:15:55', 28, 4032, '37983.jpg');
INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `Leave_characteristics_dateStart`, `LeaveDateLast`, `Leave_characteristics_dateLast`, `LeaveData`, `ContactInformation`, `employee`, `LeaveTotal`, `number_leave`, `LeaveStatus_ID`, `LeaveStatus_Document`, `Response_Time`, `limit_ID`, `LType_ID`, `file_names`) VALUES
	(29, '1000.27.195', 'การลาพักผ่อน', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '2020-12-21', 'เต็มวัน', '2020-12-22', 'เต็มวัน', 'ไปเทียว', '0872605597', '', 1, 1, 1, 'ส่งใบลาฉบับจริงแล้ว', '2020-12-29 07:46:35', 28, 4009, '36869.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.leave_limit: ~2 rows (approximately)
DELETE FROM `leave_limit`;
/*!40000 ALTER TABLE `leave_limit` DISABLE KEYS */;
INSERT INTO `leave_limit` (`limit_ID`, `Name_limit`, `Date_start`, `limit_date`) VALUES
	(27, 'รอบที่ 1/2563', '2020-01-01', '6');
INSERT INTO `leave_limit` (`limit_ID`, `Name_limit`, `Date_start`, `limit_date`) VALUES
	(28, 'รอบที่ 2/2563', '2020-06-01', '6');
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
) ENGINE=InnoDB AUTO_INCREMENT=197 DEFAULT CHARSET=utf8;

-- Dumping data for table leave_system.officiate_day: ~196 rows (approximately)
DELETE FROM `officiate_day`;
/*!40000 ALTER TABLE `officiate_day` DISABLE KEYS */;
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.11.170', '', 1, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.11.194', '', 2, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.14.172', '', 3, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.14.178', '', 4, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.2.184', '', 5, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.2.188', '', 6, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.2.189', '', 7, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.2.190', '', 8, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.25.191', '', 9, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.27.186', '', 10, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'ไม่มาทำงาน', '1000.27.195', 'ลาป่วย', 11, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.3.164', '', 12, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.3.177', '', 13, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.3.179', '', 14, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.3.185', '', 15, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.3.96', '', 16, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.34.166', '', 17, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.34.167', '', 18, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.8.163', '', 19, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.8.171', '', 20, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.8.173', '', 21, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.8.180', '', 22, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.8.181', '', 23, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.8.192', '', 24, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.8.193', '', 25, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.87.174', '', 26, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '1000.87.175', '', 27, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '242', '', 28, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '256', '', 29, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5229007.02', '', 30, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5329018.02', '', 31, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5329019.02', '', 32, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5329020.02', '', 33, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5329021.02', '', 34, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5329022.02', '', 35, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5329023.02', '', 36, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5329032.02', '', 37, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5329107', '', 38, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5429016.02', '', 39, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5429017.02', '', 40, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5429018.02', '', 41, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5429024.02', '', 42, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5429110', '', 43, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5629020.02', '', 44, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5629021.02', '', 45, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5629022.02', '', 46, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5829006.02', '', 47, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5829011.02', '', 48, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-14', 'มาทำงาน', '5829013.02', '', 49, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.11.170', '', 50, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.11.194', '', 51, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.14.172', '', 52, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.14.178', '', 53, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.2.184', '', 54, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.2.188', '', 55, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.2.189', '', 56, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.2.190', '', 57, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.25.191', '', 58, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.27.186', '', 59, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'ไม่มาทำงาน', '1000.27.195', 'ลาป่วย', 60, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.3.177', '', 61, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.3.164', '', 62, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.3.179', '', 63, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.3.96', '', 64, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.3.185', '', 65, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.34.166', '', 66, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.8.163', '', 67, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.34.167', '', 68, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.8.173', '', 69, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.8.171', '', 70, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.8.180', '', 71, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.8.181', '', 72, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.8.192', '', 73, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.8.193', '', 74, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.87.174', '', 75, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '242', '', 76, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5229007.02', '', 77, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5329018.02', '', 78, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5329019.02', '', 79, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '1000.87.175', '', 80, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '256', '', 81, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5329020.02', '', 82, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5329021.02', '', 83, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5329023.02', '', 84, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5329022.02', '', 85, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5329032.02', '', 86, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5329107', '', 87, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5429016.02', '', 88, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5429017.02', '', 89, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5429018.02', '', 90, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5429024.02', '', 91, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5429110', '', 92, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5629020.02', '', 93, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5629021.02', '', 94, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5629022.02', '', 95, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5829006.02', '', 96, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5829011.02', '', 97, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-15', 'มาทำงาน', '5829013.02', '', 98, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.11.170', '', 99, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.11.194', '', 100, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.14.172', '', 101, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.14.178', '', 102, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.2.184', '', 103, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.2.188', '', 104, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.2.190', '', 105, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.27.186', '', 106, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.25.191', '', 107, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.2.189', '', 108, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'ไม่มาทำงาน', '1000.27.195', '', 109, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.3.164', '', 110, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.3.177', '', 111, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.3.179', '', 112, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.3.185', '', 113, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.3.96', '', 114, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.34.166', '', 115, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.34.167', '', 116, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.8.163', '', 117, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.8.173', '', 118, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.8.171', '', 119, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.8.180', '', 120, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.8.181', '', 121, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.8.192', '', 122, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.8.193', '', 123, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.87.174', '', 124, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '1000.87.175', '', 125, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '242', '', 126, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '256', '', 127, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5229007.02', '', 128, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5329018.02', '', 129, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5329019.02', '', 130, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5329021.02', '', 131, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5329020.02', '', 132, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5329032.02', '', 133, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5329022.02', '', 134, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5329023.02', '', 135, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5429017.02', '', 136, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5329107', '', 137, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5429016.02', '', 138, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5429018.02', '', 139, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5429024.02', '', 140, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5429110', '', 141, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5629020.02', '', 142, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5629021.02', '', 143, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5629022.02', '', 144, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5829011.02', '', 145, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5829006.02', '', 146, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-09', 'มาทำงาน', '5829013.02', '', 147, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.11.170', '', 148, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.11.194', '', 149, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.14.172', '', 150, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.14.178', '', 151, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.2.184', '', 152, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.2.188', '', 153, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.2.189', '', 154, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.2.190', '', 155, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.25.191', '', 156, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.27.186', '', 157, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.27.195', '', 158, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.3.164', '', 159, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.3.177', '', 160, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.3.179', '', 161, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.3.185', '', 162, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.3.96', '', 163, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.34.166', '', 164, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.8.163', '', 165, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.34.167', '', 166, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.8.171', '', 167, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.8.173', '', 168, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.8.180', '', 169, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.8.181', '', 170, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.8.192', '', 171, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.8.193', '', 172, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.87.174', '', 173, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '1000.87.175', '', 174, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '242', '', 175, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '256', '', 176, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5229007.02', '', 177, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5329018.02', '', 178, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5329019.02', '', 179, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5329020.02', '', 180, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5329021.02', '', 181, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5329022.02', '', 182, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5329023.02', '', 183, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5329032.02', '', 184, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5329107', '', 185, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5429016.02', '', 186, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5429017.02', '', 187, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5429018.02', '', 188, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5429024.02', '', 189, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5429110', '', 190, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5629020.02', '', 191, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5629021.02', '', 192, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5629022.02', '', 193, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5829011.02', '', 194, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5829006.02', '', 195, 1);
INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`, `message`) VALUES
	('2020-12-08', 'มาทำงาน', '5829013.02', '', 196, 1);
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
	('5007', 'หัวหน้าบริหารงานทั่วไป', '3');
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

-- Dumping data for table leave_system.upload: ~0 rows (approximately)
DELETE FROM `upload`;
/*!40000 ALTER TABLE `upload` DISABLE KEYS */;
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(10, '', '6286.jpg');
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(11, 'sdfsdfsdf', '');
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(12, 'asdasdsad', '');
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(13, 'asdasdsad', '');
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(1211, 'dsfsdfsdf', '');
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(1212, 'dasdsadasd', '');
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(1213, 'sdfsdfsdf', '');
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(1214, 'ssssss', '');
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(1215, '454545', '');
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(1216, 'asdasdasd', '');
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(1217, 'ฟหกหฟกฟหก', '');
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(1218, 'ทดสอบ', '');
INSERT INTO `upload` (`file_ID`, `file_data`, `file_names`) VALUES
	(1219, '987654321', '../upload/160916213736505.jpg');
/*!40000 ALTER TABLE `upload` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
