import { RotatingTriangles, Oval } from 'react-loader-spinner';
import { BallTriangle } from 'react-loader-spinner';
import { Backdrop, WrapperForLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <WrapperForLoader>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="orange"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </WrapperForLoader>
    </Backdrop>
  );
};

export const AddingLoader = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <RotatingTriangles
        visible={true}
        height="23"
        width="23"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );
};

export const DeletingLoader = ()=> {
    return (
      <Oval
        height={14}
        width={14}
        color="#fff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    );
}
