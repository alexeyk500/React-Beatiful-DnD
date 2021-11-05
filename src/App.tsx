import React from 'react';
import './App.css';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

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
        <DragDropContext
          onDragEnd={onDragEnd}
        >
          <div className={'list_wrapper'}>
            <Droppable droppableId={'list'}>
            { (provided) => (
                <div
                  className={'list'}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {
                    cardsList.map((card, ind)=>{
                      return(
                        <Draggable  key = {ind} draggableId={ind+''} index={ind}>
                          {(provided)=>(
                            <div
                              className={'card'}
                              ref={provided.innerRef}
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                            >
                              {card.id} - {card.text}
                            </div>
                          )}
                        </Draggable>
                      )
                    })
                  }
                  {provided.placeholder}
                </div>
              )
            }
          </Droppable>
          </div>
        </DragDropContext>
      </div>
  );

}

export default App;
