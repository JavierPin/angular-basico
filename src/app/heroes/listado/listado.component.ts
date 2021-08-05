import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes:string[] = ["Spiderman", "Batman", "Pablo Muertes", "Hulk", "Peperoni"];
  heroesBorrados:string[] = [];
  ultimoBorrado:string = "Nadie";

  borrarHeroe():void{
    this.ultimoBorrado = this.heroes.pop() || "Nadie";
    if(this.ultimoBorrado != "Nadie") this.heroesBorrados.push(this.ultimoBorrado);
    console.log("Borrado: " + this.ultimoBorrado);
    console.log(this.heroesBorrados);
  }

  get nHeroesBorrados():number{
    
    return this.heroesBorrados.length;
  }

}
