import React from "react";
//import Link from 'next/link';



import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";




export default function CategoryItemListItemMultiple({categoryitem}) {
  
console.log(JSON.stringify(categoryitem));

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
      <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
      </ListItemSecondaryAction>
    </ListItem>
  );
}
