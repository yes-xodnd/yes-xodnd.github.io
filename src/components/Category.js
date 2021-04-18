import styled from 'styled-components'

function Category({ allTags, selectedTag, handleClickTag }) {

  return (
    <Container>
      <List>
      { allTags.map(tag => (
        <ListItem onClick={handleClickTag} key={tag} selectedTag={selectedTag} >
          { tag }
        </ListItem>
      )) }
    </List>
    </Container>
  )
}
export default Category;


const Container = styled.section`
  width: 100%;
  margin-bottom: 3rem;

  @media screen and (min-width: 768px) {
    width: 200px;  
  }
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const ListItem = styled.li`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-left: 0.5rem solid tomato;
  border-color: ${({ theme, selectedTag, children }) => (
    selectedTag === children
    ? theme.color.primary
    : 'white'
  )};

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.color.primary };
  }
`