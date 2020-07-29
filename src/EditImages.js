import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@apollo/react-hooks";

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

export default function EditImages({ entryId }) {
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
      <Button
        variant="contained"
        color="primary"
        disabled={
          !!errors.InternalImageIcon ||
          !!errors.InternalImageProfile ||
          !!errors.InternalImageCover 
        }
        onClick={handleSubmit(onSubmit)}
      >
        Lagre
      </Button>
    </Grid>
  );
}
