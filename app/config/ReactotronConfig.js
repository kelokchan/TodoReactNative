import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
  .configure() // controls connection & communication settings
  .use(reactotronRedux()) //  <- here i am!
  .connect() // let's connect!