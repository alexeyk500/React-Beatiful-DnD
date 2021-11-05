import React, {useState} from 'react';
import './App.css';
import {DragDropContext, Droppable, Draggable, DropResult} from 'react-beautiful-dnd';

const list = [
  {
    id: 'id_0',
    text: ' Card with id = 0'
  },
  {
    id: 'id_1',
    text: ' Card with id = 1'
  },
  {
    id: 'id_2',
    text: ' Card with id = 2'
  },
  {
    id: 'id_3',
    text: ' Card with id = 3'
  },
  {
    id: 'id_4',
    text: ' Card with id = 4'
  },
]

function App() {

  const [cardsList, setCardsList] = useState(list)

  const onDragEnd = (result: DropResult) => {
    if (result.destination) {
      const newList = [...cardsList];
      const [reorderedItem] = newList.splice(result.source.index, 1);
      newList.splice(result.destination.index, 0, reorderedItem);
      setCardsList(newList);
    }
  }

  return (
    <div className={'container'}>
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <div className={'list_wrapper'}>
          <Droppable droppableId={'list'}>
            {(provided) => (
              <div
                className={'list'}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {
                  cardsList.map((card, ind) => {
                    return (
                      <Draggable key={ind} draggableId={ind + ''} index={ind}>
                        {(provided) => (
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
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );

}

export default App;
