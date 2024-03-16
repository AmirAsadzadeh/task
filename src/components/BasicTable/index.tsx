import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  domain: string,
  count: number,
  isActive: number,
  lang: number,
  translate: number
) {
  return { domain, count, isActive, lang, translate };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer dir="rtl" component={Paper} sx={{ maxWidth: "1200px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center">دامنه ها</StyledTableCell>
            <StyledTableCell align="center">مقادیر</StyledTableCell>
            <StyledTableCell align="center">isActive</StyledTableCell>
            <StyledTableCell align="center">زبان</StyledTableCell>
            <StyledTableCell align="center">معنی</StyledTableCell>
            <StyledTableCell align="center">عملیات</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.domain}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell align="center" component="th">
                {row.domain}
              </StyledTableCell>
              <StyledTableCell align="center" component="th">
                {row.count}
              </StyledTableCell>
              <StyledTableCell align="center">{row.isActive}</StyledTableCell>
              <StyledTableCell align="center">{row.lang}</StyledTableCell>
              <StyledTableCell align="center">{row.translate}</StyledTableCell>
              <StyledTableCell align="center">
                <Button>
                  <Edit />
                </Button>
                <Button color="error">
                  <Delete />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
