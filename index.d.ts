/**
 * transform Chinese characters to Chinese Pinyin
 * if the character not in the checklist then return itself
 * @param targetStr Chinese characters
 * @param options   options
 */
export default function hz2py(targetStr: string, options?: IOptions): string;
/**
 * get initial letters（获取首字母）
 * if the character not in the checklist then return itself
 * @param targetStr Chinese characters
 */
export declare function getInitials(targetStr: string): string[];
/**
 * transform Chinese pinyin with tones to normal letter respectively.
 * @param py Chinese pinyin with tone（带音调的拼音）
 */
export declare function tone2Char(py: string): string;
/**
 * check if it is a not empty string
 * @param value
 */
export declare function hasStringValue(value: any): boolean;
interface IOptions {
    /**
     * if to have tone（是否包含音调）.
     */
    tone?: boolean;
    /**
     * the delimiter. defalut to " "(whitespace);
     */
    delimiter?: string;
}
export {};
