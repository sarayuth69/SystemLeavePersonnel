-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 06, 2020 at 05:20 AM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `table_leavesystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `Dept_ID` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'รหัสแผนก',
  `DeptName` varchar(100) DEFAULT NULL COMMENT 'ชื่อแผนก',
  `Sector_ID` varchar(100) NOT NULL COMMENT 'รหัสฝ่ายงาน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`Dept_ID`, `DeptName`, `Sector_ID`) VALUES
('1001', 'แผนกงานธุรการสำนัก', '303'),
('1002', 'แผนกงานห้องสมุด', '301'),
('1003', 'แผนกงานศุนย์การเรียนรู้ด้วยตนเอง', '302'),
('1004', 'แผนกงานวิศวกรรมเครือข่าย', '302'),
('1005', 'แผนกงานอีเลิร์นนิ่งและเทคโนโลยีการศึกษา', '303'),
('1006', 'ระบบสารสนเทศเพื่อการบริหาร', '301');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `Emp_ID` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'รหัสบุคลากร',
  `Prefix` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'คำนำหน้า',
  `EmpName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'ชื่อบุคลากร',
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
  `LType_ID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `ID_card`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `SendingLeaveStatus`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `LType_ID`) VALUES
('1000.11.170', 'นางสาว', 'จิตติรัตน์', 'มาบจะบก', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5015', '1004', '', 0),
('1000.11.194', 'นางสาว', 'อุดมลักษณ์', 'พึ่งอารมณ์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5015', '1004', '', 0),
('1000.14.172', 'นางสาว', 'กาญจนาภรณ์', 'เจนศิริวงษ์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5015', '1005', '', 0),
('1000.14.178', 'นางสาว', 'นาตยา', 'ธารณะกลาง', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5015', '1001', '', 0),
('1000.2.184', 'นางสาว', 'อนัญญา', 'สีกระโทก', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0),
('1000.2.188', 'นางสาว', 'อัจฉรา', 'เทือกพุดซา', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '-', '', 0),
('1000.2.189', 'นาง', 'จุฑารัตน์', 'บุญคำ', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1006', '', 0),
('1000.2.190', 'นางสาว', 'พิมพ์ชนก', 'แยกโคกสูง', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0),
('1000.25.191', 'นาย', 'ศุภกร', 'จันทเสวต', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5018', '1002', '', 0),
('1000.27.186', 'นาย', 'วิโรจน์', 'ธรรมวัตร์', 'ชาย', '0000-00-00', 22222, '', '', '', '', '', '0000-00-00', '', '', '201', '5020', '1005', '', 0),
('1000.27.195', 'นาย', 'ราเมศร์', 'ประเสริฐกลาง', 'ชาย', '0000-00-00', 0, '', '', '', 'level1', '123', '0000-00-00', '', '', '202', '5016', '1002', '301', 0),
('1000.3.164', 'นางสาว', 'พรทิพย์', 'บั้งจันอัด', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0),
('1000.3.177', 'นาย', 'ประภวิชญ์', 'บรรจงกุล', 'ชาย', '0000-00-00', 0, '', '', '', 'level1/1', '123', '0000-00-00', '', '', '202', '5022', '1002', '301', 0),
('1000.3.179', 'นาย', 'กฤษฎา', 'ยงย่วน', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0),
('1000.3.185', 'นางสาว', 'อาจารี', 'จรานุวัฒน์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5020', '1005', '', 0),
('1000.3.96', 'นาย', 'มาโนช', 'อุทรส', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1001', '', 0),
('1000.34.166', 'นาย', 'วินิจ', 'การชงัด', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5017', '1002', '', 0),
('1000.34.167', 'นาย', 'ไพล', 'เพราะผักแว่น', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5017', '1002', '', 0),
('1000.8.163', 'นางสาว', 'ศิรินภา', 'แสงสุขสว่าง', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1001', '', 0),
('1000.8.171', 'นางสาว', 'กิติยา', 'นิวาศานนท์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '203', '5014', '1002', '', 0),
('1000.8.173', 'นาย', 'เชิดชัย', 'คนรู้', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1004', '302', 0),
('1000.8.180', 'นางสาว', 'มยุรี', 'รุนสูงเนิน', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1006', '', 0),
('1000.8.181', 'นาย', 'จักรพงษ์', 'ทาวะรมย์', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1002', '', 0),
('1000.8.192', 'นางสาว', 'เมธวดี', 'กรองโพธิ์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5014', '1005', '', 0),
('1000.8.193', 'นาย', 'พีระยุทธ', 'หมื่นบุญมี', 'ชาย', '0000-00-00', 0, '', '', '', 'level2', '123', '0000-00-00', '', '', '203', '5011', '1002', '301', 0),
('1000.87.174', 'นาย', 'มงคล', 'ทองคำ', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5016', '1001', '', 0),
('1000.87.175', 'นาย', 'พลากร', 'ชาญสูงเนิน', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5016', '1001', '', 0),
('242', 'ผศ.', 'พรภัสสร', 'อ่อนเกิด', 'หญิง', '0000-00-00', 0, '', '', '', 'level4', '123', '0000-00-00', '', '', '203', '5002', '-', '', 0),
('256', 'ผศ.', 'อภิชาต', 'ติรประเสริฐสิน', 'ชาย', '0000-00-00', 0, '', '', '', 'level5', '123', '0000-00-00', '', '', '203', '5001', '-', '', 0),
('5229007.02', 'นาย', 'สุเทพ', 'ยนต์พิมาย', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '201', '5004', '1001', '', 0),
('5329018.02', 'นางสาว', 'กัญญาภัทร', 'ชูพุทธพงษ์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '201', '5019', '1001', '', 0),
('5329019.02', 'นาง', 'รติมา', 'ปลั่งกลาง', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '201', '5021', '1001', '', 0),
('5329020.02', 'นาง', 'ปวีณา', 'นาดี', 'หญิง', '0000-00-00', 0, '', '', '', 'admin', '123', '0000-00-00', '', '', '202', '5023', '1001', '301', 0),
('5329021.02', 'นาง', 'วันวิสาข์', 'ยนต์พิมาย', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0),
('5329022.02', 'นางสาว', 'สาวอุไร', 'แสงศิริ', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5007', '1001', '', 0),
('5329023.02', 'นาย', 'ชัยวัฒน์', 'แดงจันทึก', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5010', '1001', '301', 0),
('5329032.02', 'นาย', 'สายชล', 'สารนอก', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5019', '1001', '', 0),
('5329107', 'นางสาว', 'นรารักษ์', 'บุตรชา', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5003', '1001', '301', 0),
('5429012.02', 'นางสาว', 'ชนัญชิดา', 'เลิศจะบก', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5008', '1001', '', 0),
('5429016.02', 'นางสาว', 'ลำแพน', 'กลิ่นพยอม', 'หญิง', '0000-00-00', 0, '', '', '', 'level3', '123', '0000-00-00', '', '', '202', '5005', '1002', '301', 0),
('5429017.02', 'นาง', 'ณัฐชนันย์', 'ฉายะพงษ์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5006', '1001', '', 0),
('5429018.02', 'นางสาว', 'อาภาพร', 'สุประดิษฐ์', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5019', '1001', '', 0),
('5429024.02', 'นาย', 'ธีรธรรม์', 'โรจจนรุ่งสถิตย์', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5012', '1001', '', 0),
('5429110', 'นางสาว', 'อรวรรณ', 'พรตะคุ', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5013', '1001', '', 0),
('5629020.02', 'นาง', 'สุรวดี', 'กอคูณกลาง', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0),
('5629021.02', 'นาง', 'รัชดาพร', 'บุญไมตรี', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5021', '1001', '', 0),
('5629022.02', 'นาย', 'รัญชน์', 'แถวโสภา', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5005', '1001', '', 0),
('5829006.02', 'นางสาว', 'วิลาวัณย์', 'แสนสุข', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5021', '1001', '', 0),
('5829011.02', 'นาย', 'ทิวธวัช', 'เมฆวิชัย', 'ชาย', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5019', '1001', '', 0),
('5829013.02', 'นางสาว', 'ทัศนีย์', 'เปรียบจันทึก', 'หญิง', '0000-00-00', 0, '', '', '', '', '', '0000-00-00', '', '', '202', '5022', '1001', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `employeestatus`
--

CREATE TABLE `employeestatus` (
  `Empstatus_ID` varchar(10) NOT NULL COMMENT 'รหัสสถานะบุคลากร',
  `EmpstatusName` varchar(100) NOT NULL COMMENT 'สถานะบุคลากร'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employeestatus`
