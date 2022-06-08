const fs = require('fs');

class Contenedor{
  constructor(filename){
    this.filename = filename
  }

  async save(objeto){
    let data = await fs.promises.readFile(`./${this.filename}`, 'utf-8');
    if(!data){
      objeto.id = 1
      const arr = [objeto];
      await fs.promises.writeFile(`./${this.filename}`, JSON.stringify(arr))
      return objeto.id;
    }else{
      data = JSON.parse(data)
      objeto.id = data.length + 1
      data.push(objeto)
      await fs.promises.writeFile(`./${this.filename}`, JSON.stringify(data))
      return objeto.id;
    }
  }
  async getById(id){
    try{
      let data = JSON.parse(await fs.promises.readFile(`./${this.filename}`, 'utf-8'));
      const indice = id - 1;
      return data[indice];
    }catch(error){
      console.log(error)
    }
  }

  async getAll(){
    try{
      let data = JSON.parse(await fs.promises.readFile(`./${this.filename}`, 'utf-8'));
      return data;
    }catch(error){
      console.log(error)
    }
  }

  async deleteById(id){
    try{
      let data = JSON.parse(await fs.promises.readFile(`./${this.filename}`, 'utf-8'));
      const indice = id - 1;
      data[indice] = null;
      await fs.promises.writeFile(`./${this.filename}`, JSON.stringify(data))
    }catch(error){
      console.log(error)
    }
  }
  
  async deleteAll(){
    try{
      await fs.promises.writeFile(`./${this.filename}`, '');
    }catch(error){
      console.log(error)
    }
  }

  async getRandom(){
    try{
      let data = JSON.parse(await fs.promises.readFile(`./${this.filename}`, 'utf-8'));
      const productRandom = data[Math.floor(Math.random() * data.length)];
      return productRandom;
    }catch(error){
      console.log(error)
    }
  }
}

module.exports = {
  Contenedor
}
