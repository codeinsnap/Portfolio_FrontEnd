import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import "./about_me.css";
import aboutMeImg from "../../Assets/aboutMeImg.jpg";


function AboutMe() {
  return (
    <div className="main_box">
      <div className="title_box">
        <span className="title_show"> About Me </span>
        <span className="title_hide"> About Me </span>
      </div>
      <div className="aboutme_main_box">
        <div className="aboutme_container">
          <div className="left_box">
            <img className="left_Img" src={aboutMeImg} />
          </div>
          <div className="right_box">
              <TableContainer className="table_container" component={Paper}>
                <TableBody className="table_body">
                  <TableRow className="table_row">
                    <TableCell className="table_cell">Full Name</TableCell>
                    <TableCell className="table_cell">Yogesh Sharma</TableCell>
                  </TableRow>
                  <TableRow className="table_row">
                    <TableCell className="table_cell">Date of birth</TableCell>
                    <TableCell className="table_cell">January 01, 1987</TableCell>
                  </TableRow>
                  <TableRow className="table_row">
                    <TableCell className="table_cell">Telephone</TableCell>
                    <TableCell className="table_cell">6353113540</TableCell>
                  </TableRow>
                  <TableRow className="table_row">
                    <TableCell className="table_cell">Status</TableCell>
                    <TableCell className="table_cell">Single</TableCell>
                  </TableRow>
                  <TableRow className="table_row">
                    <TableCell className="table_cell">Email</TableCell>
                    <TableCell className="table_cell">yog192325@gmail.com</TableCell>
                  </TableRow>
                  <TableRow className="table_row">
                    <TableCell className="table_cell">Website</TableCell>
                    <TableCell className="table_cell">www.portfolio.com</TableCell>
                  </TableRow>
                  <TableRow className="table_row">
                    <TableCell className="table_cell">Address</TableCell>
                    <TableCell className="table_cell">
                      198 West 21st Street, Suite 721 New York NY 10016
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
