/* eslint-disable */
import React from 'react';
import { Alert, Button, Divider, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import { database } from '../../misc/firebase';
import EditableInput from '../EditableInput';
import ProviderBlock from './ProviderBlock';

const DashBoard = ({ onSignOut }) => {
  const { profile } = useProfile();
  const onSave = async newData => {
    const userNicknameRef = database
      .ref(`/profiles/${profile.uid}`)
      .child('name');
    try {
      await userNicknameRef.set(newData);

      Alert.success('NickName has been Updated', 4000);
    } catch (error) {
      Alert.error(err.message, 4000);
    }
  };

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>DashBoard</Drawer.Title>
      </Drawer.Header>

      <Drawer.Body>
        <h3>Hey {profile.name}</h3>
        <ProviderBlock />
        <Divider />
        <EditableInput
          name="nickname"
          // initalValue={profile.name}
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Nickname</h6>}
        />
      </Drawer.Body>

      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          SignOut
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default DashBoard;
