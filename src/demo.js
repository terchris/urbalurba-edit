import React from "react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import MuiAutoComplete from "./MuiAutoComplete";


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

  const { register, handleSubmit, errors, control } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      id: "entryId",
      idName: "strapiRecord.idName",
      displayName: "strapiRecord.displayName",
      slogan: "strapiRecord.slogan",
      summary: "strapiRecord.summary",
      description: "strapiRecord.description",
      url: "strapiRecord.url",
      phone: "strapiRecord.phone",

      InternalImageIcon: "an url",      
      InternalImageProfile: "a profile",
      InternalImageCover: "a cover image..", 

      ForeignKeysOrganisasjonsnummer: "",

      ShippingAddressStreet: "veien 4",
      ShippingAddressCity : "city",
      ShippingAddressPostcode: "1234",
      ShippingAddressCountry :"norWay",
      Latitude: "1",
      Longitude: "2",
    }
  });

  const onSubmit = async data => {
    //let result = await updateOrganizationFields(data);
    let result = "hei";
    console.log(data);

    if (result !== "none") {
      // sucess
      alert("result er:", JSON.stringify(result));
    }
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
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
          <h1>Gereral fields</h1>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Record ID"
                  disabled
                  type="text"
                  name="id"
                  inputRef={register({ required: false })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="idName"
                  disabled
                  type="text"
                  name="idName"
                  inputRef={register({ required: false })}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  label="DisplayName"
                  variant="outlined"
                  type="text"
                  name="displayName"
                  inputRef={register({
                    required: true,
                    minLength: 5,
                    maxLength: 50
                  })}
                  fullWidth
                  error={!!errors.displayName}
                  helperText={errors.displayName && "min 5 max 50"}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  label="url / website"
                  variant="outlined"
                  type="text"
                  name="url"
                  fullWidth
                  inputRef={register({ required: false })}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  label="Phone"
                  variant="outlined"
                  type="text"
                  name="phone"
                  inputRef={register({ required: false })}
                  fullWidth
                  error={!!errors.phone}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  label="Slogan"
                  variant="outlined"
                  type="text"
                  name="slogan"
                  inputRef={register({
                    required: true,
                    minLength: 5,
                    maxLength: 50
                  })}
                  fullWidth
                  error={!!errors.slogan}
                  helperText={errors.displayName && "min 5 max 50"}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  label="Summary"
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                  type="text"
                  name="summary"
                  inputRef={register({
                    required: true,
                    minLength: 5,
                    maxLength: 50
                  })}
                  error={!!errors.summary}
                  helperText={errors.displayName && "min 5 max 50"}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  rows={6}
                  variant="outlined"
                  type="text"
                  name="description"
                  inputRef={register({
                    required: true,
                    minLength: 5,
                    maxLength: 50
                  })}
                  error={!!errors.description}
                  helperText={errors.displayName && "min 5 max 50"}
                />
              </Grid>
            </Grid>
          </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h1>Images</h1>
          <form>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={12}>
                <TextField
                  label="InternalImage Icon"
                  variant="outlined"
                  type="text"
                  name="InternalImageIcon"
                  inputRef={register({
                    required: false,
                    minLength: 5,
                    maxLength: 50
                  })}
                  fullWidth
                  error={!!errors.InternalImageIcon}
                  helperText={errors.InternalImageIcon && "min 5 max 50"}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  label="InternalImage Profile"
                  variant="outlined"
                  type="text"
                  name="InternalImageProfile"
                  inputRef={register({
                    required: true,
                    minLength: 5,
                    maxLength: 50
                  })}
                  fullWidth
                  error={!!errors.InternalImageProfile}
                  helperText={errors.InternalImageProfile && "min 5 max 50"}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="InternalImage Cover"
                  variant="outlined"
                  type="text"
                  name="InternalImageCover"
                  inputRef={register({
                    required: false,
                    minLength: 5,
                    maxLength: 50
                  })}
                  fullWidth
                  error={!!errors.InternalImageCover}
                  helperText={errors.InternalImageCover && "min 5 max 50"}
                />
              </Grid>



            </Grid>
          </form>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h1>Location</h1>
      ForeignKeysOrganisasjonsnummer (CREATE lookup)
          <form>
          <Paper elevation={4}>
          <h2>Shipping address</h2>
            <Grid container spacing={3}>
            
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Street"
                  variant="outlined"
                  type="text"
                  name="ShippingAddressStreet"
                  inputRef={register({
                    required: false,
                    minLength: 5,
                    maxLength: 50
                  })}
                  fullWidth
                  error={!!errors.ShippingAddressStreet}
                  helperText={errors.ShippingAddressStreet && "min 5 max 50"}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  label="City"
                  variant="outlined"
                  type="text"
                  name="ShippingAddressCity"
                  inputRef={register({
                    required: false,
                    minLength: 5,
                    maxLength: 50
                  })}
                  fullWidth
                  error={!!errors.ShippingAddressCity}
                  helperText={errors.ShippingAddressCity && "min 5 max 50"}
                />
              </Grid>

              <Grid item xs={12} sm={12}>            
                <MuiAutoComplete control={control} />
              </Grid>


            </Grid>
          </Paper>
          <Paper elevation={4}>
          <h2>GPS</h2>
            <Grid container spacing={3}>
            
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Latitude"
                  variant="outlined"
                  type="text"
                  name="Latitude"
                  inputRef={register({
                    required: false,
                    minLength: 5,
                    maxLength: 50
                  })}
                  fullWidth
                  error={!!errors.Latitude}
                  helperText={errors.Latitude && "min 5 max 50"}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  label="Longitude"
                  variant="outlined"
                  type="text"
                  name="Longitude"
                  inputRef={register({
                    required: false,
                    minLength: 5,
                    maxLength: 50
                  })}
                  fullWidth
                  error={!!errors.Longitude}
                  helperText={errors.Longitude && "min 5 max 50"}
                />
              </Grid>


            </Grid>
          </Paper>
          
          </form>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
