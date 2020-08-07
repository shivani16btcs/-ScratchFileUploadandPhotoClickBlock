import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import Box from '../box/box.jsx';
import SpriteInfo from '../../containers/sprite-info.jsx';
import SpriteList from './sprite-list.jsx';
import ActionMenu from '../action-menu/action-menu.jsx';
import {STAGE_DISPLAY_SIZES} from '../../lib/layout-constants';
import {isRtl} from 'scratch-l10n';

import styles from './sprite-selector.css';

import fileUploadIcon from '../action-menu/icon--file-upload.svg';
import spriteIcon from '../action-menu/icon--sprite.svg';


const SpriteSelectorComponent = function (props) {
    const {
        editingTarget,
        hoveredTarget,
        intl,
        onChangeSpriteDirection,
        onChangeSpriteName,
        onChangeSpriteRotationStyle,
        onChangeSpriteSize,
        onChangeSpriteVisibility,
        onChangeSpriteX,
        onChangeSpriteY,
        onDrop,
        onDeleteSprite,
        onDuplicateSprite,
        onExportSprite,
        onFileUploadClick,
        onNewSpriteClick,
        onPaintSpriteClick,
        onSelectSprite,
        onSpriteUpload,
        onSurpriseSpriteClick,
        raised,
        selectedId,
        spriteFileInput,
        sprites,
        stageSize,
        ...componentProps
    } = props;
    let selectedSprite = sprites[selectedId];
    let spriteInfoDisabled = false;
    if (typeof selectedSprite === 'undefined') {
        selectedSprite = {};
        spriteInfoDisabled = true;
    }
    return (
        <Box
            className={styles.spriteSelector}
            {...componentProps}
        >

           
            <ActionMenu
                className={styles.addButton}
                img={spriteIcon}
                moreButtons={[
                    {
                        img: fileUploadIcon,
                        onClick: onFileUploadClick,
                        fileAccept: '.svg, .png, .jpg, .jpeg, .sprite2, .sprite3, .gif',
                        fileChange: onSpriteUpload,
                        fileInput: spriteFileInput,
                        fileMultiple: true
                    }
                ]}
                tooltipPlace={isRtl(intl.locale) ? 'right' : 'left'}
                onClick={onNewSpriteClick}
            />
        </Box>
    );
};
SpriteSelectorComponent.propTypes = {
   
    onFileUploadClick: PropTypes.func,
    
    onSpriteUpload: PropTypes.func,
    
    spriteFileInput: PropTypes.func,
    onNewSpriteClick: PropTypes.func,

};

export default injectIntl(SpriteSelectorComponent);
