-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 11, 2019 at 10:45 AM
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
  `Dept_ID` varchar(10) NOT NULL COMMENT 'รหัสแผนก',
  `DeptName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ชื่อแผนก',
  `Sector` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ฝ่ายงาน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`Dept_ID`, `DeptName`, `Sector`) VALUES
('1001', 'แผนกงานธุรการสำนัก', 'งานบริหารงานทั่วไป'),
('1002', 'แผนกงานห้องสมุด', 'งานวิทยบริการ'),
('1003', 'แผนกงานศุนย์การเรียนรู้ด้วยตนเอง', 'งานวิทยบริการ'),
('1004', 'แผนกงานวิศวกรรมเครือข่าย', 'งานเทคโนโลยีสารสนเทศ'),
('1005', 'แผนกงานอีเลิร์นนิ่งและเทคโนโลยีการศึกษา', 'งานเทคโนโลยีสารสนเทศ'),
('1006', 'ระบบสารสนเทศเพื่อการบริหาร', 'งานเทคโนโลยีสารสนเทศ'),
('ds', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `Emp_ID` varchar(20) NOT NULL COMMENT 'รหัสพนักงาน',
  `Prefix` varchar(50) NOT NULL COMMENT 'คำนำหน้า',
  `EmpName` varchar(100) NOT NULL COMMENT 'ชื่อพนักงาน',
  `EmpLastName` varchar(100) NOT NULL COMMENT 'นาสกุลพนักงาน',
  `Sex` varchar(10) NOT NULL COMMENT 'เพศ',
  `Birthday` date NOT NULL COMMENT 'วันเกือนปีเกิด',
  `Age` int(5) NOT NULL COMMENT 'อายุ',
  `Address` varchar(200) NOT NULL COMMENT 'ที่อยู่',
  `Tel` varchar(15) NOT NULL COMMENT 'เบอร์โทรศัพท์',
  `Username` varchar(100) NOT NULL COMMENT 'รหัสผู้ใช่',
  `Password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'รหัสผ่าน',
  `Work_day` date NOT NULL COMMENT 'วันเริ่มทำงาน',
  `Duration_work` int(5) NOT NULL COMMENT 'ระยะเวลาทำงาน',
  `Empstatus_ID` varchar(10) NOT NULL COMMENT 'IDสถานะ',
  `Position_ID` varchar(10) NOT NULL COMMENT 'IDตำแหน่ง',
  `Dept_ID` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'IDแผนก',
  `Sector_ID` int(10) NOT NULL COMMENT 'รหัสฝ่านงาน',
  `Leave_ID` varchar(10) NOT NULL COMMENT 'IDการลา'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`Emp_ID`, `Prefix`, `EmpName`, `EmpLastName`, `Sex`, `Birthday`, `Age`, `Address`, `Tel`, `Username`, `Password`, `Work_day`, `Duration_work`, `Empstatus_ID`, `Position_ID`, `Dept_ID`, `Sector_ID`, `Leave_ID`) VALUES
('123456', 'นาย', 'วายุทธ', 'เทกระโทก', 'ชาย', '2019-12-11', 21, '-', '-', 'warayuth', '123456', '2019-12-11', 1, '104', '5329020.02', '1001', 0, ''),
('60172310102-8', '', 'ศรายุทธ', 'ไกรษร', 'ชาย', '0000-00-00', 22, '-', '0872605597', 'sarayuth', '123456', '0000-00-00', 0, '105', '5329020.02', '1001', 0, ''),
('98788', '', 'โลนาโด้', 'คริสเตียนโน่', 'ชาย', '2019-12-13', 23, '-', '0872605597', 'ronado', 'ronado', '2019-12-18', 2, '106', '256', '1001', 0, '');

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
('104', 'ลูกจ้างเงินรายได้'),
('105', 'พนักงานมหาวิทยาลัย'),
('106', 'ราชการ');

-- --------------------------------------------------------

--
-- Table structure for table `leave`
--

