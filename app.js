const imagemin = require('imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
 
imagemin(['input/*.jpg'], 'output/', {
    plugins: [
        imageminJpegRecompress({quality: 85})
    ]
}).then(() => {
    console.log('Images optimized');
});