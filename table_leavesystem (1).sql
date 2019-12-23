-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 23, 2019 at 04:41 PM
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
('1006', 'ระบบสารสนเทศเพื่อการบริหาร', 'งานเทคโนโลยีสารสนเทศ');

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
('1', 'ผศ.', 'อภิชาต', 'ติรประเสริฐสิน', '', '0000-00-00', 0, '', '', 'apichar', '123456', '0000-00-00', 0, '106', '256', '1003', 0, ''),
('10', 'นางสาว', 'ลำแพน', 'กลิ่นพยอม', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5429016.02', 'null', 0, ''),
('11', 'นาง', 'ณัฐชนันย์', 'ฉายะพงษ์', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5429017.02', 'null', 0, ''),
('12', 'นาย', 'ชัยวัฒน์', 'แดงจันทึก', '', '0000-00-00', 0, '', '', 'chaiwat', '123456', '0000-00-00', 0, '105', '5329023.02', '1002', 0, ''),
('13', 'นาง', 'ปวีณา', 'นาดี', '', '0000-00-00', 0, '', '', 'pavena', '987654', '0000-00-00', 0, '104', '5329020.02', '1002', 0, ''),
('14', 'นาง', 'วันวิสาข์', 'ยนต์พิมาย', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5329021.02', 'null', 0, ''),
('15', 'นางสาว', 'อุไร', 'แสงศิริ', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5329022.02', 'null', 0, ''),
('16', 'นาสาว', 'ทัศนีย์', 'เปรียบจันทึก', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5829013.02', 'null', 0, ''),
('17', 'นางรติมา', 'รติมา', 'ปลั่งกลาง', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5329019.02', 'null', 0, ''),
('18', 'นางสาว', 'วิลาวัณย์', 'แสนสุข', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5829006.02', 'null', 0, ''),
('19', 'นางสาว', 'กัญญาภัทร', 'ชูพุทธพงษ์', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5329018.02', 'null', 0, ''),
('2', 'ผศ.', 'พรภัสสร', 'อ่อนเกิด', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '242', '', 0, ''),
('20', 'นาย', 'ธีรธรรม์', 'โรจจนรุ่งสถิตย์', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5429024.02', 'null', 0, ''),
('21', 'นางสาว', 'อรวรรณ', 'พรตะคุ', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5429110', 'null', 0, ''),
('22', 'นาย', 'สายชล', 'สารนอก', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5329032.02', 'null', 0, ''),
('23', 'นาย', 'ทิวธวัช', 'เมฆวิชัย', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5829011.02', 'null', 0, ''),
('24', 'นางสาว', 'อาภาพร', 'สุประดิษฐ์', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, 'null', '5429018.02', 'null', 0, ''),
('25', 'น.ส.', 'อุดมลักษณ์', 'พึ่งอารมณ์', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.11.19', '', 0, ''),
('26', 'น.ส.', 'อัจฉรา', 'เทือกพุดซา', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.2.188', '', 0, ''),
('27', 'นาย', 'พีระยุทธ', 'หมื่นบุญมี', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.8.193', '', 0, ''),
('28', 'น.ส.', 'นาตยา', 'ธารณะกลาง', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.14.17', '', 0, ''),
('29', 'น.ส.', 'อนัญญา', 'สีกระโทก', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.2.184', '', 0, ''),
('3', 'น.ส.', 'นรารักษ์', 'บุตรชา', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '5329107', '', 0, ''),
('30', 'นาย', 'กฤษฎา', 'ยงย่วน', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.3.179', '', 0, ''),
('31', 'นาย', 'มาโนช', 'อุทรส', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.3.96', '', 0, ''),
('32', 'น.ส.', 'พรทิพย์', 'บั้งจันอัด', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.3.164', '', 0, ''),
('33', 'นาย', 'ประภวิชญ์', 'บรรจงกุล', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.3.177', '', 0, ''),
('34', 'น.ส.', 'ศิรินภา', 'แสงสุขสว่าง', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.8.163', '', 0, ''),
('35', 'นาย', 'มงคล', 'ทองคำ', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.87.17', '', 0, ''),
('36', 'นาย', 'พลากร', 'ชาญสูงเนิน', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.87.17', '', 0, ''),
('37', 'นาย', 'จักรพงษ์', 'ทาวะรมย์', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.8.181', '', 0, ''),
('38', 'น.ส.', 'จิตติรัตน์', 'มาบจะบก', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.11.17', '', 0, ''),
('39', 'น.ส.', 'พิมพ์ชนก', 'แยกโคกสูง', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.2.190', '', 0, ''),
('4', 'นาย', 'ทศพล', 'บุญใส', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '13', '', 0, ''),
('40', 'น.ส.', 'กาญจนาภรณ์', 'เจนศิริวงษ์', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.14.17', '', 0, ''),
('41', 'น.ส.', 'เมธวดี', 'กรองโพธิ์', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.8.192', '', 0, ''),
('42', 'นาย', 'เชิดชัย', 'คนรู้', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.8.173', '', 0, ''),
('43', 'น.ส.', 'อาจารี', 'จรานุวัฒน์', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.3.185', '', 0, ''),
('44', 'น.ส.', 'มยุรี', 'รุนสูงเนิน', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.8.180', '', 0, ''),
('45', 'นาง', 'จุฑารัตน์', 'บุญคำ', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.2.189', '', 0, ''),
('46', 'นาย', 'วิโรจน์', 'ธรรมวัตร์', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.27.18', '', 0, ''),
('47', 'น.ส.', 'กิติยา', 'นิวาศานนท์', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.8.171', '', 0, ''),
('48', 'นาย', 'ราเมศร์', 'ประเสริฐกลาง', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.27.19', '', 0, ''),
('49', 'นาย', 'วินิจ', 'การชงัด', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.34.16', '', 0, ''),
('5', 'นาย', 'นายสุเทพ', 'ยนต์พิมาย', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '5229007.02', '', 0, ''),
('50', 'นาย', 'ไพล', 'เพราะผักแว่น', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.34.16', '', 0, ''),
('51', 'นาย', 'ศุภกร', 'จันทเสวต', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '1000.25.19', '', 0, ''),
('6', 'นาง', 'นางรัชดาพร', 'บุญไมตรี', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '5629021.02', '', 0, ''),
('7', 'นาย', 'นายรัญชน์', 'แถวโสภา', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '5629022.02', '', 0, ''),
('8', 'นาง', 'นางสุรวดี', 'กอคูณกลาง', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '5629020.02', '', 0, ''),
('9', 'นางสาว', 'นางสาวชนัญชิดา', 'เลิศจะบก', '', '0000-00-00', 0, '', '', '', '', '0000-00-00', 0, '', '5429012.02', '', 0, '');

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
  `LeaveDateStart` date NOT NULL COMMENT 'วันเริ่มลา',
  `LeaveDateLast` date NOT NULL COMMENT 'วันสิ้นสุดการลา',
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
(40, '12', '', '', '2019-12-11', '2019-12-14', '', '', 3, '', '', '0000-00-00 00:00:00', ''),
(41, '12', '', '', '2019-12-17', '2019-12-21', '', '', 4, '', '', '0000-00-00 00:00:00', ''),
(42, '13', '-', '-', '2019-12-11', '2019-12-13', 'เป็นไข้', '', 2, '', '', '0000-00-00 00:00:00', ''),
(43, '13', '55', '55', '2019-12-13', '2019-12-20', 'ไม่สบาย', '', 7, '', '', '0000-00-00 00:00:00', '');

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
(100001, 'ลาป่วย', 60, 60, 'ไม่ต้องแจ่งล่วงหน้า', 1, 1, 106),
(100002, 'ลาป่วย', 60, 60, '-', 6, 1, 105),
(100003, 'ลาป่วย', 15, 15, '-', 0, 1, 104),
(200001, 'ลากิจ', 15, 15, '5', 0, 1, 106),
(200002, 'ลากิจ', 15, 15, '-', 0, 1, 105),
(200003, 'ลากิจ', 10, 10, '3', 0, 1, 104),
(300001, 'ลาพักผ่อน', 10, 10, '7', 0, 1, 104);

-- --------------------------------------------------------

--
-- Table structure for table `officiate_day`
--

CREATE TABLE `officiate_day` (
  `Day_Work` date NOT NULL COMMENT 'วันที่มาทำงาน',
  `Status_Work` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'สถานนะ',
  `Emp_ID` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'รหัสพนักงาน',
  `Day_ID` int(20) NOT NULL COMMENT 'รหัสวันมาทำงาน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `officiate_day`
--

INSERT INTO `officiate_day` (`Day_Work`, `Status_Work`, `Emp_ID`, `Day_ID`) VALUES
('2019-12-23', 'มาทำงาน', '1', 1),
('2019-12-23', 'มาทำงาน', '2', 2),
('2019-12-23', 'มาทำงาน', '3', 3),
('2019-12-23', 'ไม่มาทำงาน', '4', 4),
('2019-12-23', 'jkljkl', '5', 5),
('2019-12-23', 'kk', '6', 6),
('2019-12-23', 'มาทำงาน', '7', 7),
('2019-12-23', 'kk', '8', 8),
('2019-12-23', 'kk', '9', 9),
('2019-12-23', 'll', '10', 10);

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
('1000.11.17', 'บรรณารักษ์', '1'),
('1000.11.19', 'บรรณารักษ์', '1'),
('1000.14.17', 'ผู้ปฏิบัติงานบริหาร', '1'),
('1000.2.184', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('1000.2.188', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('1000.2.189', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('1000.2.190', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('1000.25.19', 'เจ้าหน้าที่ห้องสมุด', '1'),
('1000.27.18', 'นักวิชาการโสตทัศนศึกษา', '1'),
('1000.27.19', 'นักวิชาการโสตทัศนศึกษา', '1'),
('1000.3.164', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('1000.3.177', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('1000.3.179', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('1000.3.185', 'นักวิชาการโสตทัศนศึกษา', '1'),
('1000.3.96', 'นักวิชาการคอมพิวเตอร์', '1'),
('1000.34.16', 'นักเอกสารสนเทศ', '1'),
('1000.8.163', 'นักวิชาการคอมพิวเตอร์', '1'),
('1000.8.171', 'นักวิชาการคอมพิวเตอร์', '1'),
('1000.8.173', 'นักวิชาการคอมพิวเตอร์', '1'),
('1000.8.180', 'นักวิชาการคอมพิวเตอร์', '1'),
('1000.8.181', 'นักวิชาการคอมพิวเตอร์', '1'),
('1000.8.192', 'นักวิชาการคอมพิวเตอร์', '1'),
('1000.8.193', 'นักวิชาการคอมพิวเตอร์', '1'),
('1000.87.17', 'วิศวกร', '1'),
('13', 'นักวิชาการโสตทัศนศึกษา', '1'),
('242', 'รองผู้อำนวยการฝ่ายบริหารงานทั่วไป', '4'),
('256', 'ผู้อำนวยการสำนักวิทยบริการและเทคโนโลยีสารสนเทศ', '5'),
('5229007.02', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('5329018.02', 'นักวิชาการศึกษา', '1'),
('5329019.02', 'บรรณารักษ์', '1'),
('5329020.02', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('5329021.02', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('5329022.02', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('5329023.02', 'นักวิชาการคอมพิวเตอร์', '1'),
('5329032.02', 'นักวิชาการศึกษา', '1'),
('5329107', 'รองผู้อำนวยการฝ่ายวิทยบริการ', '4'),
('5429012.02', 'นักวิชาการศึกษา', '1'),
('5429016.02', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('5429017.02', 'นักวิชาการศึกษา', '1'),
('5429018.02', 'นักวิชาการศึกษา', '1'),
('5429024.02', 'นักวิชาการศึกษา', '1'),
('5429110', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('5629020.02', 'เจ้าหน้าที่บริหารงานทั่วไป', '1'),
('5629021.02', 'บรรณารักษ์', '1'),
('5629022.02', 'นักวิชาการศึกษา', '1'),
('5829006.02', 'บรรณารักษ์', '1'),
('5829011.02', 'นักวิชาการศึกษา', '1'),
('5829013.02', 'นักวิชาการศึกษา', '1');

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `leave`
--
ALTER TABLE `leave`
  MODIFY `Leave_ID` int(20) NOT NULL AUTO_INCREMENT COMMENT 'รหัสการลา', AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `officiate_day`
--
ALTER TABLE `officiate_day`
  MODIFY `Day_ID` int(20) NOT NULL AUTO_INCREMENT COMMENT 'รหัสวันมาทำงาน', AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
