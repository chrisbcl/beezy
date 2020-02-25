import Constants from '../utils/Constants';
import getFormattedDate from '../utils/Utils';
import { ListCharacter } from './Characters';

/**
 * Image size when requesting the character's thumbnail
 */
export const enum IMAGE_VARIANT {
    SMALL = 'portrait_small',
    MEDIUM = 'portrait_medium',
    LARGE = 'portrait_large',
    FANTASTIC = 'portrait_fantastic',
    UNCANNY = 'portrait_uncanny',
    INCREDIBLE = 'portrait_incredible'
}

/**
 * Get the full image path to request
 * @param path base path
 * @param extension image extension
 * @param variant image size
 */
export function getImageFullPath(path: string, extension: string, variant: IMAGE_VARIANT = IMAGE_VARIANT.MEDIUM) {
    const fullPath = `${path}/${variant}.${extension}`;
    return fullPath.replace('http://', 'https://');
}

/**
 * Get the string representation of a cell value
 * @param value cell value
 * @param column column that the value is associated
 * @param columnTypes column types to get the correct value string representation
 */
export function renderCellValue(value: any, column: ListCharacter, columnTypes: { [key in ListCharacter]: string }) {
    if (columnTypes[column] === Constants.TYPES.DATE) {
        return getFormattedDate(value);
    }
    return value;
}
