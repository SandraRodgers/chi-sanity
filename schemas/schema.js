// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import chihuahua from './chihuahua';
import chihuahuasSE from './chihuahuasSE';
import chihuahuasMW from './chihuahuasMW';
import region from './region';
import information from './information';
import successStory from './successStory';
import event from './event';
import ourImpact from './ourImpact';
import landingBannerAndLogo from './landingBannerAndLogo';
import happyTails from './happyTails';
import mostInNeed from './mostInNeed';
import formQuestionAdoptionApplication from './formQuestionAdoptionApplication';
import formQuestionFosterApplication from './formQuestionFosterApplication';
import newsletter from './newsletter';
import adoptableDogs from './adoptableDogs';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    chihuahua,
    chihuahuasSE,
    chihuahuasMW,
    formQuestionAdoptionApplication,
    formQuestionFosterApplication,
    event,
    happyTails,
    successStory,
    mostInNeed,
    newsletter,
    ourImpact,
    landingBannerAndLogo,
    information,
    blockContent,
    region,
    adoptableDogs
  ]),
})
