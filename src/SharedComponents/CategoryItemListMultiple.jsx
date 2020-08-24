import React from "react";

import { useForm, Controller } from "react-hook-form";

import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

var defaultValues = {};

var dummyData = {
  categories: [
    {
      id: "5f325891203f6aa19031fe66",
      idName: "segment",
      displayName: "Segmenter",
      summary: "The different segments that are adressed",
      categoryType: "multiple",
      image: {
        icon: "http://bucket.urbalurba.com/cat/segment/segment-logo-small.png"
      },
      categoryitems: [
        {
          id: "5f325891203f6aa19031fe71",
          idName: "energy",
          displayName: "Energi",
          summary: "Energi",
          description: "Løsninger og virksomheter innen energi",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-energy-small.svg"
          }
        },
        {
          id: "5f325891203f6aa19031fe7c",
          idName: "water",
          displayName: "Water",
          summary: "Løsninger for håndtering av vann",
          description: "Løsninger for håndtering av vann",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-water-small.svg"
          }
        },
        {
          id: "5f325891203f6aa19031fe87",
          idName: "air",
          displayName: "Air",
          summary: "Luft og luftkvalitet",
          description: "Luft og luftkvalitet",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-air-small.svg"
          }
        },
        {
          id: "5f325891203f6aa19031fe92",
          idName: "mobility",
          displayName: "Mobilitet",
          summary: "Mobilitetsløsninger",
          description: "Løsninger for transport av mennesker og varer",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-mobility-small.svg"
          }
        },
        {
          id: "5f325891203f6aa19031fe9d",
          idName: "health",
          displayName: "Health",
          summary: "Helse",
          description: "Helse",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-health-small.svg"
          }
        },
        {
          id: "5f325891203f6aa19031fea8",
          idName: "waste",
          displayName: "Waste",
          summary: "Avfallshåndtering",
          description: "Løsninger og virksomheter innen håndtering av avfall",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-waste-small.svg"
          }
        },
        {
          id: "5f325891203f6aa19031feb3",
          idName: "telecom-and-software",
          displayName: "Telecom and Software",
          summary: "Telekommunikasjon og programvare",
          description: "Telekommunikasjon og programvare",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-telco_soft-small.svg"
          }
        },
        {
          id: "5f325892203f6aa19031febe",
          idName: "food-and-agriculture",
          displayName: "Food and Agriculture",
          summary: "Mat og landbruk",
          description: "Mat og landbruk",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-food_agri-small.svg"
          }
        },
        {
          id: "5f325892203f6aa19031fec9",
          idName: "tourism",
          displayName: "Tourism",
          summary: "Turisme",
          description: "Turisme",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-tourism-small.svg"
          }
        },
        {
          id: "5f325892203f6aa19031fed4",
          idName: "building-and-construction",
          displayName: "Building and Construction",
          summary: "Building and Construction",
          description: "Building and Construction",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-build_constr-small.svg"
          }
        },
        {
          id: "5f325892203f6aa19031fedf",
          idName: "security",
          displayName: "Security",
          summary: "Security",
          description: "Security",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-security-small.svg"
          }
        },
        {
          id: "5f325892203f6aa19031feea",
          idName: "education",
          displayName: "Education",
          summary: "Education",
          description: "Education",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-education-small.svg"
          }
        },
        {
          id: "5f325892203f6aa19031fef5",
          idName: "bio-and-natural-resources",
          displayName: "Bio and Natural Resources",
          summary: "Bio and Natural Resources",
          description: "Bio and Natural Resources",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-bio_nat-small.svg"
          }
        },
        {
          id: "5f325892203f6aa19031ff00",
          idName: "finance",
          displayName: "Finance",
          summary: "Finance",
          description: "Finance",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-finance-small.svg"
          }
        },
        {
          id: "5f325892203f6aa19031ff0b",
          idName: "ocean-industries",
          displayName: "Ocean Industries",
          summary: "Ocean Industries",
          description: "Ocean Industries",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-ocean-small.svg"
          }
        },
        {
          id: "5f325892203f6aa19031ff16",
          idName: "trade",
          displayName: "Trade",
          summary: "Trade",
          description: "Trade",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-trade-small.svg"
          }
        },
        {
          id: "5f325892203f6aa19031ff21",
          idName: "hospitality",
          displayName: "Hospitality",
          summary: "Hospitality",
          description: "Hospitality",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-hospitality-small.svg"
          }
        },
        {
          id: "5f325893203f6aa19031ff2c",
          idName: "sport-and-recreation",
          displayName: "Sport and recreation",
          summary: "Sport and recreation",
          description: "Sport and recreation",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-sport_rec-small.svg"
          }
        },
        {
          id: "5f325893203f6aa19031ff37",
          idName: "consulting",
          displayName: "Consulting",
          summary: "Consulting",
          description: "Consulting",
          image: {
            icon:
              "http://bucket.urbalurba.com/cat/segment/segment-consulting-small.svg"
          }
        }
      ]
    }
  ],
  entityCategoryAnswers: [
    {
      id: "5f325a0f203f6aa1903207f1",
      text: "Debug: mobility<-segment<-abax",
      categoryitem: {
        id: "5f325891203f6aa19031fe92",
        idName: "mobility"
      }
    },
    {
      id: "5f325a0f203f6aa1903207f2",
      text: "Debug: telecom-and-software<-segment<-abax",
      categoryitem: {
        id: "5f325891203f6aa19031feb3",
        idName: "telecom-and-software"
      }
    }
  ]
};

