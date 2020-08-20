
import PYDict from './data/dict';
import ToneMap from './data/tone';

let tone_regex: RegExp, hzReg = /[\u4e00-\u9fa5]/g;
let py_map = new Map<string, string>();

/**
 * transform Chinese characters to Chinese Pinyin
 * @param targetStr Chinese characters
 * @param options   options
 */
export default function hz2py(targetStr: string, options: IOptions = {}) {
  if (targetStr && typeof targetStr === 'string') {
    const config = { tone: false, delimiter: ' ', ...options };
    if (py_map.size === 0) {
      for (let key in PYDict) {
        PYDict[key].split('').forEach(item => {
          py_map.set(item, key)
        })
      }
    }
    const maxIndex = targetStr.length - 1;
    const result = targetStr.replace(hzReg, (hz, index) => {
      return py_map.get(hz) + ((index === maxIndex) ? "" : config.delimiter)
    });
    return config.tone ? result : tone2Char(result)
  }
  return targetStr;
}

/**
 * transform Chinese pinyin with tones to normal letter respectively.
 * 
 * @param py Chinese pinyin with tone（带音调的拼音）
 */
export function tone2Char(py: string) {
  if (!tone_regex) {
    tone_regex = new RegExp(Object.keys(ToneMap).join('|'), 'g');
  }
  return py && py.replace(tone_regex, char => ToneMap[char]);
}


/**
 * get initial letters（获取首字母）
 * 
 * @param targetStr Chinese characters
 */
export function getInitials(targetStr: string) {
  if (targetStr) {
    const delimiter = ',';
    return hz2py(targetStr, { delimiter }).split(delimiter).map(item => item.charAt(0));
  }
  return []
}

interface IOptions {
  /**
   * if to have tone（是否包含音调）.
   */
  tone?: boolean,
  /**
   * the delimiter. defalut to " "(whitespace);
   */
  delimiter?: string
}