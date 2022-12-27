import { combineReducers } from 'redux';
import { themeReduser } from './theme/themeReduser';
import { contrieReduser } from './contries/contriesRedusers';
import { controlReduser } from './controls/controlsReduser';
import { reduserDetails } from './detals/reduserDetals';
export const rootRedusers = combineReducers({
  theme: themeReduser,
  contries: contrieReduser,
  controls: controlReduser,
  detals: reduserDetails,
});
