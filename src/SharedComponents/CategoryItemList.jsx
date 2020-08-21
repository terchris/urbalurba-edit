import React from 'react';
import Link from 'next/link';



import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';


import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function CategoryItemList({ categoryItem, parentIdName, network_root, linking }) {
  const classes = useStyles();

  if (!network_root) {
    network_root = "";
  }



var url = network_root + linking.url + parentIdName + "/" + categoryItem.idName;
var href = network_root + linking.href;

  const noLogoImage = "http://bucket.urbalurba.com/logo/abax.jpg";
  let logoImage = noLogoImage;
  if (categoryItem.image.icon) {
    logoImage = categoryItem.image.icon;
  }


  return (
    <ListItem key={categoryItem.idName} button>
    <ListItemAvatar>
      <Avatar
        alt={categoryItem.displayName}
        src={logoImage}
      />
    </ListItemAvatar>
    <ListItemText id={categoryItem.idName} primary={categoryItem.displayName} secondary={categoryItem.summary } />
    <ListItemSecondaryAction>
    <DeleteIcon />
    </ListItemSecondaryAction>
  </ListItem>




  );
}

