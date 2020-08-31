abstract class Animal{
  public name:string;
  constructor(name:string){
      this.name=name;
  }

  //抽象方法 ，不包含具體實現，要求子類中必須實現此方法
  abstract eat():any;

  //非抽象方法，無需要求子類實現、重寫
  run(){
      console.log('非抽象方法，不要子類實現、重寫');
  }
}

class Dog extends Animal{
  eat(){

  }
}