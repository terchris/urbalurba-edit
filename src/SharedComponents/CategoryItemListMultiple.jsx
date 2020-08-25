import React from "react";

import { useForm, Controller } from "react-hook-form";

import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
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
      },
      entity_category: {
        id: "5f325a0f203f6aa1903207f0"
      }
    },
    {
      id: "5f325a0f203f6aa1903207f2",
      text: "Debug: telecom-and-software<-segment<-abax",
      categoryitem: {
        id: "5f325891203f6aa19031feb3",
        idName: "telecom-and-software"
      },
      entity_category: {
        id: "5f325a0f203f6aa1903207f0"
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
function setDefaultValues(categoryitems, entityCategoryAnswers) {
  let newDefaultValues = {};

  for (let i = 0; i < categoryitems.length; i++) {
    let found = entityCategoryAnswers.find(
      (item) => item.categoryitem.idName === categoryitems[i].idName
    );
    if (found) {
      newDefaultValues[categoryitems[i].idName] = true;
      let textAttribute = found.categoryitem.idName + "-text";
      newDefaultValues[textAttribute] = found.text;
      //console.log("textAttribute: ", textAttribute, "newDefaultValues[textAttribute]",newDefaultValues[textAttribute] );
    } else newDefaultValues[categoryitems[i].idName] = false;
  }
  return newDefaultValues;
}

/*** setDefaultValues
 * takes the full list of possible answers (categoryitems) and the list of ansers that was there before they was displayo n the screen (entityCategoryAnswers) 
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
  categoryitems,
  entityCategoryAnswers,
  inputAnswers
) {
  let newEntityCategoryRecord = {
    action: "dont know", // "not selected", "create", "delete" or "update"
    entityCategoryID: "need to find it", //if the usr has answers in the category it must be created. otherwise we find it on one of the entityCategoryAnswers
    text: "what to write here",
    entityCategoryAnswers: []
  };
  // if the entity already has one or more answers in this category. then there is a entityCategory record
  // we look at the first answer (entityCategoryAnswers) that was there before editing to find the id of the entityCategory record
  if (entityCategoryAnswers) {
    //if there are answers
    if (entityCategoryAnswers.length > 0) {
      // there are at least one answer
      newEntityCategoryRecord.entityCategoryID =
        entityCategoryAnswers[0].entity_category.id;
    }
  }

  let newEntityCategoryAnswerRecord = {};

  for (let i = 0; i < categoryitems.length; i++) {
    // loop trugh all possible answers
    newEntityCategoryAnswerRecord = {
      action: "dont know", // "unchanged", "create", "delete" or "update"
      idName: categoryitems[i].idName, //just for debugging
      text: "dont know",
      entityCategoryAnswerID: "dont know", //for existing answers a ID for new its empty
      categoryID: "dont know", //if the usr has answers in the category
      categoryitemID: "dont know",
      entityCategoryID: newEntityCategoryRecord.entityCategoryID
    };

    // first figure out if this answer was already in the database before we enabeled editing
    let alreadyChecked = entityCategoryAnswers.find(
      (item) => item.categoryitem.idName === categoryitems[i].idName
    );

    // if the entity already has one or more answers in this category. then there is a entityCategory record
    //

    //console.log("idName:", categoryitems[i].idName);
    if (alreadyChecked)
      console.log("idName:", categoryitems[i].idName, " alreadyChecked: TRUE");
    else
      console.log("idName:", categoryitems[i].idName, " alreadyChecked: FALSE");
    console.log(
      "inputAnswers[categoryitems[i].idName]:",
      inputAnswers[categoryitems[i].idName]
    );

    if (inputAnswers[categoryitems[i].idName] && alreadyChecked) {
      // if the checkbox is checked and it was checked before editing
      console.log("idName:", categoryitems[i].idName, " ACTION unchanged");
      newEntityCategoryAnswerRecord.action = "unchanged";
      newEntityCategoryAnswerRecord.entityCategoryAnswerID = alreadyChecked.id; //for existing answers a ID for new its empty
      newEntityCategoryAnswerRecord.text = alreadyChecked.text; //this has no been changed in this input
      newEntityCategoryAnswerRecord.categoryID = categoryID; //if the usr has answers in the category
      newEntityCategoryAnswerRecord.categoryitemID =
        alreadyChecked.categoryitem.id;
      newEntityCategoryAnswerRecord.idName = alreadyChecked.categoryitem.idName;
    }

    if (inputAnswers[categoryitems[i].idName] && !alreadyChecked) {
      // if the checkbox is checked and it was NOT checked before editing
      console.log("idName:", categoryitems[i].idName, " ACTION create");
      newEntityCategoryAnswerRecord.action = "CREATE";
      newEntityCategoryAnswerRecord.entityCategoryAnswerID = "to be created"; //for existing answers a ID for new its empty
      newEntityCategoryAnswerRecord.text = "added by USER "; //TODO: find better debugging txt
      newEntityCategoryAnswerRecord.categoryID = categoryID; //if the usr has answers in the category
      newEntityCategoryAnswerRecord.categoryitemID = categoryitems[i].id;
      newEntityCategoryAnswerRecord.idName = categoryitems[i].idName;
    }
    if (!inputAnswers[categoryitems[i].idName] && alreadyChecked) {
      // it is not checked. if it was checked before we need to delete that record
      console.log("idName:", categoryitems[i].idName, " ACTION delete");
      newEntityCategoryAnswerRecord.action = "DELETE";
      newEntityCategoryAnswerRecord.entityCategoryAnswerID = alreadyChecked.id; //for existing answers a ID for new its empty
      newEntityCategoryAnswerRecord.text = alreadyChecked.text; //this has no been changed in this input
      newEntityCategoryAnswerRecord.categoryID = categoryID; //if the usr has answers in the category
      newEntityCategoryAnswerRecord.categoryitemID =
        alreadyChecked.categoryitem.id;
      newEntityCategoryAnswerRecord.idName = alreadyChecked.categoryitem.idName;
    }

    if (!inputAnswers[categoryitems[i].idName] && !alreadyChecked) {
      // it is not checked. if it was checked before we need to delete that record
      console.log("idName:", categoryitems[i].idName, " ACTION not selected");
      newEntityCategoryAnswerRecord.action = "not selected";
      newEntityCategoryAnswerRecord.entityCategoryAnswerID = "not selected";
      newEntityCategoryAnswerRecord.text = "not selected";
      newEntityCategoryAnswerRecord.categoryID = categoryID; //if the usr has answers in the category
      newEntityCategoryAnswerRecord.categoryitemID = categoryitems[i].id;
      newEntityCategoryAnswerRecord.idName = categoryitems[i].idName;
    }

    // now we have the record - lats add it to the array
    newEntityCategoryRecord.entityCategoryAnswers.push(
      newEntityCategoryAnswerRecord
    );
  } // end loop

  // now we need to fiure out if the relation between the entity and the category (entityCategory) must be CREATED, DELETED or is unchanged
  // if there was no entityCategoryAnswers and there now are one or more then a entityCategory must be CREATED first in order to add entityCategoryAnswers
  // if there was entityCategoryAnswers and there now are NONE then the entityCategory must be DELETED after deleting all entityCategoryAnswers

  let unchanged = newEntityCategoryRecord.entityCategoryAnswers.find(
    (item) => item.action === "unchanged"
  );
  console.log("unchanged:", JSON.stringify(unchanged));

  let created = newEntityCategoryRecord.entityCategoryAnswers.find(
    (item) => item.action === "CREATE"
  );
  console.log("created:", JSON.stringify(created));

  let deleted = newEntityCategoryRecord.entityCategoryAnswers.find(
    (item) => item.action === "DELETE"
  );
  console.log("deleted:", JSON.stringify(deleted));

  if (unchanged) {
    // there are answers that are unchanged
    newEntityCategoryRecord.action = "unchanged"; //then we can keep the record. no matter if thee are created and deleted answers
  }

  if (!unchanged && created && !deleted) {
    newEntityCategoryRecord.action = "CREATE"; // we have at least one new answer -> then we must create the record
  }

  if (!unchanged && !created && deleted) {
    newEntityCategoryRecord.action = "DELETE"; // no unchanged and no created answers, but at least one deleted. It means that there are no answers. so we must delete
  }

  if (!unchanged && !created && !deleted) {
    newEntityCategoryRecord.action = "not selected"; // nothing changed, created or deleted - that means that nothing is selected
  }

  return newEntityCategoryRecord;
}

export default function CategoryItemListMultiple() {
  var category = dummyData.categories[0];
  var entityCategoryAnswers = dummyData.entityCategoryAnswers;

  defaultValues = setDefaultValues(
    category.categoryitems,
    entityCategoryAnswers
  );

  //console.log("defaultValues:", JSON.stringify(defaultValues));

  const { handleSubmit, control } = useForm({ defaultValues });
  //const [data, setData] = useState(null);

  const classes = useStyles();

  const onSubmit = async (data) => {
    let newRecord = {};
    newRecord = readDefaultValues(
      category.id,
      category.categoryitems,
      entityCategoryAnswers,
      data
    );

    //console.log("data:", JSON.stringify(data));
    console.log("newRecord:", JSON.stringify(newRecord, null, 2));
  };

  return (
    <form className="form">
      <div className="container">
        <section>
          <Typography variant="h1">{category.displayName}</Typography>
          <Typography variant="h2">{category.summary}</Typography>
          <Typography variant="h3">{category.categoryType}</Typography>

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
                      name={`${currentCategory.idName}`}
                      control={control}
                      render={(props) => (
                        <Checkbox
                          onChange={(e) => props.onChange(e.target.checked)}
                          checked={props.value}
                        />
                      )}
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

/* ver 5.5.1
                  <ListItemSecondaryAction>
                    <Controller
                      as={Checkbox}
                      name={`${currentCategory.idName}`}
                      type="checkbox"
                      control={control}
                    />
                  </ListItemSecondaryAction>

*/

/* ver 6.5.1
<ListItemSecondaryAction>
        <Controller
          name={`${currentCategory.idName}`}
          control={control}
          render={(props) => (
            <Checkbox
              onChange={(e) => props.onChange(e.target.checked)}
              checked={props.value}
            />
          )}
        />
</ListItemSecondaryAction>


*/
