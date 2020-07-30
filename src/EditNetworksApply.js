import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@apollo/react-hooks";

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

export default function EditNetworksApply({ entryId, entryRecord }) {
  //const classes = useStyles();

  /*
  const { loading, error, data } = useQuery(ORGANIZATIONS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
*/

  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      id: entryId,
      InternalImageIcon: "an url",
      InternalImageProfile: "a profile",
      InternalImageCover: "a cover image.."
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
      <h1>Gereral fields</h1>
      <form>
        <Grid container spacing={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5}>
              <TextField
                label="Status"
                disabled
                type="text"
                name="status"
                inputRef={register({ required: false })}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                label="EntryType"
                disabled
                type="text"
                name="entityTypeTxt"
                inputRef={register({ required: false })}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                label="Record ID"
                disabled
                type="text"
                name="id"
                inputRef={register({ required: false })}
              />
            </Grid>
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

      <Button
        variant="contained"
        color="primary"
        disabled={
          !!errors.displayName ||
          !!errors.slogan ||
          !!errors.summary ||
          !!errors.description ||
          !!errors.phone
        }
        onClick={handleSubmit(onSubmit)}
      >
        Lagre
      </Button>
    </Grid>
  );
}
