import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-amlist',
  templateUrl: './amlist.component.html',
  styleUrls: ['./amlist.component.scss'],
})
export class AMlistComponent implements OnInit {
  btnCreate: string = 'Create';

  formsBool: boolean = false;

  subsign: string = '';
  Backgroundcolor: string = '#4F5467';

  routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe(
    (params: ParamMap) => {
      this.subsign = String(params.get('color'));
    }
  );
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  changeView() {
    this.formsBool = !this.formsBool;
    if (this.formsBool == true) {
      this.btnCreate = 'Show List';
    } else {
      this.btnCreate = 'Create';
    }
  }

  getColor() {
    return this.subsign;
  }
}
