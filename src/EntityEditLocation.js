import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@apollo/react-hooks";

// @material-ui/core components
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import SelectCountry from "./SelectCountry";

export default function EntityEditLocation({ entryId }) {
  //const classes = useStyles();

  /*
  const { loading, error, data } = useQuery(ORGANIZATIONS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
*/

  const { register, handleSubmit, errors, control } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      id: entryId,
      ShippingAddressStreet: "veien 4",
      ShippingAddressCity: "city",
      ShippingAddressPostcode: "1234",
      ShippingAddressCountry: "norWay",
      Latitude: "1",
      Longitude: "2",

      ForeignKeysOrganisasjonsnummer: "123456789",
      ForeignKeysKommunenummer: "1234",
      ForeignKeysFylkesnummer: "5678"
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
    <Grid Container>
      <h1>Location</h1>
      <Paper elevation={4}>
        <h2>Lookup</h2>
        ForeignKeysOrganisasjonsnummer (CREATE lookup)
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Organisasjonsnummer"
              variant="outlined"
              type="text"
              name="ForeignKeysOrganisasjonsnummer"
              inputRef={register({
                required: false,
                minLength: 5,
                maxLength: 50
              })}
              fullWidth
              error={!!errors.ForeignKeysOrganisasjonsnummer}
              helperText={
                errors.ForeignKeysOrganisasjonsnummer && "min 5 max 50"
              }
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Kommunenummer"
              variant="outlined"
              type="text"
              name="ForeignKeysKommunenummer"
              inputRef={register({
                required: false,
                minLength: 5,
                maxLength: 50
              })}
              fullWidth
              error={!!errors.ForeignKeysKommunenummer}
              helperText={errors.ForeignKeysKommunenummer && "min 5 max 50"}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Fylkesnummer"
              variant="outlined"
              type="text"
              name="ForeignKeysFylkesnummer"
              inputRef={register({
                required: false,
                minLength: 5,
                maxLength: 50
              })}
              fullWidth
              error={!!errors.ForeignKeysFylkesnummer}
              helperText={errors.ForeignKeysFylkesnummer && "min 5 max 50"}
            />
          </Grid>
        </Grid>
      </Paper>

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
                label="Postcode"
                variant="outlined"
                type="text"
                name="ShippingAddressPostcode"
                inputRef={register({
                  required: false,
                  minLength: 5,
                  maxLength: 50
                })}
                fullWidth
                error={!!errors.ShippingAddressPostcode}
                helperText={errors.ShippingAddressPostcode && "min 5 max 50"}
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
              <SelectCountry control={control} />
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

      <Button
        variant="contained"
        color="primary"
        disabled={
          !!errors.ShippingAddressStreet ||
          !!errors.ShippingAddressPostcode ||
          !!errors.ShippingAddressCity ||
          !!errors.ShippingAddressCountry ||
          !!errors.Latitude ||
          !!errors.Longitude
        }
        onClick={handleSubmit(onSubmit)}
      >
        Lagre
      </Button>
    </Grid>
  );
}
