import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface IProps {
  activity: IActivity;
  editMode: boolean;
  seteditMode: (editMode: boolean) => void;
  setselectedActivity: (activity: IActivity | null) => void;
}

export const ActivityDetails: React.FC<IProps> = ({ activity, seteditMode, setselectedActivity }) => {
  return (
    <Card fluid>
      <Image src={`assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button basic color="blue" content="Edit" onClick={() => seteditMode(true)} />
          <Button basic color="grey" content="Cancel" onClick = {() => setselectedActivity(null)} />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
