import React from 'react';

export default function NoteItem() {
  return (
    <div class="notes__list-item notes__list-item--selected">
        <div class="notes__small-title">Lecture Notes</div>
        <div class="notes__small-body">I learnt nothing today.</div>
        <div class="notes__small-updated">Thursday 3:30pm</div>
    </div>
  );
}
