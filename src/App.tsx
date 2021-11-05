import React from 'react';
import './App.css';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

const cardsList = [
  {
    id: 0,
    text: ' Card with id=0'
  },
  {
    id: 1,
    text: ' Card with id=1'
  },
  {
    id: 2,
    text: ' Card with id=2'
  },
  {
    id: 3,
    text: ' Card with id=3'
  },
  {
    id: 4,
    text: ' Card with id=4'
  },

]

function App() {

  const onDragEnd = () => {

  }

  return (
    <div className={'container'}>
      <div className={'list_wrapper'}>
        <DragDropContext
          onDragEnd={onDragEnd}
        >
          {
            cardsList.map((card, ind)=>{
              return(
                <div key={ind} className={'card'}>
                  {card.id} - {card.text}
                </div>
              )
            })
          }
        </DragDropContext>

      </div>
    </div>
  );
}

export default App;
