import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: "theme.palette.common.white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface KeyValueDisplayProps {
    data: Record<string, any>;
}

export const LoadPrograms = ({ data }: KeyValueDisplayProps) => {
  return (
    <TableContainer component={Paper} sx={{ bgcolor: "transparent", boxShadow: "none" }}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Motor</StyledTableCell>
            <StyledTableCell align="right">Method</StyledTableCell>
            <StyledTableCell align="right">Result</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(data).map(([key, value]) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">
                {key}
              </StyledTableCell>
              <StyledTableCell align="right">{value.method}</StyledTableCell>
              <StyledTableCell align="right">{value.result}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}