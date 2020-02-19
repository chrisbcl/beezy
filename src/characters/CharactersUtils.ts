import moment from 'moment';
import Constants from '../Constants';
import { ListCharacter } from './Characters';

export enum IMAGE_VARIANT {
    SMALL = 'portrait_small',
    MEDIUM = 'portrait_medium',
    LARGE = 'portrait_large',
    FANTASTIC = 'portrait_fantastic',
    UNCANNY = 'portrait_uncanny',
    INCREDIBLE = 'portrait_incredible'
}

export function getImageFullPath(path: string, extension: string, variant: IMAGE_VARIANT = IMAGE_VARIANT.MEDIUM) {
    return `${path}/${variant}.${extension}`;
}

export function renderCellValue(value: any, column: ListCharacter, columnTypes: { [key in ListCharacter]: string }) {
    if (columnTypes[column] === Constants.TYPES.DATE) {
        return moment(value).format(Constants.DATE_FORMAT);
    }
    return value;
}
