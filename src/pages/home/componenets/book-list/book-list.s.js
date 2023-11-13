import styled, {css} from "styled-components";

export const BookListWrap = styled.div`
  width: 100%;
  margin-top: 30px;
`

export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fff;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 32px;
  position: relative;
  height: 100%;

  .actions_button{
    display: none;
  }

  &:hover{
    .actions_button{
      display: flex;
    }
  }
`

export const CardSkeleton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fff;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 32px;
  height: 100%;

  .title{
    height: 20px;
    background: gray;
  }
`

const iconButton = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 4px;
  position: absolute;
  cursor: pointer;

  right: 5px;
  svg > path{
    fill: #fff;
  }
`

export const DeleteButton = styled.div`
  ${iconButton}
  background-color: #FF4D4F;
  top: 5px;
`
export const EditButton = styled.div`
  ${iconButton}
  background-color: #6200EE;
  top: 35px;
`

export const CardTitle = styled.h3`
  color: var(--foundation-grey-grey-900, #151515);
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const CardDesc = styled.p`
  color: var(--foundation-grey-grey-500, #333);
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`

export const CardDate = styled.div`
  color: var(--foundation-grey-grey-500, #333);
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 107.143% */
`

export const CardPagesize = styled.div`
  display: flex;
  padding: 2px 12px;
  align-items: center;
  gap: 6px;
  border-radius: 8.5px;
  background: var(--foundation-purple-purple-50, #EFE6FD);
  color: var(--foundation-purple-purple-300, #9654F4);
  font-family: Mulish;
  font-size: 12px;
  font-weight: 400;
  width: max-content;
`