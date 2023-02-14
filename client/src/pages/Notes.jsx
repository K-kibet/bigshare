import React from 'react';
import NoteItem from '../componenets/NoteItem';

export default function Notes() {
  return (
    <div className='notes'>
        <aside class="notes__sidebar">
            <button type="button">Add Note</button>
            <div class="notes__list">
                <NoteItem />
                <NoteItem />
                <NoteItem />
                <NoteItem />
                <NoteItem />
            </div>
        </aside>
        <div class="notes__preview">
            <input class="notes__title" type="text" placeholder="Enter a title..." />
            <textarea class="notes__body">I am the notes body...</textarea>
        </div>
    </div>
  );
}
