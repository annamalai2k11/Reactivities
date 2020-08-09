import React from 'react';
import { Grid } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { ActivityList } from './ActivityList';
import { ActivityDetails } from '../details/ActivityDetails';
import { ActivityForm } from '../form/ActivityForm';

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity | null;
  editMode: boolean;
  seteditMode: (editMode: boolean) => void;
  setselectedActivity: (activity: IActivity | null) => void;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  deleteActivity: (id: string) => void;
}

export const ActivityDashboard: React.FC<IProps> = ({
  activities,
  setselectedActivity,
  selectActivity,
  selectedActivity,
  editMode,
  seteditMode,
  createActivity,
  editActivity,
  deleteActivity
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetails
            setselectedActivity={setselectedActivity}
            activity={selectedActivity}
            editMode={editMode}
            seteditMode={seteditMode}
          />
        )}
        {editMode && (
          <ActivityForm
            key = {selectedActivity && selectedActivity.id || 0}
            setEditMode={seteditMode}
            activity={selectedActivity!}
            createActivity={createActivity}
            editActivity={editActivity}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};
