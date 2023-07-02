import { RotatingTriangles, Oval } from 'react-loader-spinner';

export const Loader = () => {
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
