import React from "react";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Box from "@material-ui/core/Box";



import EntityEditGeneralInfo from "./EntityEditGeneralInfo";
import EntityEditLocation from "./EntityEditLocation";
import EntityEditImages from "./EntityEditImages";
import EntityEditNetworkMembership from "./EntityEditNetworkMembership";
import CategoryItemList from "./SharedComponents/CategoryItemList";
import CategoryItemListMultiple from "./SharedComponents/CategoryItemListMultiple";
import CategoryItemListSingle from "./SharedComponents/CategoryItemListSingle";
import CategoryItemListInput from "./SharedComponents/CategoryItemListInput";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 


  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="general" {...a11yProps(0)} />
          <Tab label="images" {...a11yProps(1)} />
          <Tab label="location " {...a11yProps(2)} />
          <Tab label="networks" {...a11yProps(3)} />
          <Tab label="CategoryItemList" {...a11yProps(4)} />
          <Tab label="CategoryItemListMultiple" {...a11yProps(5)} />
          <Tab label="CategoryItemListSingle" {...a11yProps(6)} />
          <Tab label="CategoryItemListInput" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <EntityEditGeneralInfo entryId={"dummyID"} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EntityEditImages entryId={"dummyID"} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EntityEditLocation entryId={"dummyID"} />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <EntityEditNetworkMembership entryId={"dummyID"} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CategoryItemList />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <CategoryItemListMultiple />
      </TabPanel>
      <TabPanel value={value} index={6}>
      <CategoryItemListSingle />
      </TabPanel>
      <TabPanel value={value} index={7}>
      <CategoryItemListInput />
      </TabPanel>

    </div>
  );
}

