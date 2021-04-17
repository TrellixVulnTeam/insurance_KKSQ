import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private languageService: LangService,
    private translate: TranslateService,) { 
      this.translate.use(languageService.getLanguage());

    }

  ngOnInit(): void {
  }

}
