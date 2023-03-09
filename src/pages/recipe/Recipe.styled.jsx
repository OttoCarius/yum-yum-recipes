import styled from "styled-components";


export const Btn = styled.button`
    padding: 16px 32px;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 32px;
    font-weight: 600;

    @media (max-width: 950px) {
     padding: 12px 20px;
        margin-right: 20px;
  }

    @media (max-width: 850px) {
        padding: 12px 20px;
        margin-right: 20px;
    }
    @media (max-width: 755px) {
        padding: 4px 10px;
        margin-right: 10px;
  }

  @media (max-width: 640px) {
    padding: 12px 20px;
        margin-right: 20px;
  }

    @media (max-width: 450px) {
        padding: 4px 10px;
        margin-right: 10px;
  }

 
`

export const Info = styled.div`
    margin-left: 200px;
    width: 550px;

    @media (max-width: 1020px) {
     margin-left: 80px;
    width: 400px;
  }

    @media (max-width: 950px) {
     margin-left: 70px;
    width: 400px;
  }
    @media (max-width: 680px) {
     margin-left: 30px;
    width: 400px;
  }

  @media (max-width: 450px) {
    width: 260px;
  }

    h3{
        margin: 40px 0;
        color: black;
        
    @media (max-width: 850px) {
        font-size: 14px;
    }
    }
`

export const DetailWrap = styled.div`
margin-top: 140px;
margin-bottom: 80px;
margin-left: 60px;
margin-right: 60px;
display: flex;

@media (max-width: 940px) {
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (max-width: 760px) {
    margin-left: 30px;
    margin-right: 30px;
  }



@media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 80px;
    margin-bottom: 40px;
   
  }

.active{
    background: linear-gradient(35deg, #494949, #313131);
color: white;
}


h2{
    margin-bottom: 32px;
    text-decoration: none;
    font-size: 24px;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
    color: #313131;

    @media (max-width: 640px) {
    display: flex;
    justify-content: center;
  }
   
}
li{
    font-weight: 400;
    font-size: 14px;
    height: 30%;
}
ul{
    margin-top: 32px;
}
a{
    color: #313131;
}

`

export const ImgWrap = styled.div`
width: 480px;

@media (max-width: 1120px) {
    width: 420px;
  }
@media (max-width: 640px) {
    width: 420px;
  }

  @media (max-width: 450px) {
    width: 280px;
  }


img{
   @media (max-width: 640px) {
       margin-bottom:30px;
  }

}
`

export const ImgTitle = styled.h2`


`