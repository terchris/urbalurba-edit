import React from "react";
//import Link from 'next/link';


import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Avatar from "@material-ui/core/Avatar";

import DeleteIcon from "@material-ui/icons/Delete";


export default function CategoryItemListItem({categoryitem}) {
  

  return (
    <ListItem key={categoryitem.idName} >
      <ListItemAvatar>
        <Avatar alt={categoryitem.displayName} src={categoryitem.image.icon} />
      </ListItemAvatar>
      <ListItemText
        id={categoryitem.idName}
        primary={categoryitem.displayName}
        secondary={categoryitem.summary}
      />
      <ListItemSecondaryAction>
        <DeleteIcon />
      </ListItemSecondaryAction>
    </ListItem>
  );
}