CREATE TABLE `leave` (
  `Leave_ID` int(20) NOT NULL COMMENT 'รหัสการลา',
  `Emp_ID` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'รหัสพนักงาน',
  `Name_Leave` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'เรื่องของการลา',
  `To_Person` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ส่งหา',
  `LeaveDateStart` datetime NOT NULL COMMENT 'วันเริ่มลา',
  `LeaveDateLast` datetime NOT NULL COMMENT 'วันสิ้นสุดการลา',
  `LeaveData` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ข้อมูลการลา',
  `ContactInformation` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ข้อมูลการติดต่อ',
  `LeaveTotal` int(10) NOT NULL COMMENT 'จำนวนการลา',
  `LeaveStatus` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'สถานะการลา',
  `UploadFile` blob NOT NULL COMMENT 'อัปโหลดไฟล์',
  `Response_Time` datetime NOT NULL COMMENT 'เวลาที่ตอบรับ',
  `Person_Code_Allow` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'รหัสผู้อนุญาต'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `leave`
--

INSERT INTO `leave` (`Leave_ID`, `Emp_ID`, `Name_Leave`, `To_Person`, `LeaveDateStart`, `LeaveDateLast`, `LeaveData`, `ContactInformation`, `LeaveTotal`, `LeaveStatus`, `UploadFile`, `Response_Time`, `Person_Code_Allow`) VALUES
(7, '60172310102-8', '45', '', '2019-12-05 00:00:00', '2019-12-12 00:00:00', '45', '', 2, '', '', '0000-00-00 00:00:00', ''),
(16, '60172310102-8', '5', '5', '2019-12-25 00:00:00', '2019-12-11 00:00:00', 'asdasdasd', '', 2, '', '', '0000-00-00 00:00:00', ''),
(17, '123456', '123', '1213', '2019-12-11 00:00:00', '2019-12-12 00:00:00', '-', '', 2, '', '', '0000-00-00 00:00:00', ''),
(18, '123456', '1', '2', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '1', '', 0, '', '', '0000-00-00 00:00:00', ''),
(19, '123456', '5', '5', '2019-12-05 00:00:00', '2019-12-12 00:00:00', '-', '', 2, '', '', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- Table structure for table `leavetype`
--

CREATE TABLE `leavetype` (
  `LType_ID` int(10) NOT NULL COMMENT 'รหัสประเภทการลา',
  `LTypeName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ชื่อประเภทการลา',
  `Number` int(10) DEFAULT NULL COMMENT 'จำนวนวันลา',
  `Remain` int(10) DEFAULT NULL COMMENT 'คงเหลือ',
  `AdvanceNotice` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'แจ้งล่วงหน้า',
  `LOrdinal` int(10) DEFAULT NULL COMMENT 'จำนวนครั้งที่ลา',
  `QuotaStatus` tinyint(1) NOT NULL COMMENT 'สถานะสิทธิ์การลา',
  `Empstatus_ID` int(10) NOT NULL COMMENT 'สถานะบุคลากร'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `leavetype`
--

INSERT INTO `leavetype` (`LType_ID`, `LTypeName`, `Number`, `Remain`, `AdvanceNotice`, `LOrdinal`, `QuotaStatus`, `Empstatus_ID`) VALUES
(100001, 'ลาป่วย', 60, 52, 'ไม่ต้องแจ่งล่วงหน้า', 0, 1, 106),
(100002, 'ลาป่วย', 60, 60, '-', 0, 1, 105),
(100003, 'ลาป่วย', 15, 15, '-', 0, 1, 104),
(200001, 'ลากิจ', 15, 15, '5', 0, 1, 106),
(200002, 'ลากิจ', 15, 15, '-', 0, 1, 105),
(200003, 'ลากิจ', 10, 10, '3', 0, 1, 104),
(300001, 'ลาพักผ่อน', 10, 10, '7', 0, 1, 104);

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
('242', 'รองผู้อำนวยการฝ่ายบริหารงานทั่วไป', '2'),
('256', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '1'),
('5329020.02', 'เจ้าหน้าที่บริหารงานทั่วไป', '5'),
('5329107', 'รองผู้อำนวยการฝ่ายบริการ', '2');

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
-- Indexes for table `leavetype`
--
ALTER TABLE `leavetype`
  ADD PRIMARY KEY (`LType_ID`);

--
-- Indexes for table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`Position_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `leave`
--
ALTER TABLE `leave`
  MODIFY `Leave_ID` int(20) NOT NULL AUTO_INCREMENT COMMENT 'รหัสการลา', AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
