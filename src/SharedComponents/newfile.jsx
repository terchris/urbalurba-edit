import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import Header from "./Header";

import { Checkbox, ThemeProvider, createMuiTheme } from "@material-ui/core";

import "./styles.css";
import ButtonsResult from "./ButtonsResult";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

let renderCount = 0;

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

var defaultValues = {};

var dummyData = {
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
    },
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

function App() {
  var category = dummyData.categories[1];
  var entityCategoryAnswers = dummyData.entityCategoryAnswers;
  
  defaultValues = setDefaultValues(
    category.categoryitems,
    entityCategoryAnswers
  );



  const { handleSubmit, reset, control } = useForm({ defaultValues });
  const [data, setData] = useState(null);
  renderCount++;

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit((data) => setData(data))} className="form">
        <Header renderCount={renderCount} />
        <div className="container">
          <section>
            <label>MUI Checkbox NOW5</label>
            <List dense>
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

        <ButtonsResult {...{ data, reset, defaultValues }} />
      </form>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