--

INSERT INTO `employeestatus` (`Empstatus_ID`, `EmpstatusName`) VALUES
('201', 'ลูกจ้างเงินรายได้'),
('202', 'พนักงานมหาวิทยาลัย'),
('203', 'ราชการ');

-- --------------------------------------------------------

--
-- Table structure for table `leave`
--

CREATE TABLE `leave` (
  `Leave_ID` int(20) NOT NULL COMMENT 'รหัสการลา',
  `Emp_ID` varchar(20) NOT NULL COMMENT 'รหัสพนักงาน',
  `Name_Leave` varchar(255) NOT NULL COMMENT 'เรื่องของการลา',
  `To_Person` varchar(255) NOT NULL COMMENT 'ส่งหา',
  `LeaveDateStart` date NOT NULL COMMENT 'วันเริ่มลา',
  `LeaveDateLast` date NOT NULL COMMENT 'วันสิ้นสุดการลา',
  `LeaveData` varchar(255) NOT NULL COMMENT 'ข้อมูลการลา',
  `ContactInformation` varchar(255) NOT NULL COMMENT 'ข้อมูลการติดต่อ',
  `LeaveTotal` int(10) NOT NULL COMMENT 'จำนวนการลา',
  `LeaveStatus_ID` int(10) NOT NULL COMMENT 'รหัสสถานะการลา',
  `LeaveStatus` varchar(5) NOT NULL COMMENT 'รหัสสถานะ(ใช้งาน,ไม่ใช้งาน)',
  `UploadFile` blob NOT NULL COMMENT 'อัปโหลดไฟล์',
  `Response_Time` datetime NOT NULL COMMENT 'เวลาที่ตอบรับ',
  `Person_Code_Allow` varchar(20) NOT NULL COMMENT 'รหัสผู้อนุญาต',
  `LType_ID` int(10) NOT NULL COMMENT 'รหัสประเภทการลา	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `leave`
--

INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `LeaveDateLast`, `LeaveData`, `ContactInformation`, `LeaveTotal`, `LeaveStatus_ID`, `LeaveStatus`, `UploadFile`, `Response_Time`, `Person_Code_Allow`, `LType_ID`) VALUES
(50, '1000.27.177', '', '', '2020-06-19', '2020-06-21', '', '', 2, 2, 'Y', '', '0000-00-00 00:00:00', '', 4002),
(51, '1000.3.177', '', '', '2020-06-20', '2020-06-22', '', '', 2, 3, 'Y', '', '0000-00-00 00:00:00', '', 4005),
(52, '1000.8.193', '', '', '2020-06-21', '2020-07-03', '', '', 2, 3, 'Y', '', '0000-00-00 00:00:00', '', 4004),
(53, '1000.3.177', '', '', '2020-07-08', '2020-07-09', '', '', 1, 3, 'N', '', '0000-00-00 00:00:00', '', 4002),
(54, '1000.27.77', '', '', '2020-07-10', '2020-07-14', '', '', 4, 2, 'Y', '', '0000-00-00 00:00:00', '', 4005),
(56, '1000.27.195', '', '', '2020-07-25', '2020-07-28', 'ASAS', '', 3, 3, 'Y', '', '0000-00-00 00:00:00', '', 4005),
(57, '1000.27.195', '', '', '2020-07-17', '2020-07-19', 'qwe', '', 2, 3, 'Y', '', '0000-00-00 00:00:00', '', 4005),
(58, '1000.27.195', '', '', '2020-07-22', '2020-08-09', '', '', 18, 3, 'Y', '', '0000-00-00 00:00:00', '', 4007);

