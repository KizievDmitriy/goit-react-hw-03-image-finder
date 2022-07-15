import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './Loader.module.css';
import { TailSpin } from 'react-loader-spinner'


export const Loader = () => {
  return (
    <div className={s.Loader}>
      <TailSpin
          color="#3f51b5"
          height={100}
          width={100}
        ariaLabel="loading" />
    </div>
  );
};