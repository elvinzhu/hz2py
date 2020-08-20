/**
 * transform Chinese characters to Chinese Pinyin
 * @param targetStr Chinese characters
 * @param options   options
 */
export default function hz2py(targetStr: string, options?: IOptions): string;
/**
 * transform Chinese pinyin that with tone to normal character respectively.
 *
 * @param py Chinese pinyin with tone（带音调的拼音）
 */
export declare function tone2Char(py: string): string;
/**
 * get initial letters
 *
 * @param targetStr Chinese characters
 */
export declare function getInitials(targetStr: string): string[];
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
