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
  menuContainer: PIXI.Container;

  currentDemo = "sprite";

  constructor(
    public pixi: PixiService,
  ) {
  }

  ngOnInit() {
    //Init renderer
    this.pixi.init(
      500,
      500,
      document.getElementById("worldCanvas")
    );

    //Init layers
    this.initLayers();
  }

  initLayers() {
    this.mainStage = new PIXI.Container();
    this.menuContainer = new PIXI.Container();

    this.mainStage.interactive = true;
    this.menuContainer.interactive = true;

    this.pixi.worldStage.addChild(this.mainStage);
    this.mainStage.addChild(this.menuContainer);
    console.log(this.mainStage);
  }

  chooseDemo(demoScene: string) {
    this.menuContainer.removeChildren();
    this.currentDemo = demoScene;
  }

  helloWorld() {
    alert("Oh no!");
  }

  renderTutorial() {
    switch (this.currentDemo) {
      case 'animation':
        return `<sprite *ngIf="currentDemo == 'animation'" anim="hover" imgUrl="./assets/koffing.png" [container]="mainStage" x="0" y="0"
        scale="0.25" [anchor]="{ x: 0, y: 0 }">
      </sprite>`;
      case 'filter':
        return `<sprite *ngIf="currentDemo == 'filter'" imgUrl="./assets/koffing.png" [container]="mainStage" x="0" y="0" scale="0.25" [anchor]="{ x: 0, y: 0 }">
        </sprite>
        <filter-effect *ngIf="currentDemo == 'filter'" [container]="mainStage" filterName="blur">
        </filter-effect>`;
      case 'sprite':
        return `<sprite *ngIf="currentDemo == 'sprite'" imgUrl="./assets/koffing.png" [container]="mainStage" x="0" y="0" scale="0.25" [anchor]="{ x: 0, y: 0 }">
            </sprite>`;
      case 'interaction':
        return `<sprite *ngIf="currentDemo == 'interaction'" [handleClick]="helloWorld" imgUrl="./assets/koffing.png" [container]="mainStage"
        x="0" y="0" scale="0.25" [anchor]="{ x: 0, y: 0 }">
      </sprite>`;
      case 'lmenu':
        return `<menu *ngIf="currentDemo == 'lmenu'" [container]="menuContainer" x="100" y="100" w="500" [itemWidth]="150" [itemHeight]="150">
        <sprite *ngFor="let x of [1,2,3,4,5,6,7,8]" imgUrl="./assets/koffing.png" scale="0.25" [container]="menuContainer.children[0]"
          fontSize="32px" [text]="'Item '+x">
        </sprite>
      </menu>`;
      case 'hmenu':
        return `<menu *ngIf="currentDemo == 'hmenu'" [container]="menuContainer" x="100" y="200" w="500" [itemWidth]="150" [itemHeight]="150" [isGrid]="true">
        <sprite imgUrl="./assets/koffing.png" scale="0.25" [container]="menuContainer.children[0]" fontSize="32px">
        </sprite>
        <sprite imgUrl="./assets/koffing.png" scale="0.25" [container]="menuContainer.children[0]" fontSize="32px">
        </sprite>
        <sprite imgUrl="./assets/koffing.png" scale="0.25" [container]="menuContainer.children[0]" fontSize="32px">
        </sprite>
      </menu>`;
      default:
        return `No Code for this Demo`;
    }
  }
}
