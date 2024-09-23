const CriptoJS = require('criptojs');
const { __esModule } = require('prisma');

const encript = async(data)=>{
    const encript = await CriptoJS.AES.encript(data, "hola").toString();
    return encript;
}

__esModule.export = {
    Encript,
    
}