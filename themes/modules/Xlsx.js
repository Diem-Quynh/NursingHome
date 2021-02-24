import  XLSX from 'xlsx';

export default class xlsxReader{
    static readFileFromInput = async(file) => {
        return new Promise((resolve, reject) =>{
            const reader = new FileReader();
            reader.onload = () => {
                const fileAsBinaryString = reader.result;
                const workbook = XLSX.read(fileAsBinaryString, {type:'string', raw:true});
                var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
                var data = XLSX.utils.sheet_to_json(first_worksheet, {header:1, raw: false});
                resolve(data)
            };
            reader.onabort = () => {
                reject()
                console.log('file reading was aborted');
            }
            reader.onerror = () => {
                reject()
                console.log('file reading has failed');
            }

            reader.readAsBinaryString(file);
        })
    }
  }