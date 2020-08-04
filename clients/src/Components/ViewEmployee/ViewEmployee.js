import React, { Component } from 'react'
import axios from 'axios'
import styles from '../../utilities/view.css'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { NavLink }  from 'react-router-dom';

class ViewEmployee extends Component {

  constructor(props) {
    super(props)

    this.state = {
      obj: {},
      expanded: false
    }
  }

  componentDidMount() {
    document.title = "Employee View"
    const id = this.props.id

    axios.get(`http://localhost:5000/api/viewEmp/${id}`)
      .then(res => {
        this.setState({
          obj: res.data
        })
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

      console.log("User Object ",this.state.obj);
  }

  render() {
    let obj = this.state.obj
    const id = this.props.id


 

    const deleteEmployee = (id) => {
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
      

     window.location = '/';
    }


    const useStyles = withStyles((theme) => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },
        papercss : {
          color: '#fff',
          border: '1px solid'
        },
        navLinkcss : {
          textDecoration: 'none'
        }

      },
    }));

    const classes = useStyles;
    return (
        
      <div className={classes.root}>
        <img src={obj.photo} alt="user image" width="50%" ></img>
        <h1>Hey {obj.firstname} !</h1>

      {/* personal Details */}
      <Paper elevation={10}>
        
      <h2 className={styles.personal}>Personal Details :</h2>
       <div> <table style={{ marginLeft: '25%' }}>
              <tbody>
                <tr>
                  <td style={{ width: '60%' }}><h3 className={styles.pdetails}>Name : </h3></td>
                  <td style={{ width: '60%' }}><h3 className={styles.pdetails}> {obj.firstname} {obj.lastname}</h3></td>
                </tr>
                <tr>
                  <td style={{ width: '50%' }}><h3 className={styles.pdetails}>Email : </h3></td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> {obj.email}</h3></td>
                </tr>
                <tr>
                  <td style={{ width: '50%' }}><h3 className={styles.pdetails}>Phone Number : </h3></td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> {obj.phonenumber}</h3></td>
                </tr>
                <tr>
                  <td style={{ width: '50%' }}><h3 className={styles.pdetails}>Current Address : </h3></td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> {obj.currentaddress}</h3></td>
                </tr>
                <tr>
                  <td style={{ width: '50%' }}><h3 className={styles.pdetails}>Permanent Address : </h3></td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> {obj.permanentaddress}</h3></td>
                </tr>
              </tbody>
            </table></div>

        
      </Paper>


      {/* educational details */}
      <Paper elevation={10}>
      <h2 className={styles.personal}>Educational Details :</h2>
            <div style={{ marginLeft: '40%' }}>
              {obj?.edu_details?.map((row, index) => {
                return (<div key={index}>
                  <h2 className={styles.personal}>Education : {index + 1}</h2>
                  <h3 className={styles.pdetails}>Course : {row.course}</h3>
                  <h3 className={styles.pdetails}>Institution : {row.institution}</h3>
                  <h3 className={styles.pdetails}>Year : {row.year}</h3>
                  <h3 className={styles.pdetails}>Percentage(%) : {row.percentage}</h3>
                  <br />
                </div>
                )
              })}
            </div>

      </Paper>
      
      {/* Professional details  */}
      <Paper elevation={10}>
      <h2 className={styles.personal}>Professional Details :</h2>
      <div style={{ marginLeft: '40%' }}>
      {obj?.prof_details?.map((empDetails, i) => {
                return (<div key={i}>
                  <h2 className={styles.personal}>Job : {i + 1}</h2>
                  <h3 className={styles.pdetails}>Company : {empDetails.companyname}</h3>
                  <h3 className={styles.pdetails}>Designation : {empDetails.designation}</h3>
                  <h3 className={styles.pdetails}>From : {empDetails.from.substr(0, 10)}</h3>
                  <h3 className={styles.pdetails}>To : {empDetails.to.substr(0, 10)}</h3>
                  <br />
                </div>
                )
              })}
              </div>
      </Paper>

              {/* hobbies Details */}


      <Paper elevation={10}>
      <h2 className={styles.personal}>Hobbies :</h2>

      <table style={{ marginLeft: '40%' }}>
              <tbody>
                <tr>
                  <td >LinkedIn</td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}>Linkedin : {obj.linkedin}</h3></td>
                </tr>
                <tr>
                  <td >Github</td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> Github : {obj.github}</h3></td>
                </tr>
                <tr>
                  <td >Facebook</td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> Facebook : {obj.facebook}</h3></td>
                </tr>
                <tr>
                  <td >Hobbies</td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> Hobbies : {obj.hobbies}</h3></td>
                </tr>
              </tbody>
            </table>


      </Paper>
      
      <Button type="button" variant="contained" onClick={() => { deleteEmployee(id) }}><DeleteIcon/ >Delete </Button><br />
      <Button type="button" variant="contained" ><ArrowBackOutlinedIcon /><NavLink to="/">  Back to list </NavLink></Button>



    </div>
   
       
    )
  }
}

export default ViewEmployee
