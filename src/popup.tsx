import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { useState } from "react";

const IndexPopup = () => {
  // const [data, setData] = useState("");
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack minWidth={240}>
      <img src="https://raw.githubusercontent.com/yudai1204/ScombZ-Utilities/dev/ScombZ%20Utilities/popup/imgs/scombZ.svg" alt="" />
      {/* <Typography variant="h6">
        Welcome to your{" "}
        <Link href="https://www.plasmo.com" target="_blank">
          Plasmo
        </Link>{" "}
        Extension!-
      </Typography>
      <Input onChange={(e) => setData(e.target.value)} value={data} />
      <Button href="https://docs.plasmo.com" target="_blank">
        View Docs
      </Button> */}
      <Tabs
        value={value}
        onChange={handleChange}
      >
        <Tab label="月" value="Mon" />
        <Tab label="火" value="Tue" />
        <Tab label="水" value="Wed" />
        <Tab label="木" value="Thu" />
        <Tab label="金" value="Fri" />
        <Tab label="土" value="Sat" />
        <Tab label="課題" value="Ass" />
      </Tabs>
    </Stack>

  );
};

export default IndexPopup;
