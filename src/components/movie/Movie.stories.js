import React from 'react';
import {Movie} from './Movie';
import {text, number, boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {BrowserRouter as Router} from 'react-router-dom';

export default {
    title: 'Movie',
};

export const MovieFavouriteButton = () => {
    const [isFavourite, setIsFavourite] = React.useState(false);

    function onAddToFavourites(movie) {
        setIsFavourite(true);
        console.log('movie', movie);
    }

    function onRemoveFromFavourites(id) {
        setIsFavourite(false);
        console.log('id', id);
    }

    const props = {
        id: number('ID', 528085),
        name: text('Name', "Harry Potter and the Philosopher's Stone"),
        description: text(
            'Description',
            'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.',
        ),
        image:
            'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY209_CR0,0,140,209_AL_.jpg',
        rating: 10,
        maxRating: 10,
        isFavourite,
        onAddToFavourites,
        onRemoveFromFavourites,
    };

    return (
        <Router>
            <Movie {...props} />
        </Router>
    );
};

export const MovieLongDescription = () => {
    const props = {
        id: number('ID', 528085),
        name: text('Name', "Harry Potter and the Philosopher's Stone"),
        description: text(
            'Description',
            'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, ' +
                'his family and the terrible evil that haunts the magical world. ' +
                'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, ' +
                'his family and the terrible evil that haunts the magical world.',
        ),
        image:
            'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY209_CR0,0,140,209_AL_.jpg',
        rating: 10,
        maxRating: 10,
        isFavourite: boolean('isFav', false),
        onAddToFavourites: action('Add to Fav'),
        onRemoveFromFavourites: action('Remove from Fav'),
    };
    return (
        <Router>
            <Movie {...props} />
        </Router>
    );
};
