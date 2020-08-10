import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { useForm } from "react-hook-form";
import MUIDataTable from "mui-datatables";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


import { useQuery } from "@apollo/react-hooks";

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));


export default function EntityEditNetworkMembership({ entryId }) {
  //const [responsive, setResponsive] = useState("vertical");
  //const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  //const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  
  const classes = useStyles();


// edit function start
const [open, setOpen] = React.useState(false);
const [scroll, setScroll] = React.useState('paper');


const handleClose = () => {
  setOpen(false);
};

function handleActionButton(action, dataIndex, rowIndex ) {
  console.log("action", action, " dataIndex=", dataIndex, " rowIndex=", rowIndex);
  setOpen(true);
  setScroll("paper");


}


// edit function end

  const columns = [
    {
      name: "networkId",
      label: "networkId",
      options: {
        display: false
      }
    },
    {
      name: "netMemberId",
      label: "netMemberId",
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
      }
    },
    {
      name: "networkDisplayName",
      label: "Network",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "statusDate",
      label: "statusDate",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: dataIndex => {
          let val = "udef";
          switch(this.state.data[dataIndex].status) {
            case "Applied":
                val = this.state.data[dataIndex].appliedDate;
                break;            
            case "Member":
                val = this.state.data[dataIndex].approvedDate;
                break;
            case "Resigned":   
              val = this.state.data[dataIndex].resignedDate;
              break;
          default:
              val = "--"
              break;
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
          let val = "udef";
          switch(this.state.data[dataIndex].status) {
            case "Applied":
                val = this.state.data[dataIndex].appliedBy;
                break;            
            case "Member":
                val = this.state.data[dataIndex].approvedBy;
                break;
            case "Resigned":   
              val = this.state.data[dataIndex].resignedBy;
              break;
          default:
              val = "--"
              break;
          }
          return val;

        }
      }
    },
    {
      name: "Action",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          let val = "udef";
          switch(this.state.data[dataIndex].status) {
            case "Applied":
                val = "Approve"
                break;            
            case "Member":
                val = "Resign"
                break;
            case "Resigned":   
              val = "Reapply";
              break;
            default:
              val = "Apply";
              break;
          }
          //            <button onClick={() => window.alert(`Clicked ${val} for row ${rowIndex} with dataIndex of ${dataIndex} `)}>
          //handleActionButton(val, dataIndex, rowIndex ) 
          return (
            <button onClick={() => handleActionButton(val, dataIndex, rowIndex ) }>
              {val} 
            </button>
          );
        }
      }
    }

  ];

//dummy data
  const entityCategoryAnswers = [
    {
      "networkId": "5ee213e4a31f1b832b12bc81",
      "networkIdName": "sbn",
      "networkDisplayName": "Smarte Byer Norge",
      "networkSlogan": "Smartbynettverk for alle",
      "networkUrl": "http://www.smartebyernorge.no",
      "netMemberId": "5eea060dc0c8c0809b8122af",
      "status": "Member",
      "approvedDate": "2020-07-01",
      "approvedBy": "terje",
      "appliedDate": "2020-06-30",
      "appliedBy": "nk brreg",
      "text": "Net:sbn, Org:bronnoysundregistrene, Source:terje2",
      "resignedDate": null,
      "resignedBy": null,
      "sort": 1
    },
    {
      "networkId": "5ee2198da31f1b832b12bca2",
      "networkIdName": "cor",
      "networkDisplayName": "Core dev network",
      "networkSlogan":  "demo development network",
      "networkUrl": "http://www.norkor.no",
      "netMemberId": "5f2168858559cbcdd7ec163f",
      "status": "Applied",
      "approvedDate": null,
      "approvedBy": null,
      "appliedDate": "2020-07-01",
      "appliedBy": "terje manuellt",
      "text": "brreg to cor network",
      "resignedDate": null,
      "resignedBy": null,
      "sort": 2
    },
    {
      "networkId": "5ee23ee289a7d3095dfad68b",
      "networkIdName": "gba",
      "networkDisplayName": "Grønn Byggallianse",
      "networkSlogan": "Vi jobber for bærekraft som det selvfølgelige valget",
      "networkUrl": "https://byggalliansen.no/",
      "netMemberId": "5f216aca8559cbcdd7ec1640",
      "status": "Resigned",
      "approvedDate": "2020-07-01",
      "approvedBy": "godkjennt av ter",
      "appliedDate": "2020-04-01",
      "appliedBy": "terje i strapi søkte",
      "text": "brreg to green",
      "resignedDate": "2020-07-28",
      "resignedBy": "utmelt  av ter",
      "sort": 3
    },
    {
      "networkId": "5f2185328559cbcdd7ec1641",
      "networkIdName": "kystrv",
      "networkDisplayName": "Kystriksveien",
      "networkSlogan": "Verdens vakreste reiserute",
      "networkUrl": "https://www.kystriksveien.no/",
      "status": "Can apply",
      "sort": 5
    },
    {
      "networkId": "5f2811d344c290e895f0003d",
      "networkIdName": "inthub",
      "networkDisplayName": "Oslo International Hub",
      "networkSlogan": "Oslo International Hub",
      "networkUrl": "https://www.kystriksveien.no/",
      "status": "Invited",
      "sort": 4
    }
  ];

  this.state = {
    data: entityCategoryAnswers
  };


  const options = {
    sortOrder: {
      name: 'sort',
      direction: 'asc'
    }, 

    download: false,
    filter: false,
    pagination: false,
    print: false,
    search: false,
    viewColumns: false,
    selectableRows: "none",
    responsive:"standard",
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    isRowExpandable: (dataIndex, expandedRows) => {
      // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
      if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0) return false;
      return true;
    },
    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1;
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>
          <a target="_blank" href={this.state.data[rowMeta.dataIndex].networkUrl}>{this.state.data[rowMeta.dataIndex].networkDisplayName}</a> Slogan :
            {this.state.data[rowMeta.dataIndex].networkSlogan}<br/>
            Applied : {this.state.data[rowMeta.dataIndex].appliedDate} by: {this.state.data[rowMeta.dataIndex].appliedBy} <br/>
            Approved: {this.state.data[rowMeta.dataIndex].approvedDate} by: {this.state.data[rowMeta.dataIndex].approvedBy} <br/>
            Resigned: {this.state.data[rowMeta.dataIndex].resignedDate} by: {this.state.data[rowMeta.dataIndex].resignedBy} <br/>
            Comment : {this.state.data[rowMeta.dataIndex].text}            
          </TableCell>
        </TableRow>
      );
    }
      
  };



  return (
    <div className={classes.root}>
    
      <MUIDataTable
        title={"Network membership"}
        data={netMemberOrgs}
        columns={columns}
        options={options}
      />

    

    <Dialog 
        fullWidth = "true" 
        open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can edit the net
          </DialogContentText>


         hei er
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>




    </div>
  );
}
