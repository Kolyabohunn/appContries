import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { loadCountry } from '../store/detals/actionDetals';
import { selectDetals, selectALLDetals } from '../store/detals/selectDetals';
import { clearDetals } from '../store/detals/actionDetals';
export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector(selectALLDetals);
  const currentCountry = useSelector(selectDetals);
  useEffect(() => {
    dispatch(loadCountry(name));
    return () => dispatch(clearDetals());
  }, [name, dispatch]);
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h1>loading...</h1>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
