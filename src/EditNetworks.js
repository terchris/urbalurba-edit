import React, { useState } from "react";

import { useForm } from "react-hook-form";
import MUIDataTable from "mui-datatables";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { useQuery } from "@apollo/react-hooks";

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function EditNetworks({ entryId }) {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");

  const columns = [
    {
      name: "id",
      label: "id",
      options: {
        display: false
      }
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: dataIndex => {
          let val = "Applied";
          if (
            this.state.data[dataIndex].approved === true &&
            this.state.data[dataIndex].resigned !== true
          ) {
            val = "Active";
          } else if (this.state.data[dataIndex].resigned === true) {
            val = "Resigned";
          }
          return val;
        }
      }
    },
    {
      name: "displayName",
      label: "Network",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: dataIndex => {
          let val = this.state.data[dataIndex].network.displayName;
          return val;
        }
      }
    },
    {
      name: "statusDate",
      label: "statusDate",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: dataIndex => {
          let val = this.state.data[dataIndex].appliedDate;
          if (
            this.state.data[dataIndex].approved === true &&
            this.state.data[dataIndex].resigned !== true
          ) {
            val = this.state.data[dataIndex].approvedDate;
          } else if (this.state.data[dataIndex].resigned === true) {
            val = this.state.data[dataIndex].resignedDate;
          }
          return val;
        }
      }
    },
    {
      name: "who",
      label: "who",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: dataIndex => {
          let val = this.state.data[dataIndex].appliedBy;
          if (
            this.state.data[dataIndex].approved === true &&
            this.state.data[dataIndex].resigned !== true
          ) {
            val = this.state.data[dataIndex].approvedBy;
          } else if (this.state.data[dataIndex].resigned === true) {
            val = this.state.data[dataIndex].resignedBy;
          }
          return val;
        }
      }
    },
    {
      name: "text",
      label: "Comment",
      options: {
        filter: true,
        sort: true
      }
    }
  ];

  const netMemberOrgs = [
    {
      id: "5eea060dc0c8c0809b8122af",
      network: {
        idName: "sbn",
        displayName: "Smarte Byer Norge"
      },
      approved: true,
      approvedDate: "2020-07-01",
      approvedBy: "terje",
      appliedDate: "2020-06-30",
      appliedBy: "nk brreg",
      text: "Net:sbn, Org:bronnoysundregistrene, Source:terje2",
      resigned: false,
      resignedDate: null,
      resignedBy: null
    },
    {
      id: "5f2168858559cbcdd7ec163f",
      network: {
        idName: "cor",
        displayName: "Core dev network"
      },
      approved: false,
      approvedDate: null,
      approvedBy: null,
      appliedDate: "2020-07-01",
      appliedBy: "terje manuellt",
      text: "brreg to cor network",
      resigned: false,
      resignedDate: null,
      resignedBy: null
    },
    {
      id: "5f216aca8559cbcdd7ec1640",
      network: {
        idName: "gba",
        displayName: "Grønn Byggallianse"
      },
      approved: true,
      approvedDate: "2020-07-01",
      approvedBy: "godkjennt av ter",
      appliedDate: "2020-04-01",
      appliedBy: "terje i strapi søkte",
      text: "brreg to green",
      resigned: true,
      resignedDate: "2020-07-28",
      resignedBy: "utmelt  av ter"
    }
  ];

  this.state = {
    data: netMemberOrgs
  };

  const options = {
    onRowClick: rowData => console.log(rowData),
    //onRowClick: (data) => this.props.history.push('/adm/edit', 'data'),
    // onRowClick: (rowData) => history.push('/adm/edit'),
    download: false,
    filter: false,
    pagination: false,
    print: false,
    search: false,
    viewColumns: false,
    selectableRows: "none",
    responsive:"standard"
  };

  return (
    <Grid Container>
      <MUIDataTable
        title={"Networks"}
        data={netMemberOrgs}
        columns={columns}
        options={options}
      />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Grid>
  );
}
