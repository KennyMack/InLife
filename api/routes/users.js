var express = require('express');
var router = express.Router();
//var multer = require('multer');

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//     cb(null, '../public/uploads/')
// },
// filename: function (req, file, cb) {
//     cb(null, file.originalname + '-' + Date.now() + '.' + path.extname(file.originalname));
//     }
// });

// var upload = multer({
//   storage: storage,
//   fileFilter:function(req, file, cb) {
//     //Set this to a function to control which files should be uploaded and which should be skipped. It is instead of onParseStart.
//   }
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/add', /*upload.single('mainimage'),*/ function (req, res, next) {
//     // get form values
//     //console.log(req.body.mainimage);
//     console.log(req.body);
//     res.send('respond with a resource');
//     if (req.files.mainimage){
//         console.log('uploading file...');

//         var mainimageOriginalName = req.files.mainimage.originalname;
//         var mainimageName = req.files.mainimage.name;
//         var mainimageMime = req.files.mainimage.mimetype;
//         var mainimagePath = req.files.mainimage.path;
//         var mainimageExt = req.files.mainimage.extension;
//         var mainimageSize = req.files.mainimage.size;
//     } else {
//         console.log('default image...');
//         var mainimageName = 'noimage.png';
//     }

// });

module.exports = router;
