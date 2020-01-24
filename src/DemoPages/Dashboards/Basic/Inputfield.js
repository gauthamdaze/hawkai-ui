import React from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
require('../Basic/inputfield.css');
const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
    "& .MuiOutlinedInput-root": {
      padding: 2,
      outline: 0
    },
    "& .MuiChip-root":{
      height: 26
    },
    "& > * + *": {
      marginTop: theme.spacing(4),
    }
  }
}));

export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={columns}
        getOptionLabel={option => option.title}
        filterSelectedOptions
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Select Column Headers"
            placeholder="Column Headers"
            fullWidth 
          />
        )}
      />
    </div>
  );
}

const columns = [
   { title : "store_num"},
   { title : "openDate"},
   { title : "date_uper"},
   { title : "conversion"},
   { title : "st"},
   { title : "county"},
   { title : "streerAdd"},
   { title : "strCity"},
   { title : "strState"},
   { title : "zipCode"},
   { title :"type_store"}
  ]

