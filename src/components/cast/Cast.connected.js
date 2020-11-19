import {connect} from 'react-redux';
import {selectActors} from '../../selectors/selectors';
import {Cast} from './Cast';

const mapStateToProps = (state) => {
    return {
        cast: selectActors(state).slice(0, 6),
    };
};

export const CastConnected = connect(mapStateToProps)(Cast);
