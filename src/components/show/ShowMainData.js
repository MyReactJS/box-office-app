import React from 'react';
import { useShows } from '../../misc/custom-hooks';
import IMG_PLACEHOLDER from '../../images/notfound.png';
import { Star } from '../styled';
import { Headline, MainDataWrapper, TagList } from './ShowMainData.styled';

const ShowMainData = ({ id,name, rating, summary, tags, image }) => {
    const [starredShows] = useShows();
    const isStarred = starredShows.includes(id);
    return (
        <MainDataWrapper>
            <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
            <div className='text-side' >
                <Headline>
                    <h1>{name}</h1>
                    <div>
                        <Star active={isStarred} />
                        <span>{rating.average || 'N/A'}</span>
                    </div>
                </Headline>
                <div className='summary' dangerouslySetInnerHTML={{ __html: summary }} />

                <div>
                    Tags:{' '}
                    <TagList>
                        {tags.map((tag, i) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </TagList>
                </div>
            </div>
        </MainDataWrapper>
    );
};
export default ShowMainData;
