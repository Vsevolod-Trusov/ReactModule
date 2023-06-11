import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import NotesForm from './NotesForm';

describe('set to test notes form', () => {
  const TITLE_PLACEHOLDER = 'Enter title';
  const TITLE_VALUE = 'hello';

  const DATE_VALUE = '2020-05-12';
  const DATE_ID = 'date';
  const DESCRIPTION_PLACEHOLDER = 'Enter description';
  const DESCRIPTION_VALUE = 'some text';
  const BUTTON = 'button';
  const BUTTON_TEXT = /Submit/i;

  it('render form', async () => {
    const handleSubmit = jest.fn();
    const NOTES_ID = 'notes-form';

    const { getByTestId } = await render(
      <NotesForm handleSubmit={handleSubmit} />,
    );

    const form = getByTestId(NOTES_ID);
    expect(form).toBeDefined();
  });

  it('fill title input', async () => {
    const handleSubmit = jest.fn();

    const { getByPlaceholderText } = await render(
      <NotesForm handleSubmit={handleSubmit} />,
    );

    const titleInput = getByPlaceholderText(TITLE_PLACEHOLDER);

    fireEvent.change(titleInput, { target: { value: TITLE_VALUE } });

    expect((titleInput as HTMLInputElement).value).toBe(TITLE_VALUE);
  });

  it('expect clicked submit', async () => {
    const handleSubmit = jest.fn();

    const { getByRole, getByTestId, getByPlaceholderText } = await render(
      <NotesForm handleSubmit={handleSubmit} />,
    );

    const titleInput = getByPlaceholderText(TITLE_PLACEHOLDER);
    const dateInput = getByTestId(DATE_ID);
    const descriptionInput = getByPlaceholderText(DESCRIPTION_PLACEHOLDER);

    fireEvent.change(titleInput, { target: { value: TITLE_VALUE } });
    fireEvent.change(dateInput, { target: { value: DATE_VALUE } });
    fireEvent.change(descriptionInput, {
      target: { value: DESCRIPTION_VALUE },
    });

    const button = getByRole(BUTTON, { name: BUTTON_TEXT });
    fireEvent.click(button);

    await waitFor(() => expect(handleSubmit).toHaveBeenCalled());
  });
});
