import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Traditional } from './Services/Traditional';
import { LoadTable } from './LoadTable';
import { LoadPrograms } from './LoadPrograms';
import { LoadPhishing } from './LoadPhishing';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface PhishingResultProps {
  result: Traditional;
}
export default function TabPanel({ result }: PhishingResultProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Statistics" {...a11yProps(0)} />
          <Tab label="Results" {...a11yProps(1)} />
          {result.phishing && <Tab label="Phishing Results" {...a11yProps(2)} />}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LoadTable data={result.virus_total["data"]["attributes"]["stats"]} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <LoadPrograms data={result.virus_total["data"]["attributes"]["results"]} />
      </CustomTabPanel>
      {result.phishing &&
      <CustomTabPanel value={value} index={2}>
       <LoadPhishing data={result.virus_total["data"]["attributes"]["results"]} />
      </CustomTabPanel>}
    </Box>
  );
}
