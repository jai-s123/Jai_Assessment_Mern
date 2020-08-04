import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    alwayscenter: {
      textAlign: 'center'
    }
  }));
  
  function getSteps() {
    return ['Welcome Info', 'Create A Employee', 'Listing Data and Deleting Data'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return `Welcome To the Employee Details Page, Here we are Listing all the Employee Present in the Database
                We, Can see the Info of the User and Delete The user Details. Every Thing is been Stored in the database and all calls are done in database`;
      case 1:
        return 'Employee Add  Can be done easily , Just  go to Register and add a user details over there Note Every Data is Requried to be filled ';
      case 2:
        return `You Can watch the details of the user in the list moreover you can delete them if there are some errors`;
      default:
        return 'Unknown step';
    }
  }

const Info = () => {const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}


        <h1>
          FAQ
        </h1>
        <h4>How to Add a Image</h4>
        <p className={classes.alwayscenter}><strong>Solution 1: <i>To Add a image , user can use webserver to create a localstorage for that image directory</i></strong></p>
        <p className={classes.alwayscenter}><strong>Solution 2: <i>User Can add a image path link from web to add a image</i></strong></p>
      </div>
    );
}

export default Info;