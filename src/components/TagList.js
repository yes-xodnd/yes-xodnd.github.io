import { useEffect, useState } from 'react';
import styled from 'styled-components'

function TagList({ allTags, selectedTag, handleClickTag }) {
  const [ isVisible, setVisible ] = useState(false)
  const toggleVisible = () => setVisible(!isVisible)

  useEffect(() => setVisible(screen.width > 768 ? true : false), [])
  

  return (
    <Container>
      <ToggleButton onClick={toggleVisible}>
        <span>TAGS</span>
        <Icon
          className="fas fa-caret-up"
          isVisible={isVisible}
          aria-hidden
        />
      </ToggleButton>
      
      
      <List isVisible={isVisible}>
        { allTags.map(({ tagName: tag, count }) => (
          <ListItem
           onClick={handleClickTag(tag)}
           isSelected={selectedTag === tag}
           key={tag} >
            <span>{ tag }</span>
            <PostCount>{ count }</PostCount>
          </ListItem>
        )) }
      </List>
    </Container>
  )
}
export default TagList;


const Container = styled.section`
  background: white;
  font-size: ${({ theme }) => theme.font.sm };

  @media screen and (min-width: 768px) {
    width: fit-content;   
    min-width: 200px;
  }
`

const ToggleButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid black;

  &:hover {
    cursor: pointer;
  }
`

const Icon = styled.i`
  transform: rotateX(${({ isVisible }) => isVisible ? '0deg' : '180deg'});
`

const List = styled.ul`
  position: absolute;
  top: 3.3rem;
  max-width: 1024px;
  width: 100%;

  margin: 0;
  padding: 0;
  list-style: none;
  background-color: white;
  border-bottom: 1px solid black;

  transition: 200ms;
  transform: ${({ isVisible }) => isVisible ? 'scaleY(1)' : 'scaleY(0)'};
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transform-origin: top;

  @media screen and (min-width: 768px) {
    position: static;
    width: auto;
  }
`

const ListItem = styled.li`
  display: flex; 
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1rem;
  transition: 200ms;
  color: ${({ theme, isSelected }) => isSelected
    ? theme.color.primary
    : 'inherit'
  };


  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.lightgrey};
  }
`

const PostCount = styled.span`
  font-size: ${({ theme }) => theme.font.xs};
  margin-left: 0.5rem;
`