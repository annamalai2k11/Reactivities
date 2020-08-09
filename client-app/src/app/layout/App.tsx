import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';

const App = () => {
  const [activities, setActivity] = useState<IActivity[]>([]);
  const [selectedActivity, setselectedActivity] = useState<IActivity | null>(
    null
  );
  const [editMode, seteditMode] = useState(false);

  const handleActivity = (id: string) => {
    setselectedActivity(activities.filter((a) => a.id === id)[0]);
    seteditMode(false);
  };

  const openCreateActivityForm = () => {
    setselectedActivity(null);
    seteditMode(true);
  };

  const handleCreateActivity = (activity: IActivity) => {
    setActivity([...activities, activity]);
    setselectedActivity(activity);
    seteditMode(false);
  };

  const handleEditActivity = (activity: IActivity) => {
    setActivity([...activities.filter((a) => a.id !== activity.id), activity]);
    setselectedActivity(activity);
    seteditMode(false);
  };

  const handledeleteActivity = (id: string) => {
    setActivity([...activities.filter((a) => a.id !== id)]);
  };

  useEffect(() => {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        let activities: IActivity[] = [];
        response.data.forEach((activity) => {
          activity.date = activity.date.split('.')[0];
          activities.push(activity);
        });
        setActivity(activities);
      });
  }, []);

  return (
    <Fragment>
      <NavBar createForm={openCreateActivityForm} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          editMode={editMode}
          seteditMode={seteditMode}
          selectActivity={handleActivity}
          selectedActivity={selectedActivity}
          setselectedActivity={setselectedActivity}
          createActivity={handleCreateActivity}
          editActivity={handleEditActivity}
          deleteActivity={handledeleteActivity}
        />
      </Container>
    </Fragment>
  );
};

export default App;
