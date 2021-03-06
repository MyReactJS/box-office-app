/*  eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from 'react';
import ShowCard from './ShowCard';
import IMAGE_NOT_FOUND from '../../images/notfound.png';
import { FlexGrid } from '../styled';
import { useShows } from '../../misc/custom-hooks';


const ShowGrid = ({ data }) => {
    const [starredShows, dispatchStarredShows] = useShows();

    return (
        <FlexGrid>
            {data.map(({ show }) => {

                const isStarred = starredShows.includes(show.id);
                const onStarClick = useCallback(() => {
                    if (isStarred)
                        dispatchStarredShows({ type: 'REMOVE', showId: show.id });
                    else
                        dispatchStarredShows({ type: 'ADD', showId: show.id });
                }, [isStarred, show.id]);
                return (<ShowCard
                    key={show.id}
                    id={show.id}
                    name={show.name}
                    image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
                    summary={show.summary}
                    onStarClcik={onStarClick}
                    isStarred={isStarred}
                />);

            })}</FlexGrid>
        )

}
export default ShowGrid;