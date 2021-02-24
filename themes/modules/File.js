export default class File{
  static readFileFromInput = async(file) => {
    return new Promise((reslove, reject) => {
      var reader = new FileReader();
      reader.onload = function(e) {
        reslove(e.target.result)
      }
      reader.readAsDataURL(file);
    })

  }
}