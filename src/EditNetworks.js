import React from "react";
import { useForm } from "react-hook-form";
import MUIDataTable from "mui-datatables";
import { useQuery } from "@apollo/react-hooks";

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

export default function EditGeneral({ entryId }) {
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


  const columns = [
    {
      name: "id",
      label: "id",
      options: {
       display: false
      }
    },
    {
     name: "idName",
     label: "ID",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "displayName",
     label: "Navn",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "slogan",
     label: "Slogan",
     options: {
      filter: true,
      sort: false,
     }
    }
   ];
  

  const netMemberOrgs = [
    {
      "id": "5eea060dc0c8c0809b8122af",
      "approved": true,
      "approvedDate": "2020-07-01",
      "approvedBy": "terje",
      "appliedDate": "2020-06-30",
      "appliedBy": "nk brreg",
      "text": "Net:sbn, Org:bronnoysundregistrene, Source:terje2",
      "resigned": false,
      "resignedDate": null,
      "resignedBy": null
    }
  ]
  
  const options = {
    filterType: 'checkbox',
  };
  



  return (
    <Grid Container>


    </Grid>
  );
}
