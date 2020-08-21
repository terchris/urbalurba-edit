import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import Typography from "@material-ui/core/Typography";
import CategoryItemListItemMultiple from "./CategoryItemListItemMultiple";

import CategoryItemListItem from "./CategoryItemListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

var data = {
  categories: [
    {
      id: "5f325890203f6aa19031fe0e",
      idName: "orgtype",
      displayName: "Organisasjonstype",
      summary: "Types of organizations",
      categoryType: "single",
      image: {
        icon: {
          url: "http://bucket.urbalurba.com/cat/orgtype/orgtype-logo-small.jpg"
        }
      },
      categoryitems: [
        {
          id: "5f325890203f6aa19031fe19",
          idName: "private",
          displayName: "Private bedrifter",
          summary: "Private bedrifter",
          description: "Private bedrifter",
          image: {
            icon: {
              url:
                "http://bucket.urbalurba.com/cat/orgtype/orgtype-priv-small.jpg"
            }
          }
        },
        {
          id: "5f325890203f6aa19031fe24",
          idName: "municipality",
          displayName: "Kommune",
          summary: "Kommuner og kommunale foretak",
          description: "Kommuner og kommunale foretak",
          image: {
            icon: "http://bucket.urbalurba.com/cat/sdg/sdg-icon-1.png"
          }
        },
        {
          id: "5f325890203f6aa19031fe2f",
          idName: "government",
          displayName: "Statlig",
          summary: "Statlige organisasjoner",
          description: "Statlige organisasjoner",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/orgtype/orgtype-gov-small.jpg"
          }
        },
        {
          id: "5f325890203f6aa19031fe3a",
          idName: "association",
          displayName: "Organisasjoner",
          summary: "Organisasjoner",
          description: "Organisasjoner",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/orgtype/orgtype-assoc-small.jpg"
          }
        },
        {
          id: "5f325890203f6aa19031fe45",
          idName: "civil-society-ngo",
          displayName: "Frivillige organisasjoner",
          summary: "Frivillige organisasjoner",
          description: "Frivillige organisasjoner",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/orgtype/orgtype-civil-small.jpg"
          }
        },
        {
          id: "5f325890203f6aa19031fe50",
          idName: "academia",
          displayName: "Akademia",
          summary: "Akademia",
          description: "Akademia",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/orgtype/orgtype-acad-small.jpg"
          }
        },
        {
          id: "5f325891203f6aa19031fe5b",
          idName: "research",
          displayName: "Forskning",
          summary: "Forskning",
          description: "Forskning",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/orgtype/orgtype-research-small.jpg"
          }
        }
      ]
    }
  ],
  entityCategoryAnswers: [
    {
      id: "5f325a0e203f6aa1903207ea",
      text: "Debug: private<-orgtype<-abax",
      entity_category: {
        id: "5f325a0e203f6aa1903207e9",
        category: {
          idName: "orgtype"
        }
      },
      categoryitem: {
        id: "5f325890203f6aa19031fe19",
        idName: "private"
      }
    }
  ]
};

export default function CategoryItemList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  var category = data.categories[0];

  return (
    <div>
      <Typography variant="h1">{category.displayName}</Typography>
      <Typography variant="h2">{category.summary}</Typography>
      <Typography variant="h3">{category.categoryType}</Typography>

      <List>
        {category.categoryitems.map((currentCategory) => (
          <CategoryItemListItem categoryitem={currentCategory} />
        ))}
      </List>
    </div>
    /*
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
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
      })}
    </List>
*/
  );
}
