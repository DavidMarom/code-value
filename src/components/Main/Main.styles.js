import styled from 'styled-components';

const DARK = '#555555';
const DARK2 = '#555577';
const LIGHT = '#cccccc';
const LIGHT2 = '#ccccdd';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80vh;
  background-color: ${({ darkMode }) => (darkMode ? `${DARK}` : `${LIGHT}`)};
  padding:20px;
`

export const Card = styled.div`
  width: 100px;
  height: 100px;
`

export const ItemListCard = styled.div`
width:100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 10px;
cursor: pointer;
border-bottom: 1px solid #aaaaaa;
`

export const Img = styled.img`
  width: 80px;
  height: 100%;
  display: inline-block;
  margin-right: 10px;
`

export const Img2 = styled.img`
  width: 80px;
  height: 100px;
  display: inline-block;
  margin-right: 10px;
`
// Containers
export const ListContainer = styled.div`
  width: 49%;
  height: 100%;
  padding: 5px;
  background-color: ${({ darkMode }) => (darkMode ? `${DARK2}` : `${LIGHT2}`)};
`

export const DetailsContainer = styled.div`
  width: 49%;
  height: 100%;
  background-color: ${({ darkMode }) => (darkMode ? `${DARK2}` : `${LIGHT2}`)};
`

// Helpers
export const Col = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
width:100%;
`

export const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
`

// Fonts and text
export const CardTitle = styled.div`
  font-size: .9em;
  font-weight: bold;
`

export const CardText = styled.div`
  font-size: .7em;
  `

export const Button = styled.button`
  height: 30px;
  background-color: #bbaaaa;
  border: none;
  margin-left:10px
  `