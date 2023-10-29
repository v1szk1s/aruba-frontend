import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


const StyledStack = styled(Stack)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.primary,
  backgroundColor: theme.palette.background.default,
  borderRadius: "0px",
  boxShadow: "none",
  minHeight: "100vh",
}));


export default function Profile() {
  const [rows, setRows] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get("http://80.211.122.162/api/getDeployedApp", {
        headers: { authToken: localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data);
        let temp = [];
        response.data.deployedApps.forEach((app) => {
          temp.push(createData(app.app.name, app.app.version, app.app.price, app.date));
        });
        setRows(temp);
        setName(response.data.firstName);
        
      })
      .catch((error) => {
        console.log(error);
      }, []);
  });

  const theme = useTheme();
  function createData(name, version, price, deployed) {
    return { name, version, price, deployed };
  }

  return (
    <div style={{height: 100}}>
      <StyledStack direction={"column"}>
        <Typography variant="h1" component="h1" mt={4}>
          Hi <span style={{ color: "orange" }}>{name}!</span>
        </Typography>
        <Typography variant="h4" component="h1" mt={4} mb={0}>
          Your deploy history
        </Typography>
        <TableContainer component={Paper} sx={{ width: "50%", margin: "auto" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Version</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Deployed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.version}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledStack>
    </div>
  );
}
