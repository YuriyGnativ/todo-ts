import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Box
} from '@mui/material';

import CommentIcon from '@mui/icons-material/Comment';
import { ITask } from '../../lib/types';

const ChoresList = (props: any) => {
  const { mockData } = props;

  return (
    <List>
      {mockData.map(({ title, status }: ITask, index: number) => {
        return (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton key={index} role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  defaultChecked={status === 'done'}
                  // checked={}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ChoresList;
