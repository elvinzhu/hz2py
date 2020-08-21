# transform Chinese characters into Chinese Pinyin.

[![Build Status](https://travis-ci.org/elvinzhu/hz2py.svg?branch=master)](https://travis-ci.org/elvinzhu/hz2py)
[![codecov](https://codecov.io/gh/elvinzhu/hz2py/branch/master/graph/badge.svg?v=1)](https://codecov.io/gh/elvinzhu/hz2py)

汉字转拼音，可带声调。 支持 20850 个汉字，不包含多音字。 压缩后体积 76K。

# usage

```ts
import hz2py, { getInitials } from 'hz2py';

const test_words = '我爱我家';

hz2py(test_words); //  wo ai wo jia

hz2py(test_words, { tone: true }); //  wǒ ài wǒ jiā

hz2py(test_words, { delimiter: '' }); //  woaiwojia

getInitials(test_words); // ['w', 'a', 'w', 'j']
```

# licence

MIT[@elvinzhu](https://github.com/elvinzhu)
