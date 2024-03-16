import { Add, Download } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import BasicTable from "../BasicTable/index.tsx";

export default function ListContainer() {
  return (
    <>
      <Box>
        <IconButton size="small" color="primary">
          <Typography>دریافت خروجی</Typography>
          <Download />
        </IconButton>
        <IconButton size="small" color="primary">
          <Typography>اضافه کردن</Typography>
          <Add />
        </IconButton>
      </Box>
      <BasicTable />
    </>
  );
}
