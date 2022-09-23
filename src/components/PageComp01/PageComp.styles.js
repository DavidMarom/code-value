import styled from 'styled-components';

const DARK = '#555555';
const LIGHT = '#cccccc';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  background-color: ${({ darkMode }) => (darkMode ? `${DARK}` : `${LIGHT}`)};
  padding:20px;
`

export const Card = styled.div`
  width: 100px;
  height: 100px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: inline-block;
`
