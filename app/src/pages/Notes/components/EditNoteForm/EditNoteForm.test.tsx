import { fireEvent, logRoles, render, waitFor } from '@testing-library/react';

import { NODES } from 'pages/Notes/constants';

import EditNoteForm from './EditNoteForm';
import { DESCRIPTION_LABEL } from './constants';

describe('set to test edit and share note', () => {
  const mockedHandleSetDescription = jest.fn();
  const mockedHandleEditNote = jest.fn();
  const mockedHandleShareNotes = jest.fn();
  const BUTTON = 'button';
  const note = NODES[0];

  it('expect edit button clicked', async () => {
    const DESCRIPTION_VALUE = 'change text';
    const BUTTON_TEXT = /Edit/i;

    const { getByLabelText, getByRole } = await render(
      <EditNoteForm
        note={note}
        handleSetDescription={mockedHandleSetDescription}
        description={note.description}
        handleEditNote={mockedHandleEditNote}
        handleShareNote={mockedHandleShareNotes}
      />,
    );

    const descriptionInput = getByLabelText(DESCRIPTION_LABEL);

    fireEvent.change(descriptionInput, {
      target: { value: DESCRIPTION_VALUE },
    });

    logRoles(descriptionInput);

    const button = getByRole(BUTTON, { name: BUTTON_TEXT });
    fireEvent.click(button);

    await waitFor(() => expect(mockedHandleEditNote).toHaveBeenCalled());
  });

  it('expect share button clicked and call mock function', async () => {
    const BUTTON_TEXT = /Share/i;

    const { getByRole } = await render(
      <EditNoteForm
        note={note}
        handleSetDescription={mockedHandleSetDescription}
        description={note.description}
        handleEditNote={mockedHandleEditNote}
        handleShareNote={mockedHandleShareNotes}
      />,
    );

    const button = getByRole(BUTTON, { name: BUTTON_TEXT });
    fireEvent.click(button);

    await waitFor(() => expect(mockedHandleShareNotes).toHaveBeenCalled());
  });

  it('expect description changed', async () => {
    const DESCRIPTION_VALUE = 'change text';

    const { getByLabelText } = await render(
      <EditNoteForm
        note={note}
        handleSetDescription={mockedHandleSetDescription}
        description={note.description}
        handleEditNote={mockedHandleEditNote}
        handleShareNote={mockedHandleShareNotes}
      />,
    );

    const descriptionInput = getByLabelText(DESCRIPTION_LABEL);

    fireEvent.change(descriptionInput, {
      target: { value: DESCRIPTION_VALUE },
    });

    await waitFor(() => expect(mockedHandleSetDescription).toHaveBeenCalled());
  });

  it('expect description is not changed', async () => {
    await render(
      <EditNoteForm
        note={note}
        handleSetDescription={mockedHandleSetDescription}
        description={note.description}
        handleEditNote={mockedHandleEditNote}
        handleShareNote={mockedHandleShareNotes}
      />,
    );

    await waitFor(() =>
      expect(mockedHandleSetDescription).not.toHaveBeenCalled(),
    );
  });
});