/*** setDefaultValues
 * takes the full list of possible answers and the list of ansers 
 * returns  an object where every answer (idName) has a value true or false. 
 eg newDefaultValues ={
  energy: true,
  water: false
}
*/
function setDefaultValues(categoryitems, categoryAnswers) {
  let newDefaultValues = {};

  for (let i = 0; i < categoryitems.length; i++) {
    let found = categoryAnswers.find(
      (item) => item.categoryitem.idName === categoryitems[i].idName
    );
    if (found) newDefaultValues[categoryitems[i].idName] = true;
    else newDefaultValues[categoryitems[i].idName] = false;
  }
  return newDefaultValues;
}

/*** setDefaultValues
 * takes the full list of possible answers (categoryitems) and the list of ansers that was there before they was displayo n the screen (categoryAnswers) 
 * the object inputAnswers contains the answers after the user has changed some of them.
 * This function figures out what has changed and returns an array of objects that is marked 
 * updated, deleted, added for each of the possible answers

 * returns  an array (newAnswersArray) that can be used to update the database.

newCategoryAnswer =
{
"action": "unchanged" // "create", "delete" or "update"
"entityCategoryID" : "5f325a0f203f6aa1903207f0", //if the usr has answers in the category
"idName": //just for debugging
"text": "what to write here",
newEntityCategoryAnswers: [
{
"action": "unchanged" // "create", "delete" or "update"
idName: "mobility", //just for debugging
"text": "what to write here",
"entityCategoryAnswerID":  //for existing answers a ID for new its empty
"categoryID" : "5f325a0f203f6aa1903207f0", //if the usr has answers in the category
"categoryitemID": "5f325891203f6aa19031fe92", 
}
]
}

*/
function readDefaultValues(
  categoryID,
  entityCategoryID,
  categoryitems,
  categoryAnswers,
  inputAnswers
) {
  let newCategoryAnswer = {
    action: "dont know", // "unchanged", "create", "delete" or "update"
    entityCategoryID: entityCategoryID, //if the usr has answers in the category
    idName: "i dont have it", //just for debugging
    text: "what to write here",
    newEntityCategoryAnswers: []
  };

  let newEntityCategoryAnswerRecord = {};

  for (let i = 0; i < categoryitems.length; i++) {
    // loop trugh all possible answers
    newEntityCategoryAnswerRecord = {
      action: "dont know", // "unchanged", "create", "delete" or "update"
      idName: categoryitems[i].idName, //just for debugging
      text: "dont know",
      entityCategoryAnswerID: "dont know", //for existing answers a ID for new its empty
      categoryID: "dont know", //if the usr has answers in the category
      categoryitemID: "dont know"
    };

    let alreadyChecked = categoryAnswers.find(
      (item) => item.categoryitem.idName === categoryitems[i].idName
    );

    if (categoryitems[i].idName === inputAnswers[categoryitems[i].idName]) {
      // if the checkbox is checked

      //OK it is checked. Now lets figure out if it already was checked or if it is a new checked item
      if (alreadyChecked) { // yes - it was already checked
        newEntityCategoryAnswerRecord.action = "unchanged";
        newEntityCategoryAnswerRecord.entityCategoryAnswerID = alreadyChecked.id; //for existing answers a ID for new its empty
        newEntityCategoryAnswerRecord.text = alreadyChecked.text; //this has no been changed in this input        
        newEntityCategoryAnswerRecord.categoryID = categoryID; //if the usr has answers in the category
        newEntityCategoryAnswerRecord.categoryitemID = alreadyChecked.categoryitem.id;
        newEntityCategoryAnswerRecord.idName = alreadyChecked.categoryitem.idName;        
      } else {
        newEntityCategoryAnswerRecord.action = "create";
        newEntityCategoryAnswerRecord.entityCategoryAnswerID = "to be created"; //for existing answers a ID for new its empty
        newEntityCategoryAnswerRecord.text = "added by USER "; //TODO: find better debugging txt
        newEntityCategoryAnswerRecord.categoryID = categoryID; //if the usr has answers in the category
        newEntityCategoryAnswerRecord.categoryitemID = categoryitems[i].id;
        newEntityCategoryAnswerRecord.idName = categoryitems[i].idName;
      }
    } else {
      // it is not checked. if it was checked before we need to delete that record
      if (alreadyChecked) { // yes - it was already checked
        newEntityCategoryAnswerRecord.action = "delete";
        newEntityCategoryAnswerRecord.entityCategoryAnswerID = alreadyChecked.id; //for existing answers a ID for new its empty
        newEntityCategoryAnswerRecord.text = alreadyChecked.text; //this has no been changed in this input        
        newEntityCategoryAnswerRecord.categoryID = categoryID; //if the usr has answers in the category
        newEntityCategoryAnswerRecord.categoryitemID = alreadyChecked.categoryitem.id;
        newEntityCategoryAnswerRecord.idName = alreadyChecked.categoryitem.idName;        
      } else {
        // it was not checked and it is not checked now. so we will do nothing
      }
    }
  return newDefaultValues;
}

export default function CategoryItemListMultiple() {
  var category = dummyData.categories[0];
  var entityCategoryAnswers = dummyData.entityCategoryAnswers;

  defaultValues = setDefaultValues(
    category.categoryitems,
    entityCategoryAnswers
  );

  const { handleSubmit, control } = useForm({ defaultValues });
  //const [data, setData] = useState(null);

  const classes = useStyles();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form className="form">
      <div className="container">
        <section>
          <Typography variant="h1">{category.displayName}</Typography>
          <Typography variant="h2">{category.summary}</Typography>
          <Typography variant="h3">{category.categoryType}</Typography>

          <label>MUI Checkbox NOW9!!!</label>
          <List dense className={classes.root}>
            {category.categoryitems.map((currentCategory) => {
              return (
                <ListItem key={currentCategory.idName}>
                  <ListItemAvatar>
                    <Avatar
                      alt={currentCategory.displayName}
                      src={currentCategory.image.icon}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    id={currentCategory.idName}
                    primary={currentCategory.displayName}
                    secondary={currentCategory.summary}
                  />
                  <ListItemSecondaryAction>
                    <Controller
                      as={Checkbox}
                      name={`${currentCategory.idName}`}
                      type="checkbox"
                      control={control}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </section>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit(onSubmit)}
      >
        Lagre
      </Button>
    </form>
  );
}
