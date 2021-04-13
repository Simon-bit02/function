import React, {
  useState,
  useReducer,
  useMemo,
  useEffect,
  useLayoutEffect,
  useContext,
  useCallback,
} from 'react';
import './App.css';
import faker, { date } from 'faker';
import _ from 'lodash/fp';
//import classNames from 'classnames';
import {
  Button,
  Intent,
  Spinner,
  Navbar,
  Alignment,
  InputGroup,
  TextArea,
  FileInput,
  Toast,
  Toaster,
  Icon,
  ITagInputProps,
  TagInput,
  Menu,
  MenuItem,
} from '@blueprintjs/core';
import { IconName, IconNames } from '@blueprintjs/icons';
import {
  DateInput,
  IDateFormatProps,
  IDateInputProps,
} from '@blueprintjs/datetime';
import { random } from 'lodash';

function App() {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>
              Faketube
              <Icon className="mx-1" icon="video" color="red" />
            </Navbar.Heading>
            <Navbar.Divider />
            <Menu large={false}>
              <MenuItem icon="menu">
                <MenuItem text="Impostazioni" icon="cog" />
                <MenuItem text="Account" icon="user" />
                <MenuItem text="Esci dal tuo Account" icon="log-out" />
              </MenuItem>
            </Menu>
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="mobile-video" text="New" />
            <input
              className="bp3-input m-2"
              placeholder="Search videos"
              type="Search"
            />
          </Navbar.Group>
        </Navbar>
      </div>
      <div className="py-9 px-4 flex-col">
        <label>
          Upload Video
          <InputGroup className="max-w-md" placeholder="add title"></InputGroup>
        </label>
        <TextArea
          className="my-6"
          placeholder="add comments"
          large={true}
        ></TextArea>
      </div>
      <div className="px-4">
        <FileInput
          className=""
          disabled={false}
          text="Choose file..."
        ></FileInput>
        <Button className="mx-5" disabled={true} text="Upload file" />
      </div>
      <div className="py-9 px-4">
        <label>
          Seleziona la data
          <DateInput
            placeholder="m/d/Y"
            defaultValue={new Date()}
            parseDate={(str) => new Date(str)}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
