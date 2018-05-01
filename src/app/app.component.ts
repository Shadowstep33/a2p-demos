import { Component } from '@angular/core';
import * as PIXI from 'pixi.js';
import { PixiService } from 'angular2pixi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainStage: PIXI.Container;
  
  constructor(
    public pixi: PixiService,
  ) {
  }
  
  ngOnInit(){
		//Init renderer
		this.pixi.init(
      500,
      500, 
      document.getElementById("worldCanvas") 
    );
    
    //Init layers
    this.initLayers();    
  }
  
  initLayers(){
    this.mainStage = new PIXI.Container();
    
    this.pixi.worldStage.addChild(this.mainStage);   
    console.log(this.mainStage);
  }
}
