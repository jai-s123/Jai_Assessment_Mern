import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import empImg from './download.png';
import Typography from '@material-ui/core/Typography';





const StyledGrid = withStyles((theme) => ({
  item: {
    marginLeft: '16%'
  }
}))(Grid)





const delEmp = (id) => {
  if(window.confirm("Confirm Delete Data'")){
     axios.delete(`http://localhost:5000/api/deleteEmp/${id}`)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }else{
    console.log("Cancelled Delete Process");
  }
 

  window.location = "/"
}


const useStyles = makeStyles({
  root: {
    maxWidth: 900,
  },
  media: {
    height: 140,
  },
});


function List(props) {
  const classes = useStyles();
  const [list, setList] = useState([]);


  useEffect(() => {
    document.title = "Employee List"
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/employee")
      setList(res.data.emp)
        console.log(res.data.emp);
    }

    fetchData()
  }, []);

  return (
    <div>
      <br />
      <br />
      <React.Fragment>
        <StyledGrid item md={8}>
          
        {list.map((row, index) =>(
          <Card className={classes.root} key={index}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
          image={row.photo === undefined ? empImg : row.photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {row.firstname} {row.lastname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {row.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {row.phonenumber}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {row.currentaddress}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {row.permanentaddress}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => { delEmp(row.id) }}>
          Delete
        </Button>
        <Button size="small" color="primary">
        <NavLink to ={"/view/" + row.id}>More Info</NavLink>
          
        </Button>
      </CardActions>
    </Card>
        ))}
        </StyledGrid> 
      </React.Fragment>
        </div>)
}

export default List


















