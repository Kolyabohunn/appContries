import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadContries } from '../store/contries/contriesActions';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import {
  contriesSelectorInfo,
  selectSearchContries,
} from '../store/contries/contriesSelectors';
import { selectControls } from '../store/controls/controlsSelect';

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { qty, status, error } = useSelector(contriesSelectorInfo);
  const qtyLength = qty.length;
  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectSearchContries(state, { search, region })
  );
  useEffect(() => {
    if (!qtyLength) dispatch(loadContries());
  }, [qtyLength, dispatch]);
  return (
    <>
      <Controls />
      {status === 'loading' && <h2>LOADING...</h2>}
      {error && <h2>{error}</h2>}
      {status === 'resolve' && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
