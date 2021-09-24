import { useHistory } from "react-router-dom";
import rg4js from 'raygun4js';


export default function Raygun() {
    const history = useHistory();
  history.listen((location) => {
    rg4js('trackEvent', { type: 'pageView', path: location.pathname });
  });
    
    return null;
}