-- --------------------------------------------------------

--
-- Table structure for table `leavestatus`
--

CREATE TABLE `leavestatus` (
  `LeaveStatus_ID` int(10) NOT NULL COMMENT 'รหัสสถานะการลา',
  `LeaveStatus_Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ชื่อสถานนะ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `leavestatus`
--

INSERT INTO `leavestatus` (`LeaveStatus_ID`, `LeaveStatus_Name`) VALUES
(1, 'รออนุญาตจากหัวหน้าแผนก'),
(2, 'รออนุญาตจากหัวหน้างาน'),
(3, 'รออนุญาตจากรองหัวหน้าหน่วยงาน'),
(4, 'รออนุญาตจากหัวหน้าหน่วยงาน'),
(5, 'อนุญาต'),
(6, 'ไม่อนุญาต');

-- --------------------------------------------------------

--
-- Table structure for table `leavetype`
--

CREATE TABLE `leavetype` (
  `LType_ID` int(10) NOT NULL COMMENT 'รหัสประเภทการลา',
  `LTypeName` varchar(100) NOT NULL COMMENT 'ชื่อประเภทการลา',
  `Number` int(10) DEFAULT NULL COMMENT 'จำนวนวันลา',
  `AdvanceNotice` varchar(50) DEFAULT NULL COMMENT 'แจ้งล่วงหน้า',
  `LOrdinal` int(10) DEFAULT NULL COMMENT 'จำนวนครั้งที่ลา',
  `QuotaStatus` varchar(100) NOT NULL COMMENT 'สถานะสิทธิ์การลา',
  `leavetype_remark` varchar(255) NOT NULL COMMENT 'หมายเหตุ',
  `Empstatus_ID` varchar(10) NOT NULL COMMENT 'สถานะบุคลากร'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `leavetype`
--

INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `leavetype_remark`, `Empstatus_ID`) VALUES
(4001, 'ลาป่วย', 60, 'ไม่ต้องแจ่งล่วงหน้า', 0, 'ลาได้', '', '203'),
(4002, 'ลาป่วย', 60, '12', 0, 'ลาได้', '', '202'),
(4003, 'ลาป่วย', 15, '-', 0, 'ลาไม่ได้', '', '201'),
(4004, 'ลากิจ', 30, '5', 0, 'ลาได้', '', '203'),
(4005, 'ลากิจ', 30, '5', 0, 'ลาได้', '', '202'),
(4007, 'ลาพักผ่อน', 10, '7', 0, 'ลาได้', '', '202'),
(4009, 'ลาพักผ่อน', 10, '-', 0, 'ลาได้', '', '203'),
(4010, 'ลาคลอด', 90, '-', 0, 'ลาได้', '', '203'),
(4011, 'ลาอุปสมบท', 120, '-', 0, 'ลาได้', '', '203'),
(4013, 'ลาคลอด', 90, '-', 0, 'ลาได้', '', '202'),
(4014, 'ลาอุปสมบท', 15, '60', 0, 'ลาได้', '', '202'),
(4015, 'ลาพักผ่อน', 10, '-', 0, 'ลาได้', '', '201');

-- --------------------------------------------------------

--
-- Table structure for table `officiate_day`
--

CREATE TABLE `officiate_day` (
  `Day_Work` date NOT NULL COMMENT 'วันที่มาทำงาน',
  `Status_Work` varchar(100) NOT NULL COMMENT 'สถานนะ',
  `Emp_ID` varchar(20) NOT NULL COMMENT 'รหัสพนักงาน',
  `Data` varchar(255) NOT NULL COMMENT 'สาเหตุ',
  `Day_ID` int(20) NOT NULL COMMENT 'รหัสวันมาทำงาน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `officiate_day`
--

INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Data`, `Day_ID`) VALUES
('2020-03-26', 'มาทำงาน', '1000.11.170', '', 1),
('2020-03-26', 'มาทำงาน', '1000.11.194', '', 2),
('2020-03-26', 'มาทำงาน', '1000.14.172', '', 3),
('2020-03-26', 'มาทำงาน', '1000.14.178', '', 4),
('2020-03-26', 'มาทำงาน', '1000.2.184', '', 5),
('2020-03-26', 'มาทำงาน', '1000.2.188', '', 6),
('2020-03-26', 'มาทำงาน', '1000.2.189', '', 7),
('2020-03-26', 'มาทำงาน', '1000.2.190', '', 8),
('2020-03-26', 'มาทำงาน', '1000.25.191', '', 9),
('2020-03-26', 'มาทำงาน', '1000.27.186', '', 10),
('2020-03-26', 'มาทำงาน', '1000.27.195', '', 11),
('2020-03-26', 'มาทำงาน', '1000.3.164', '', 12),
('2020-03-26', 'มาทำงาน', '1000.3.177', '', 13),
('2020-03-26', 'มาทำงาน', '1000.3.179', '', 14),
('2020-03-26', 'มาทำงาน', '1000.3.185', '', 15),
('2020-03-26', 'มาทำงาน', '1000.3.96', '', 16),
('2020-03-26', 'มาทำงาน', '1000.34.166', '', 17),
('2020-03-26', 'มาทำงาน', '1000.34.167', '', 18),
('2020-03-26', 'มาทำงาน', '1000.8.163', '', 19),
('2020-03-26', 'มาทำงาน', '1000.8.171', '', 20),
('2020-03-26', 'มาทำงาน', '1000.8.173', '', 21),
('2020-03-26', 'มาทำงาน', '1000.8.180', '', 22),
('2020-03-26', 'มาทำงาน', '1000.8.181', '', 23),
('2020-03-26', 'มาทำงาน', '1000.8.192', '', 24),
('2020-03-26', 'มาทำงาน', '1000.8.193', '', 25),
('2020-03-26', 'มาทำงาน', '1000.87.174', '', 26),
('2020-03-26', 'มาทำงาน', '1000.87.175', '', 27),
('2020-03-26', 'มาทำงาน', '242', '', 28),
('2020-03-26', 'มาทำงาน', '256', '', 29),
('2020-03-26', 'มาทำงาน', '5229007.02', '', 30),
('2020-03-26', 'มาทำงาน', '5329018.02', '', 31),
('2020-03-26', 'มาทำงาน', '5329019.02', '', 32),
('2020-03-26', 'มาทำงาน', '5329020.02', '', 33),
('2020-03-26', 'มาทำงาน', '5329021.02', '', 34),
('2020-03-26', 'มาทำงาน', '5329022.02', '', 35),
('2020-03-26', 'มาทำงาน', '5329023.02', '', 36),
('2020-03-26', 'มาทำงาน', '5329032.02', '', 37),
('2020-03-26', 'มาทำงาน', '5329107', '', 38),
('2020-03-26', 'มาทำงาน', '5429012.02', '', 39),
('2020-03-26', 'มาทำงาน', '5429016.02', '', 40),
('2020-03-26', 'มาทำงาน', '5429017.02', '', 41),
('2020-03-26', 'มาทำงาน', '5429018.02', '', 42),
('2020-03-26', 'มาทำงาน', '5429024.02', '', 43),
('2020-03-26', 'มาทำงาน', '5429110', '', 44),
('2020-03-26', 'มาทำงาน', '5629020.02', '', 45),
('2020-03-26', 'มาทำงาน', '5629021.02', '', 46),
('2020-03-26', 'มาทำงาน', '5629022.02', '', 47),
('2020-03-26', 'มาทำงาน', '5829006.02', '', 48),
('2020-03-26', 'มาทำงาน', '5829011.02', '', 49),
('2020-03-26', 'มาทำงาน', '5829013.02', '', 50),
('2020-04-05', 'มาทำงาน', '1000.11.170', '', 51),
('2020-04-05', 'มาทำงาน', '1000.11.194', '', 52),
('2020-04-05', 'มาทำงาน', '1000.14.172', '', 53),
('2020-04-05', 'มาทำงาน', '1000.14.178', '', 54),
('2020-04-05', 'มาทำงาน', '1000.2.184', '', 55),
('2020-04-05', 'มาทำงาน', '1000.2.188', '', 56),
('2020-04-05', 'มาทำงาน', '1000.2.189', '', 57),
('2020-04-05', 'มาทำงาน', '1000.2.190', '', 58),
('2020-04-05', 'มาทำงาน', '1000.25.191', '', 59),
('2020-04-05', 'มาทำงาน', '1000.27.186', '', 60),
('2020-04-05', 'มาทำงาน', '1000.27.195', '', 61),
('2020-04-05', 'มาทำงาน', '1000.3.164', '', 62),
('2020-04-05', 'มาทำงาน', '1000.3.177', '', 63),
('2020-04-05', 'มาทำงาน', '1000.3.179', '', 64),
('2020-04-05', 'มาทำงาน', '1000.3.185', '', 65),
('2020-04-05', 'มาทำงาน', '1000.3.96', '', 66),
('2020-04-05', 'มาทำงาน', '1000.34.166', '', 67),
('2020-04-05', 'มาทำงาน', '1000.34.167', '', 68),
('2020-04-05', 'มาทำงาน', '1000.8.163', '', 69),
('2020-04-05', 'มาทำงาน', '1000.8.171', '', 70),
('2020-04-05', 'มาทำงาน', '1000.8.173', '', 71),
('2020-04-05', 'มาทำงาน', '1000.8.180', '', 72),
('2020-04-05', 'มาทำงาน', '1000.8.181', '', 73),
('2020-04-05', 'มาทำงาน', '1000.8.192', '', 74),
('2020-04-05', 'มาทำงาน', '1000.8.193', '', 75),
('2020-04-05', 'มาทำงาน', '1000.87.174', '', 76),
('2020-04-05', 'มาทำงาน', '1000.87.175', '', 77),
('2020-04-05', 'มาทำงาน', '242', '', 78),
('2020-04-05', 'มาทำงาน', '256', '', 79),
('2020-04-05', 'มาทำงาน', '5229007.02', '', 80),
('2020-04-05', 'มาทำงาน', '5329018.02', '', 81),
('2020-04-05', 'มาทำงาน', '5329019.02', '', 82),
('2020-04-05', 'มาทำงาน', '5329020.02', '', 83),
('2020-04-05', 'มาทำงาน', '5329021.02', '', 84),
('2020-04-05', 'มาทำงาน', '5329022.02', '', 85),
('2020-04-05', 'มาทำงาน', '5329023.02', '', 86),
('2020-04-05', 'มาทำงาน', '5329032.02', '', 87),
('2020-04-05', 'มาทำงาน', '5329107', '', 88),
('2020-04-05', 'มาทำงาน', '5429012.02', '', 89),
('2020-04-05', 'มาทำงาน', '5429016.02', '', 90),
('2020-04-05', 'มาทำงาน', '5429017.02', '', 91),
('2020-04-05', 'มาทำงาน', '5429018.02', '', 92),
('2020-04-05', 'มาทำงาน', '5429024.02', '', 93),
('2020-04-05', 'มาทำงาน', '5429110', '', 94),
('2020-04-05', 'มาทำงาน', '5629020.02', '', 95),
('2020-04-05', 'มาทำงาน', '5629021.02', '', 96),
('2020-04-05', 'มาทำงาน', '5629022.02', '', 97),
('2020-04-05', 'มาทำงาน', '5829006.02', '', 98),
('2020-04-05', 'มาทำงาน', '5829011.02', '', 99),
('2020-04-05', 'มาทำงาน', '5829013.02', '', 100);

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

