import styled from "styled-components"

// PopUp
const PopUpBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`
const PopUpWrapper = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  width:80%;
  max-width:800px;
`

const PopUpTitle = styled.div`
  font-weight:bold;
  font-size:22px;
`
const PopUpInfo = styled.div`
  margin-top:40px;
  display:flex;
  width:100%;
  flex-direction:column;
  align-items:center;
`
const PopUpImgWrap = styled.div`
  min-width:200px;
`
const Photo = styled.div`
  background-image: url(${(props) => props.$img});
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center center;
`
const PopUpDesc = styled.div`
  font-size: 16px;
  padding:0 10px;
  align-self:center;
  word-break: break-word;
  margin-top:10px;
`
const PopUpFooter = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-top:40px;
`

const PopUpActionBtn = styled.button`
  padding: 5px 10px;
  border: 1px solid #000;
  font-size: 16px;
  background:#fff;
  cursor:pointer;
  &:hover {
      background: #000;
      color: #fff;
  }
  cursor: pointer;
`

const PopUp = ({ ispopUpOpen, product, handleCancelBtn }) => {
  const { title, url } = product
  return ispopUpOpen ? (
    <PopUpBox>
      <PopUpWrapper>
        <PopUpTitle>{title}</PopUpTitle>
        <PopUpInfo>
          <PopUpImgWrap> <Photo $img={url} /></PopUpImgWrap>
          <PopUpDesc>{url}</PopUpDesc>
        </PopUpInfo>
        <PopUpFooter>
          <PopUpActionBtn onClick={handleCancelBtn}>close</PopUpActionBtn>
        </PopUpFooter>
      </PopUpWrapper>
    </PopUpBox>
  ) : null
}

export default PopUp