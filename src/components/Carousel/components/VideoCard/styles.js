import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  

  transition: width .3s;
  &:hover,
  &:focus {
    width: 380px;

    & > span {
      display: flex;
      align-items: center;
    }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  & > span {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    padding: 20px;
    font-weight: bold;
    font-size: 20px;
    display: none;
  }
`;
