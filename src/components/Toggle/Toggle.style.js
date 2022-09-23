import styled from 'styled-components';

export const Container = styled.div`
  height: 30px;
  width: 80px;
  border-radius: 50px;
  background-color: #000000;
  padding: 5px;
  cursor: pointer;
`;

export const Knoba = styled.div`
  z-index:2;

  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color};
  margin-left: 50px;

  animation-name: ani2;
  animation-duration: .2s;
  animation-iteration-count: 1;

  border-radius: 50px;

  @keyframes ani2 {
  0% {margin-left: 0px; background-color: #aaaaaa;width: 20px}
  50% {margin-left: 25px; background-color: ${({ color }) => color}; width: 50px}
  100% {margin-left: 50px; background-color: ${({ color }) => color}; width: 20px}
}
`;

export const Knobb = styled.div`
  z-index:2;

  width: 20px;
  height: 20px;
  background-color: #aaaaaa;
  margin-left: 0px;

  animation-name: ani;
  animation-duration: .2s;
  animation-iteration-count: 1;

  border-radius: 50px;

  @keyframes ani {

  0% {margin-left: 50px; background-color: ${({ color }) => color}; width: 20px}
  50% {margin-left: 10px; background-color: ${({ color }) => color}; width: 50px}
  100% {margin-left: 0px; background-color: #aaaaaa; width: 20px}
}
`;

export const Symb = styled.div`
  z-index:1;
  position: absolute;
  display: flex;
  padding-left:27px;
  color: #ffffff;
`
