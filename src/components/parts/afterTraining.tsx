import styled from "styled-components";
import media from "../../styles/mediaQuery";

const AfterTrainingContainer = styled.div`
  width: 1140px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }

  ${media.mobile`
    width: 100%;
  `}
`;

const AfterTraining = () => {
  return (
    <>
      <h6>経験者・研修後のキャリアイメージ</h6>
      <AfterTrainingContainer>
        <img
          src="/public/images/キャリアイメージ.png"
          alt="経験者・研修後のキャリアイメージ"
        />
      </AfterTrainingContainer>
    </>
  );
};

export default AfterTraining;
