// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import formatMessage from 'format-message';

import { StorageFolder } from '../../store/types';
import { LocationSelectContent } from '../LocationBrowser/LocationSelectContent';

interface OpenProjectProps {
  onOpen: (path: string, storage: string) => void;
  focusedStorageFolder: StorageFolder;
  onCurrentPathUpdate: (newPath?: string, storageId?: string) => void;
  currentPath: string;
  onDismiss: () => void;
}

export const OpenProject: React.FC<OpenProjectProps> = props => {
  const { onOpen, onDismiss, focusedStorageFolder, currentPath, onCurrentPathUpdate } = props;

  return (
    <div data-testid="SelectLocation">
      <LocationSelectContent
        onOpen={onOpen}
        focusedStorageFolder={focusedStorageFolder}
        currentPath={currentPath}
        onCurrentPathUpdate={onCurrentPathUpdate}
      />
      <DialogFooter>
        <DefaultButton onClick={onDismiss} text={formatMessage('Cancel')} />
      </DialogFooter>
    </div>
  );
};
