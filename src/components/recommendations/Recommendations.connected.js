import {connect} from 'react-redux';
import {selectRecommendations} from '../../selectors/selectors';
import {Recommendations} from './Recommendations';

const mapStateToProps = (state) => {
    return {
        recommendations: selectRecommendations(state).slice(0, 6),
    };
};

export const RecommendationsConnected = connect(mapStateToProps)(Recommendations);
