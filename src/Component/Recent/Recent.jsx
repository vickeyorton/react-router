import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  
}));

export default function OutlinedChips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      
      <Chip 
        avatar={<Avatar alt="Natacha" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg/1200px-Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg" />}
        label="Robert_Downey"
        onDelete={handleDelete}
        variant="outlined"
      />
      
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar>MV</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="https://www.biography.com/.image/t_share/MTU1MTM0NzA2NzQ3MTg4NDQw/chris-evans-arrives-at-the-los-angeles-premiere-of-captain-america-the-winter-soldier-held-at-the-el-capitan-theatre-on-march-13-2014-in-hollywood-california-photo-by-michael-tran_filmmagicjpg-square.jpg" />}
        label="Chris"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar>A</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar>I</Avatar>}
        label="Primary clickable"
        clickable
        color="secondary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg/1200px-Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg" />}
        label="Robert_Downey"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg" />}
        label="hemsworth"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Hugh_Jackman_by_Gage_Skidmore.jpg" />}
        label="Hugh_Jackman"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
    </div>
  );
}
