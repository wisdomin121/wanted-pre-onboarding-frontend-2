import { styled } from 'styled-components'

export const StyledItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 18px 25px;
  border: none;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #f9f7f2;
  }
`

export const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 90%;
`

export const StyledRegularP = styled.p`
  overflow: hidden;
  margin: 0;
  font-size: 14px;
  text-align: start;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #333835;
`

export const StyledSmallP = styled.p<{ $isComment: boolean }>`
  display: flex;
  align-items: center;
  margin: ${({ $isComment }) => ($isComment ? '0 0 0 auto' : '0')};
  font-size: 12px;
  text-align: start;
  color: #807f7d;
`
