import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Choose an extension"
                description="Name for the custom extension selector"
                id="gui.extension.custom.name"
            />
        ),
        // iconURL: customImage,
        // insetIconURL: customInsetImage,
        description: (
            <FormattedMessage
                defaultMessage="For developers"
                description="Description for the custom extension selector"
                id="gui.extension.custom.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="core example"
                description="Name for the 'Music' extension"
                id="gui.extension.coreExample.name"
            />
        ),
        extensionId: 'coreExample',
        iconURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAEBCAMAAAAQKvrqAAABsFBMVEX////Ngwn+zof4rp4AAAD/5cDQhQnThwnPhQlsFQDLggkKBgfIgAnsJDIAAAfFfgn5+fm/egm3dQn/6sS8eAnx8fGxcQn/04r19fWpbAnW1tabYwj0xoJ/UQjwqJnm5uZ1SwicZAhmQQgrKSm8u7uOWwjp6enFxMSkaQnT0tKDUwhbOgjf398OAAA5IAB6eXkWAADWwKGQj49BKACdnJxSNAiBgICpqKhxb3BjYWJeOgAeGhtmFAAvHABLLADVlYhNTU85LiU8OTq1oojt1bLVrXJrQgAmEwAXCwBaWFcUFBopGAM/JQCfcGhlRkCCW1S3f3TOkIM1JCEfAABbSzWXh3LJtJcyIxRHDwDUIS6Gd2VyWDXLpW20kmB1Uyc0GABOOylHQT1ULABWOxciGBJxTTpoRSxlQRViVk4nKS8ABBaEYThZPS1GLx5ELS2LYFh9VCAPGyiQclCVYx9zXUhBLjFTV14rCQBMQDZzY1WRhn2UbT+ropapdS3MnVqrlXJTDQA5AABTTEBBJx9NAQC1HCd5FBugGSMqAACSUUdoEBmIEB1JAAvDHCmcdDtLPSi0+jvLAAAgAElEQVR4nNV9iX/TVrY/Ti9Xqu1alrCVyIqIvCiWJS+J96U2xgneSSmQ0AlJgeIphJbSAq+Q9r33a5n1deZN/+XflbzJtuQlkZN55/OZpaY296uzn3vO0ZUrptFaMpuNZTbN+8GLJ3caqPQkeNknOTM5A01QL/G8rwWagcs+zBlpLQ7qPhJD5PKByv9NXrhjIMpi0IIIklWQC1/2gc5AazlQcmGWLkGmBDLoQ+faZR9rIXLGQMIFLX3CBFD2XLniif+f4kcGtDUYLJCSgaLbscbZUDjdmxsKbW5eIC/doMVgFg1hgk1hRajS8Cz8Y87NjUC2Umgi8jfinotyOs4ykEYwWHA6pbIiDgqhxR6mOxwoO0AtmkilSoniFgCNBX/grJQBqVEMSKB4kNu4cmUjF3mcdM//S+5QvAKKMi+IlAWzU15ObgGQvAhmuAsRCo6DYIsFxVcEn/Cl+NyH8CAI7arXikGo/CCEmF1IAZC+ABRpwI8zwgJdMogrLMi8ZL9Kz6feG4EyaPMMrn0gOHKddZBegJlnow1b3Y6Pg7BgUr2inj3+VKyW55BrdzALoryIT/DUztVBfNkgsoBTGQFHCKO6qo1cuUxJd2fKtSfe3KqKcAih/0M4RPoFQsvFsOkHBPqLoNVFMwzrZbvkFRkZ5NS/OpwtkUI7PdXWupEk5QU7HCKwUyLLCgLLEBASMvBvLBVE3JGHOPobJZ8cLTpsrUTKx0kcz/GpYiebCQQ9VzazJRfzVTloLNjhOIhyg6jFAi0UK335xz/uIfqaZwmM6oD0MjGslQGN4zQrSJLEcRxfReeXBEFiRRF9Vv3yfi4TyORSFMn74wbMcAdzoDpUBmhnpGd7r+58fkOhO7f3eAaFMYXFveb8FCjUYF+AMQwSFO1lJYn3+XgJiYLVJQr8s+dZkKJxof1jQE8zNuInNYHoQ8Bxinu6d/vGRwO6cfupgEVBdokg0g7fiKtWweCEwhpO9kkCY8FcXoEvJlhMzBfSwQkz5Ym9yHsxfMAGQR6BoNCdbwVxqVpRBuKEee1iwQlhK57c/4bz2jFCFKoC7pKK5XGZCjbq0jB2hK7qt+MQEH2+J7SWaGbDim3SQaGeyPpV0r0Ryvzk40U7Rgle0urNOxoZjetzZypt1joQJQstf/b59QkMSKS+rYHy0kAkCzUdT2dRFQTDhNO1NQVGOurjGCtF23GX0G7mMiFn99sb8WaVwfvfx63s01eTbOiicCxRtWOOlHX8/BiG9JlVlLtUiMWy2VisEak7orJAK9yhuVqznA4ouuGJdSTX4BHgFuHlHT02dPUC2JYmTznAW0cA4JRX8qUSiZTMo1gUEdMl0etlvRQ6MSQYruaoZOOZzI8J1q7BIE3B8NH1uyC3LBBlIPRB4BikBF5G5/cJDENTJDkaieAESXSVnmCkNnD4T6q0dSiKOPfgjiEERLfBk2WDQDJE83K7mOK96PhW9dATujIQfpygvIm6RGqlkK3fnobho+vAb3oAFVLN9mYFsCoEGkUZRR9LUwR6/KrQEP3T6RkujOBlUWsRIN36bCqGjz66W8iYjGEjrj6WoB+4IGZhU62WT1Q50D0YTtI9EBht1cFAyzylESVkmKJ3jfWhS3uma3YopoII+IGV4KK2kuhCLBieCnqZvpSQlnHCIZtiiZGPsKrj8xkYkFKYrdmBXJ8TcqteJUcQKGcXvF0xsvKE6jG0kkNwIxqtfMSAWcKkGNklgYgXANJP+6QOS10QkBUwkUvJEjmMs2neax8Xr1ZzJoaPbpjnszfDQxCh3Iu6RFgnPTakOEbN9DFZrnVaDoejw/ZQWCmRHP8GJoGp1rVL180D4Qn0QITdcT8Q7Ba9yKkHAhPllkDY7XarVK/3QyzrpKLj9cJsDAhExayqaDC22QWRzAHgcMikngmFog+BsAuMVCWQv0DSZm1VJyoiA0bw8zBCcRRmXXsEy+rVQ6ACQN0nCCmHSy/+Y6qqOGE+oSf+uFg0BtECc2AwE4SnrLqcTAFwdgzFSnRRJ4qFlI9VQSS8PeHBrQ4jEFAA0321+SDCuVz4yiaySmzXqGKsTlIEKVkBgZPFfmkQt0eNQGAJMMvPmQ1iLekPuNOg1Oo5Agsm6LhkS5WzK1LVGtQ37UVRNwBByVz9u3kwmAniSrCQjoM8KfFkT4wInZNhXBspBQrqeo4bcaJI64PAuLnU2lwQYWSV8hSynoxRWqo8XrYjWHEo1KW+YhuK07zSZCqIKwEQFTGckHXFaCAjckeESJx8PfeA2236IHCidXcuDKaC2IzbEiKOpKBkIB/d5ys5EoyVSBTJPggDEwtZ2+ywqQeiYlrVJhBJJVI0etYJQSfgGLLC56gLrvygoEPJ+iDm9HQfKQFg2SwMoUqJYtoyhZ51zasbc/QOR5ccJ5Un/ijd/XdYA+OEpeZUCRNBuONbAoYxbR9tsco1Uc8yqYQTwodYJuTJ5B5Q6geikV5HC3OCeGVaKO6p5JGUY0xK9qJHHeUoAwzk97leRhxLdJNwI7DFvTlB7JlVjnUGIoLySCHhizQb6XQ5NZm4KUejvon3C/kbP5DTbLFY/2xOEHfNSk/D5VS3cIpLndiGoiF6hhaS3wScg+9UJGMMyDjNq9cfAbMKBR5b944RMoluSB5/MFmKhcTPmSGGK438FBDIX89MrruE3IRJ6QSSJpUR9mqvjSZ8MqEVuP3NyNX1dBDS/MbJpOKZO/1ItZSQedx3nmVuXJ5w5qcRpzSLExet1xu5khqWQmlwPx6TxwvKrtejlbofuWkgfPOCMFGv88qRcfLZIIrJvBwDYX0zpn9lvVuYAQh57vCvYFI3W7iSVw2s93RwVxC8OVZCovfHIpwTvQRWwwmDG4kxugMqJjWqeJo+BQQmJQc/GBoDYf/XWKi5cXMKI+bPJkxTiSthFQRO8MODjoHA6cMxRmSeTQnZkYmY09nZgFnl5B4I+u1QPMdAWN8kx76T9U7jhMWSGEsnruti+hz4zWpS6YoTZGNDtzMKAlJvxy4RnE8MLya78iSMytN1/duiPfMKsV3FhkJ8qGMIxIh0xMa+Enw4XngdJZxIdTSqff3VKwNpMi+/LueVCxRJI56hx1oQ9glpSk8zsF3mtb8b8OLG3p5uFHIH+E1rokPODsV/mBbEiN7qSNPzaTFs70uJ/3ilHv3Gqz2DXPU7ExtU3OkoSqzxNxrWxnnteehxaQp8OV2auiiE6H/sffbZ3h+l/He6XuMGACb2ngXvsRAlPBoQMVZzHKt3/IFl6ZkYlIYOivZyIk1zL/WdxmemthN4OhIGXc80IH50DQ+DE9+PGfONt7OlqduyaCEgUf2TPobrHfPUWgFRqY6BKGssKO56OxbfJN9M83QqBkFQ78MwuxD9ziC1uA38JmJAmi2TfRDudDl0ZfO9BgSknntQBpsdYFzLUbMYgdvlBM9x1VLtW8N+gu9M89ZdCrwTobWrE8kCyLlHFBfSWaWLyzao1AW+me7p1C/ZW53P79y5c13fVSuMiJjKCOQWOgKGqdYpVAY2sBnX5tgKCE8FfRzrxU8xeiYG5XIA+exp8ZPZjEBn5LGun8j40WlDP2oVVwGRATZbf5AlOFutVRSRqbX925GGc/qhFqWNrExiggIirZw2qVUJBCK90VA+LnTlKT7LW/dAtKddAF//zlTTpFLwEYMJKDndzCqnLT8bAxG2DUGETydayPVByNPu7F6BnMmMQCCiXkw8DCvXFDZ0XHYk/KPTQfXTLojZ9rUHgp8C4sZdYP7oQagiYRRyB10QDu38CgLxY3IIYu1wWu1/FIRxdrcH4qYz4oqnLGEWZGNVEI72iOZCupEZgsjMyYipIG7Xzx6+bmRiFX8jrTO/Ec5KqnnqguBH/ACknmRVEMgLXnH+xMzHiGkgbpxXqz3xRgH4s5lRboZzKHpif9pciykgxJGHDV3fVlQQSnkw8DOBWymvXrvT3CCu74HY+TUiGCvbbLmAcwgk+B7FscQ3QdXEOkbND4pvT1QQihgjRhACa9fhhtonoQVRMqrHvopUzAnBPcmyrRDrt0dvxJQaICYFlKjDkXCNntHKDlQi+DPJSKONH90mDzuhkt0+YBEWNbBOd+76A6ZpdTBWsZUDbqdy66jOcWHsT+FMBYBRlcBxSNeUKeCcx+n8T0YUB2xAfwKtdpJ0kZQocFWe5yVWHNxsYHV9EDf2bBlTLVMyV6hk3J4sqCJ7ZCWE4k1ETZ4a9l1CK+lyMU/96POfgsHAIe/tNn2g89sJF4VO75NTsswJjDJlC4czK5Cy6XYKIYWImz1LFECa3NzilBkBWvYfHmxvH+w/eeqlEJEEDq2u//r57eHh/s729vbu1WvXdt7YlUkai3J+L+dLpXiBJpS8YaLVFApAL3a6/hmImT4P5fRUorKPJpENyld20DGvXd3d6YBOp1Mv8Qz13//vYPdaj65evbp7TGE4QVG0wPtkzkvqnb4vTTLQKdNcf6UO6plMyU6ewRgfLxLC3R3lnFcPbp40sul0Ops9Afd31bMPaP8NSTMCEn6BUs+ve/weJ4o6xun6q8ISMIQ6PNJTaPX6uPzpLjrmte33A5ktA/BcC+Ha7mlV8lUFEmJwlseDdH2yun/9VaRsfpP+ZiWPdUduSL62rx503wbSwZBCyNqCwu4Qw+72YZQXrdMZMJAmflIlrr/q5CZnXs5OaxsbHo8nhEyrKIpeZfSMTanSdG0fHR0UCgUb+h8beD6Qpt2Dnf3n0sTQnyEnohONZzc+M22y3h32BIPBZDZbKZf9oM7LVd7nq3Ic3wNx8F5JHRQE6L8/bA9AbO9sX9sXMOQb8H6//tSL7I5jVJqu39kDWRMwODdCwUA8V65UKuVcPJ5MJkGUolQLiWG4tN9T3o7inxUI7w+3NWqN7NM+h5wG3RudcLlcRBeNnjTJYG+UDbfvNmPnxrARCiSz6PwoiM0EgqHu74E2NpiD8x525X9339/lwv7BVQ2G3e2D7cMSJ7ACpxIvSegfWNbLUMSElkBXcTT6+/wz4I+f0y6FgxkEoJzOZIIj1gG0Bg0mKMzb6R135wMAnf3tUeu6e3BwcPiAE2mqSzTSJFYSBASEocmx0uyYWl+/vQdQZHAeBBvBZK7cSGcCk0O7oDVMf6D4erd37O39051RCF1x2j4VNGMsqhC6XBRDjYOA9AgjPv8sYsueyyx5MtlcDAHQfQ6VbmNKlxUEt99Dce3q9lVdOoyiKLyPgURR3/ff+DhBHM8uoA8Mm2xu3P4OVJLnUQdPJpYOBA2FMQ1Smilj1/d9FPp0bfs5iPKsKlCiwH/5cH9n5+AxLTJjIDDv0FvfQJIEslOmbGeTMxk0RoAoDFriCIpDpMw9HNeuXhvHcFr74u+OIgpa5WdvD3cOtpWg5C0Jx5wHdKV6cxPKnCwA5XOxAdEsJ58FsuYEGNu6ebh/oISr13YPDvc1MNAHO8/f/fLpp1+8u3cPdAGof3rqHTexkK+Dvdu3b796tXcXIEnyLHsvhMdWH2qFBTIP9w8/vP9wiOgUOb1DNaxVI1ik6zd//eVjRJ9++suWJi48FcZAYGwRgEjEFlE8ZjnuWfoiAmUFR5HVjKM83Eb+YGf/9MOHUxuIgCenSOx3dvYPTz90fv3l04+79MtdTUT1fqyVUdl4U6gocUu5EQtdBAQUAqprg/onsPoO1IxiF6VABzbwxS+/vvsTyun+9O7XPw8gfPzxnz8MQew+GK2lQZdsA4GwBwWQ4fCF7eYKZzUosOrO8BkfgHufIvrlF6QJQwQff/rFvUMNJ+6N8oHgL2KVxSSK3BAFJu1rzrcN3n08QV/Uf/tVi3SkWRwSXMeUMG9xFDFQlLolDOh9q4n5ru2AL7TnR5bp3bs//+WT3zSu8JDDRjDULwcDikvSoF6llMPgRP5A6xpOgRZC/de//vOvf/jkk1cabnU0ZdvLxIC0GyVxJXWxA+S08n511/brAMO9X//2yV/+hjD8RSNN222NgbZfJgbk2UMN0OIJTGkq1eYQV3fAp30MCg/+F/3nk39opOmU1Swi8EVAernbRGZQOG1D+o1i1OqplhVXP/y9i+HdXz/p0R9uawzsuwEGjC6ZOc5xRkLMiKQojGqPaMU2UN30F7/9oQ/ib8M/v/a8zwgcZ2ugseTVNPPQRhLl3FVCuDkSyj6/p/hopA99+p+BNF3bftdNbSHmks+fuZlEyNiCliCfalHsKmb2i98+0WOEn5Gj0WiKE7m67RI1epxCZQDq4FAbhe8DFLr+Y6AR/zNQ/Gv7wNEn8OR82afJpExuAn+XF2oNZ7fw91/++Zc+iH8MMWwjDD4GSRMpJBzoOxeyxGxO2oz7EYxT9VGrdugAbP25r9b/0PgIABJQLZbgyhKzKPi3UOweBcvqvRBACK6pnm/3FPTs6x/+Ogytdv3aBXs4hgstcMluYkjJJqhxJEbLALzfuaoyZNf/z/9VdfrXXn1t9+Dqtm18SSCmBLBn2HK4BIo7Ij4CCQlEkp6KgM6h6iyevPvtt9/ufjjo6cPO7n4E+CaWBEJv4t9iG2scpau9dUBI0q1CPrqjKvjO6fPTQUHwcOf9Vqml0/OEkdWI7dL1O1koipopO4SDfKo+/v5VkYrBAVrelHcCgsoMoQjm33K4FApUauPDf9D19UgsdXX3sBXNk1RKb3WSwgwkUrHLVG9PbkuYOBvueqgNpnZPawKBYTyjC8GirlG5TBTOOOCIyTo9Tn29s9tTh92D50Uv0hkoGTBC5Z3v8lA4Myf5sX6I3qmo0unB9i6i7f2biW5xY1qDMiQuD0Ww/Gh0khTvD9zgrmr0/en+/unNKOea477r8lBsZCPaFkxcuWToY8Lt3mqpnchz1Mxb00tF4cwU8pqnDCkrdGlmrSEkacqKzX3tqKC4eEsbLEc1wgQpwYrJrPbM+HxM0KAwvYVjFm1kgaQRJqxK43bb7D7kKShcqeWvgx0lZwbkNf3fOFEiMCFhuOFlLhR0CVxsHBUsF73aSp63asdaExcPixHG1AoXmWBsxiKc1vJjVclK2yhyghULwcK85m09mk3OTDM14uawlACrdV9eGFUKSFA6Hn0KCmEZfUEGtFGpjRgiBQQWBQ9f/z6S90BS+PLNHG2YQ8L5JXRo6dNaHPhGQyEsJVHg9fr60WNNUIsT0uujo3/N1yjeg03kX4wPty2HnIFmYqxzGvNVufr66srqUduuuaz/Zn119ei/FjG8kGqfXIiJcpe3xu8OociXHq4o9HoYepDfH6+urKz/bBiE66Jg6uULUG5nEuQn4mo7WT9WQay/7IsP5n29jj5YvfWvuUZA+oSzjgtQi1AzOinmOAXWVRArx/kuK3CXygiFOQuxwmLnfli6WjgbE8JkUfpBOz0Q64+7EBWNUD9YvfW97mo6Q1a4SuVl+7wMkHW2CGH8/R6IleOvuvdg3HHvg5XX843jDIjuLNlbhPwtPZuJpV73j7z+VAk/IPNNH9XqrS/nyYyGZGVfLDcUzAEdYVKa1QfPfeWoRECcfDP8YFXLCmJ2lIgT1aWW1AJAf4UIdu9ocOb14zyOia/XBx+s3PpyoBVWQZqdKeFU4oyvopmL/DUDJY1ozrx+LOcf3hr+M2LF0EARXIKZCQNnHMsTqDTQD7chAzQgEIz1kX9EWjHwFTghdGQKm+46cLtwsqw7ySDIG6xdGwMxTqv3tRO0VKLO2aerBgo/lvXGLD/QG6tR/k6xNR3E0ffaUWdCsBXZ6Sk4FMFyXF4SCAbPD+MeTAWBWDGyBAYneMd01cDJ6lIEKqxpil0YxPGzkRogjjEdh881RTUgE8kuweVVgGH4MBPEyurvo0EjdPlevACcgXgqZBWaZi8QV4Rp8jVEAxDVmSCO+fE20nK8DFqs4SZESLdNZ0UIGO/cRXrdmQFighU4/TKzlqyAkuHAOeY1fZd7GRgGQDiRALNBHI9t2rJLyIiGYyeg6tLf6Ih022RWxB26MZPKB6LkcMwEgVgxKk9QfKA86FC2WRdI/WXY4s2M08QJu0Azb8gHezWSrdydDeL16GNAD7rrzwLlFwmR0JsQsUuVXDrkNqnXN3gSNVriCUm5mb2Snc2JlZXOaMkAitGuzLuTFUee0lskTVfbNVCI6TffL4qhkjDIk3GrSy7E167k5gCxejy2ZtUqlXsRdyhdiQg6qgExSHGle6BxfhgKBoNww84kTpJIbOcBsbJ6czSfgnRp0C8UyP1QEvXKhRCze+XaOWE43cFy0cAwQUIoVjKKyKZvzgPiKDH6rHGhluwr7mayDDhKTzNwiHvzNRA782se3eFA+mab1b82xEmukwuqp4jPAwKxYvTWGyXi/uGAbyj9Q1TUd+EQZ301R+wsjeTODU+8UitJus8HqQNV9fe7ZOYEcVQbqzhT8hPNqHWmDAQjpkO2+si/eEv/WjBbeJcXCP1gE7eLcmXQlhGfbWJVFI/ZsU4bJlrWpNOh9Elef7cEQZJ2Nv/In1RnKz0b87mPNU+ycq/qtRsFmi7pQTkzsODx5lwgVo62xiqzOPsop60yZcpRWie8wUmalSTOFwH1TqdTKGcDxixRZht7lCzXU4LR7QK0Mnl/TDP8FZ+e2WlYMdb0ZIFjKIKNhN5WLhxSrMRxUpeqj04Mw6pw48EzRE9fvoxGv6oKlNHkKySFRGWkw2deECtH98aL5JCt5bQFGk+2pLvxujfjppKF3coZsSIGWJc61uf1isaX0LiFrhbG5q+SjjlBrDwcZ4WCoqFFEZwS8/e/4ipVjPK+QhsbjvYZ/gDBlk7G37MceHFr9vlVujXpdHC2pjmSM7PFzirpTAMB+i310ELpLkZV5skp/kFuQq0CPxzPPn+XXk++0GQEhTNb09u5MvJUcXGrbFQjBN0WN9zKCKxesISzJGRTfp3XXQeac4NYfzlpRKG3VulrqrPR0vEVdoYewIAWUTZeqZIFPPIKKObiWN2bNij4pKLuNOICIFaO5cnfht5is1eiccYe6fzdVloUWHt3P53ItR3GTdrhMqiytFAVaBxadNw0ToKK/kBkoPlwbhDrD9lJxcWZmq2Lwpl+pKfXkBBFQbGxPHJ5ucyUyponXiimeAYZJgwjKZ3L20hF/4vuk/lBrByl9BozxXoXhTPX1jVO6LnSbMrhOIkHQ+FpeVIo2axLyMYqmFk9EDWjLXaVx/ODWH/N6TllhELRC09H70+73MBpr+9mLjkt8w7Fyk/qLdmX8vGSl3Hp3aLXDDhxpfJgfhArt57q2h9BXeETe6SteI4ZewhdtPBg2tRCFrC0ulCApgirvreulQ2+W57XZausONbL2HErDyrhTGdovHCkxIJAQ63bxeH0i6SKPHwRowFDU0YgGmABTqzceqhX1YX2Fmj4h+UE3M6mHt28Gf1KIrUwIDVto3WlpCuM2ofGnxg0qDfAvC5bpaOUXt4AaQfID0qCkORrjUA4HMi1olUR9sNpaPE5xtfRaigHvGPxEo6sFE5ZBp/iLodBm30aHM0+ukagXuvGR1jHNgCH0XIkq/xlKEFO+++VeLob/LEy8E+50QuCls+FTq2uaVJfvop8RunRu3f5YZ1AMECRdryefXQtK57qhaqYIzXoqqBTw0HCtc1MI3IvmpflVLsFprfZJQEoypK6f4kUlfNvgUI5nQzkioM3KtkFR1YvYc807y8EYv24qqN3mKNX1cEhUxwZhnS63ZmcsnAGgMr0vVvOQA79S/Uaons29G9nM2H3mtOJ/M/wvVVE/kTvCidQ6CwEYuXW1zp+G3O0FNGHGMFvFZJjZ3Wuubs0KzV1ujPxRi7XyMYzHqemDprb6id5VkFfrfwLmacVpQlksuYHBYeMojeGb4En57vJdjp1qri5Wvd2ClpTTV2RLC+m2UZmVnA46vU6AOdfY6NHDVBVln1RMqjoto/kwMPVhUCs6rECeTzO5vBnl9WhgrQetBS90udz0mZbEISuViAUyHRMPYiypglRfFoka0ietN/vzxplhaHCYu4O0XFVr7MOEtOGpZLKaOKWYnqUDRmV2JTSzVmoAl4vyIqjx3r9CTghO4yW0cebYEudmVTJJfgeAUcuYOKukizoLAZi5dbbicqHSozB+xniAMgiNgwflBKO1VsC/rRp/f4Z26LytHqs+y48SEZ05CmovMnQ1Z36xC1Wq115GazVqpT+2bbNtC4v/8L26eipvjzlR6240xmKV8BWVa0K47jVTrL5ROvBg9aDlMwJtN2KUfmISdxIg0VyCoWQq9CrR1hZ4E86UajgXFMomK6ASFRSw1hoJUgu+uKHSi6WViiWK1dObj6VKKZU11nNuzh5bIuq9sprSQ8ETjkAKDRi8Xi20agAW63No8RIfcs8ySZenDTiI24kHIhny5WnMniyacJVa3ZRVqwec3rXN9AVrafkaPTRo2i7lOdZUlVmaCFIfutFJa1rfz3JWMNvxkpWD1hQK1aPfXqFRpzwFQd2tLtRE4d2l5gHJ7lpew0C6bIJLQhZYDtaBIUBCKQUNq3xxaGFpISoA0XVs05gQv/jhh/Mde01CwRKU4ct5xAnKG818qKcvqAlHwGk2wuBqOrej0Oq5VPr8zi0khTDRR0n2fjFTeo0QGcRgXo98Ra8nmanSt0FiAxbjTZPymlzlyjPoBgAv88vUOu6KYXaXWdrP32aSrz0V8oxlJ9dIIIrCieKtvkF6tZDg+sUK+soJ+PxeDITCF0kD7pUqbPRzvGcvFjVL3momn3Rg4NaAkXMOzcKI+OkgIhkL54DPdoEMmaZG8W6ftShmqfo5e3CCAAew61zolg9+tLozRS4K294J7d0iiuDCbhVTN08Xp9padePDd9JixOc4e3o0ikHlKwZt9By4fWtGShWb31v/AomK/uD+U2xc1Kl1rX7VqrqeDi9DrW6/rM4rT/5goYGdQj0LwcgyXV+nypS68fClOULkIlclo0NDxsacEJo33xtjEX1JKMAAAWfSURBVGL9+M202VpIPzLv9XuLUQZoFuTZ6WrnvoFIIVmaikGZn8he0iauLNAWJiHKJXWZsbpy9LNu0+KQFBt7SRus+nrdR2GlhPZ9ZKZWh0DQ/18/fviGMuxz74Eg+ctyFEAe78iyU8LT39++Plpf7dLKreO3998wc4yas0sbKppOIZ1JF5QbM9Kz33+///bt24f37//++zOWIoy6nbXfEy/JUcSBXp4GcTvpokRBaXtjKIq0z/UmB8h0LsdRNIBBP4P6UhxELuU2cL4JTki/uxxHUZi5uIPKJzhqrpdqKHMsl2FjQ8Cws6RPVkKUbQmBmDEraFEHEy4lGE+C2TsVcBRWpWzFWbOCFnV24jLMU85IJbQgMCql3EUXhVnvOYFe49bXJZJfv9lq5GR2H0IQCyUBSOk1Imv/VfEyzFPIwc14uDgmOnqXu5tZUJemDm4izb4EEHFgvJuteyxLFAxed+PMFECKmsIMFD0ta4R2CpUj00M6TARAq6sbWdASpvlu4RJCwJPqNBA4hrRhtJ9iLVkAVeNFEtB78eYp84KZJk1EUadLydNwRA1zVMi0L9w8ZR3GGHCLWNdtE9hMN4FRloqU4sIDj0rJEAO0ChGDMVJ3sgJ4l/7XMPbHC1aKwA+s/lHUkUhgrKPBhkOmDaY231+wUmQdhrmaS27mpnQubMSaNVHvy9CVv1hP4azI+hu1cCtdaqandl8oIiXotapgwsXuHk++0F8dhNvF9kl8VgdJoOHgdOrjOP31hdqnXFTXXUM7WzyZ46rKk30h6xSXrdxFLswMnAh60gTtQtGfmaeTxx0/KU7yEoqPM3NO1J2f1nJRygBDeS4MV5Sp7NqEfcMJvpALXMxbf9zJH3hmkhMqhvnffxvMAXbiXahMPlX6EF86DrcnGH9aZYkJDDjShwUwKK9QcLDjRsrOMrSUf9mIB5eXqzrDwfhzmWNwndzf6o0uhAE9j3RzPCWBLpcFI0Qp/7iRCS7F3jo9mezjquDSTW4gnVoQAwqlMs2xxZTqZBMOFRxf3cwGgmbvxV0LJhuJqtdoSJjgFsaAKNMxuJ6HGMXypUosYCY7nMH4k5LEGJbzcPrpeK/3fCjuGr2dHUKcFvL+rHn9BeFkuc3RUzapQvGMKY3NaKeD8qOYS6iCxpm6eifIGcg94IelbT2dgOzZkssQylmn3SBBUsi/ON/bE7u0lqy0+5ckitLR9GReA9mzLZCLA97ocrsPgxKilXO/Y2AtXkCBDt7lL8lygqgzzQa9Z7tfyALvrOoVtIj55jk7SJ1Jm9yrV2IuSa6y9KSjU1YCnY0TaWCk2Fqi+ML5ULib0R7DcTElC5RV10sQ/NlyS+3d5cSPDmbncJJvnmcLuTPTv9SysgleHwJKhdit9JnCz82JK7MBBIyiabrnlnDaeKp8HhDx3stVoFjkDZbyQitbPOu7xWIG2+HsYlXmfaWS3C1FW9nzbFt2JtGzQo8DJ33jS4gHXKd9tXlSIV3aLG/pFmmtJE1TiBdSUSbVBaKR89xfhP0RpAk4RifkyalFiPCxvijwn73zMNwAeb3ter1Xhdvpoox31xSfp6ATqoB6NJGI1ovi8OZKHWbArAwnt2ugmQ6eIx/bSIOaj8ENbpNwKNqQ7uPiOd83tZFp+NWxvSLP2HuLNGhG4uV28R4AJ7nMOXdjrXkaoFaSCP1LSkg4JAzS0fO+T96pzuwFnwBQKxaj7Wix2KpvIVDNcizjdq+dPyte82SboJWSKKgDhEUghCIomFOUcgZjTwrNAqJmo5GOu9fW1kzbs+bcyORsYCsqS9TotTFGtOqpaB3YTCusObVk1o8Ofnwjg/gBIsUUz1oGPfxSS5Xk3L/PC9hmUyitzKQBWy3q4xG16zYAGrFLf7/l4hSMqUB6dHltmuemUCamzjkmZ3i4/w8Etq+r9dOEAgAAAABJRU5ErkJggg==',
        insetIconURL: 'data:image/jpeg;base64,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',
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    
    {
        name: 'Snapshot',
        extensionId: 'snapshot',
        collaborator: 'Stallion AI',
        iconURL: 'data:image/jpeg;base64,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',
        insetIconURL: 'data:image/png;base64,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',
        description: (
            <FormattedMessage
                defaultMessage="snapshot with webcam"
                description="snapshot extension"
                id="gui.extension.snapshot.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://scratch.mit.edu/wedo'

    },
    // {
    //     name: 'NewBlocks',
    //     extensionId: 'newblocks',
    //     collaborator: 'Me',
    //     iconURL: newBlockImage,
    //     insetIconURL: newBlockButtonImage,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="New blocks."
    //             description="my block"
    //             id="gui.extension.newblocks.description"
    //         />
    //     ),
    //     featured: true,
    //     disabled: false,
    //     internetConnectionRequired: true,
    //     bluetoothRequired: false,
    //     helpLink: 'https://scratch.mit.edu/wedo'

    // }
];
