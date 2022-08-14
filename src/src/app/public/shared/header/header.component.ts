import { Component, OnInit } from '@angular/core';
import { CustomSettings } from 'src/app/core/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isExpanded = false;
  public siteName: string = '';
  private _env: CustomSettings;
  constructor() { 
    this._env = environment as CustomSettings;
  }

  ngOnInit(): void {
    this.siteName = this._env.application.appHeaderTitle;

  }

}