CREATE TABLE `position` (
  `Position_ID` varchar(10) NOT NULL COMMENT 'รหัสตำแหน่ง',
  `PositionName` varchar(100) NOT NULL COMMENT 'ชื่อตำแหน่ง',
  `Role` varchar(1) NOT NULL COMMENT 'สิทธิการข้าใช้'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`Position_ID`, `PositionName`, `Role`) VALUES
('5001', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '5'),
('5002', 'รองผู้อำนวยการฝ่ายบริหารงานทั่วไป', '4'),
('5003', 'รองผู้อำนวยการฝ่ายวิทยบริการ', '4'),
('5004', 'หัวหน้าสำนักงานผู้อำนวยการ', '3'),
('5005', 'หัวหน้างานเทคโนโลยีสารสนเทศ', '3'),
('5006', 'หัวหน้างานวิทยบริการ', '3'),
('5007', 'หัวหน้าบริหารงานทั่วไป', '3'),
('5008', 'หัวหน้าแผนกงานห้องสมุด', '2'),
('5009', 'หัวหน้าแผนกงานธุรการสำนักงาน', '2'),
('5010', 'หัวหน้าแผนกงานวิศวกรรมเครือข่าย', '2'),
('5011', 'หัวหน้าแผนกอีเลิร์นนิ่งและเทคโนโลยีสารสนเทศ', '2'),
('5012', 'หัวหน้าแผนกระบบสารสนเทศเพื่อการบริหาร', '2'),
('5013', 'หัวหน้าแผนกศูนย์การเรียนรู้ด้วยตนเอง', '2'),
('5014', 'นักวิชาการคอมพิวเตอร์', '1'),
('5015', 'ผู้ปฏิบัติงานบริหาร', '1'),
('5016', 'วิศวกร', '1'),
('5017', 'นักเอกสารสนเทศ', '1'),
('5018', 'เจ้าหน้าที่ห้องสมุด', '1'),
('5019', 'นักวิชาการศึกษา', '1'),
('5020', 'นักวิชาการโสตทัศนศึกษา', '1'),
('5021', 'บรรณารักษ์', '1'),
('5022', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('5023', 'ผู้ดูแลระบบ', '6');

-- --------------------------------------------------------

--
-- Table structure for table `sector`
--

CREATE TABLE `sector` (
  `Sector_ID` varchar(10) NOT NULL COMMENT 'รหัสฝ่ายงาน',
  `SectorName` varchar(255) NOT NULL COMMENT 'ชื่อฝ่ายงาน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sector`
--

INSERT INTO `sector` (`Sector_ID`, `SectorName`) VALUES
('301', 'งานบริหารงานทั่วไป'),
('302', 'งานวิทยบริการ'),
('303', 'งานเทคโนโลยีสารสนเทศ');

-- --------------------------------------------------------

--
-- Table structure for table `upload`
--

CREATE TABLE `upload` (
  `file_ID` int(11) NOT NULL,
  `file_name` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`Dept_ID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`Emp_ID`);

--
-- Indexes for table `employeestatus`
--
ALTER TABLE `employeestatus`
  ADD PRIMARY KEY (`Empstatus_ID`);

--
-- Indexes for table `leave`
--
ALTER TABLE `leave`
  ADD PRIMARY KEY (`Leave_ID`);

--
-- Indexes for table `leavestatus`
--
ALTER TABLE `leavestatus`
  ADD PRIMARY KEY (`LeaveStatus_ID`);

--
-- Indexes for table `leavetype`
--
ALTER TABLE `leavetype`
  ADD PRIMARY KEY (`LType_ID`);

--
-- Indexes for table `officiate_day`
--
ALTER TABLE `officiate_day`
  ADD PRIMARY KEY (`Day_ID`);

--
-- Indexes for table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`Position_ID`);

--
-- Indexes for table `sector`
--
ALTER TABLE `sector`
  ADD PRIMARY KEY (`Sector_ID`);

--
-- Indexes for table `upload`
--
ALTER TABLE `upload`
  ADD PRIMARY KEY (`file_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `leave`
--
ALTER TABLE `leave`
  MODIFY `Leave_ID` int(20) NOT NULL AUTO_INCREMENT COMMENT 'รหัสการลา', AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `leavetype`
--
ALTER TABLE `leavetype`
  MODIFY `LType_ID` int(10) NOT NULL AUTO_INCREMENT COMMENT 'รหัสประเภทการลา', AUTO_INCREMENT=4016;

--
-- AUTO_INCREMENT for table `officiate_day`
--
ALTER TABLE `officiate_day`
  MODIFY `Day_ID` int(20) NOT NULL AUTO_INCREMENT COMMENT 'รหัสวันมาทำงาน', AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `upload`
--
ALTER TABLE `upload`
  MODIFY `file_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12559;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
